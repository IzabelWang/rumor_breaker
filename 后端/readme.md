# 挑战杯工作记录

## 1.数据处理（20200119-20200122）

### 1.1微博谣言数据 

来源：http://alt.qcri.org/~wgao/data/rumdect.zip

处理过程：提取出文本内容以及标签，提取为csv文件

处理方法：python

代码：

```python
import pandas as pd
import json
dataset = pd.read_table('/home/sherry/project/创新杯/data/Weibo.txt',sep='\t+|:')
df = pd.DataFrame(dataset)
cols = [1,3]
# 表格共两列，第一列是id，第二列是标签，0为其它，1为谣言
df = df[df.columns[cols]]
df.columns = ['eid', 'label']
print(df)
# 做一个统计分析，多少个谣言，多少个非谣言
print(df['label'].value_counts())
# 2350个非谣言，2313个谣言
# 每个样本，根据eid提取其文本信息作为新的一列
textPath = "/home/sherry/project/创新杯/data/Weibo/"
def extractEid(eid):
    with open(textPath+eid+".json") as f:
        data = json.load(f)
    return(data[0]["original_text"])
textData = [extractEid(str(eid)) for eid in df['eid']]
df['text'] = textData
# 根据文字信息去重复
pd.DataFrame.drop_duplicates(df, subset=['text'], keep='first', inplace=True)
print(df['label'].value_counts())
# 剩余2332个非谣言，2183个谣言

# 控制一下谣言的字数在100以内
df = df.loc[df['text'].str.len() < 100]
print(df['label'].value_counts())
# 剩余985个非谣言，691个谣言

# 把谣言和非谣言保存成csv文件
df = df[['text','label']]
# 根据label sort一下
df =  df.sort_values(by=['label'])
df.to_csv("/home/sherry/project/创新杯/data/rumor.csv",index=False,sep='\t')
```

### 1.2 流言百科

网址：http://liuyan.guokr.com/

方法：网站有限制 只显示100页，每页有9条留言，分别爬取100页为真、假、论证中的流言

对于每个流言，有以下字段：

1. 流言标题（字数尽量少）
2. 流言详细内容（看字数决定用不用）
3. 留言类别（真、假、论证中）
4. 解析（网页中的真相内容）
5. 详细解析（网页中的论证内容，包括html样式）

爬取工具：scrapy

#### 1.2.1 建立项目

```bash
 scrapy startproject guokr
 cd guokr
 scrapy genspider liuyan http://liuyan.guokr.com/category/
```

#### 1.2.2 配置

在`settings.py`中设置

```
ROBOTSTXT_OBEY = False
USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
```

#### 1.2.3 爬取主程序(`liuyan.py`)

```python
# -*- coding: utf-8 -*-
import scrapy
from guokr.items import LiuyanItem

class LiuyanSpider(scrapy.Spider):
    name = 'liuyan'
    start_urls = [
        'http://liuyan.guokr.com/category/?cond=discussing',
        'http://liuyan.guokr.com/category/?cond=true',
        'http://liuyan.guokr.com/category/?cond=false'
    ]

    def parse(self, response):
        rumors = response.css('.rumor-title> a::attr(href)').extract()
        for item in rumors:
            url = response.urljoin(item)
            #print(url)
            yield scrapy.Request(url=url, callback=self.parse_detail)
        # 爬取下一页
        next_page = response.css('body > div.wrap.cate-page > div.main > ul.pages > ul > li:last-child > a::attr(href)').extract_first()
        if next_page is not None: 
            url = response.urljoin(next_page)
            yield scrapy.Request(url=url, callback=self.parse)

    def parse_detail(self,response):
        item = LiuyanItem()
        item['title'] = response.css('h2.rumor-title::text').extract_first()
        item['descrip'] = response.css('div.rumor-desc::text').extract_first()
        item['LiuyanType'] = response.css('body > div.wrap.article-page > div.main > div.rumor-sum > strong::text').extract_first()
        item['answer'] = response.css('body > div.wrap.article-page > div.main > div.rumor-sum > p.rumor-truth::text').extract_first()
        item['detail'] = response.css('body > div.wrap.article-page > div.main > div.rumor-content').extract_first()
        yield item
```

#### 1.2.4 启动爬取

```bash
scrapy crawl liuyan -o liuyan.json
```

数据汇总：

* 真流言（非谣言）：474条
* 假流言（谣言）：899条
* 论证中的流言：337条

## 1.3 新冠专项
有两个平台，一个专注肺炎病毒辟谣的h5页面，另一个是小程序
h5页面的爬虫比较简单，数据以json格式封装，使用几个get请求即可
小程序页面需要使用抓包

肺炎专项谣言数据
对于每个流言，有以下字段：

1. 流言标题（字数尽量少）
2. 流言详细内容（看字数决定用不用）
3. 留言类别（真、假）
4. 解析（网页中的真相内容）
5. 详细解析（网页中的论证内容，包括html样式）
6. 论证机构

https://vp.fact.qq.com/loadmore?artnum=0&page=10&_=1580272280867
### 1.3.1 h5页面爬虫
依旧使用scrapy,代码如下：
```python
# -*- coding: utf-8 -*-
import scrapy
from urllib.parse import urlencode
import json
from jiaozhen.items import JiaozhenItem

class LiuyanSpider(scrapy.Spider):
    name = 'liuyan'
    allowed_domains = ['https://vp.fact.qq.com/']
    base_url = 'http://https://vp.fact.qq.com/loadmore/'
    article_url = 'https://vp.fact.qq.com/article'
    start_urls = []
    for i in range(1,11):
        params = {  
            'page': i  
        } 
        url = base_url + urlencode(params)
        start_urls.append(url)
    
    def parse(self, response):
        resp = json.loads(response.text)
        for item in resp["content"]:
            params = {  
                'id': item["id"] 
            } 
            yield scrapy.Request(url=article_url+ urlencode(params), callback=self.parse_detail)

    def parse_detail(self,response):
        item = JiaozhenItem()
        item['title'] = response.css('body > div.title > h1::text').extract_first()
        item['descrip'] = response.css('body > div.title > p.subtitle text::text').extract_first()
        item['LiuyanType'] = response.css('body > div.check_content.text > div.check_content_mark > span.mark_total > span.mark_title.fake_mark::text').extract_first()
        item['answer'] = response.css('body > div.check_content.text > div.check_content_points::text').extract_first()
        item['detail'] = response.css('body > div.question.text').extract_first()
        item['author'] = response.css('body > div.check_content.text > div.check_content_text.check_content_writer::text').extract_first()
        yield item
```
数据汇总（一共98条）：
* 真（非谣言）：7条
* 假（谣言）：83条
* 疑：8条

### 1.3.2 丁香园辟谣信息
使用现成api瞬间搞定 感谢[Isaac Lin](https://github.com/BlankerL)
就只有三项：标题、简介、理由
都比较简洁
数据共105条


### 1.3.3 现成的题库
两个答题链接：
* https://news.qq.com/zt2020/2020wuhan
* https://news.qq.com/zt2020/2020wuhan/disinfect.htm?adtag=jz


求真的问卷每个题目四个信息：标题、图片、选项、答案以及解答

第一个辟谣知识有33道题目
第二个消毒知识有19道题目

## 1.3.4 今日头条辟谣内容
现成的api（目前有169条，170可以换成一个较大的数字）：
https://i.snssdk.com/rumor-denier/list/?count=170<br/>
其中有用内容如下：
* 谣言id（id）：对应文章地址，形似https://m.toutiao.com/i6787665808240673283
* 封面图片地址（pic_url）
* 谣言标题（title）
* 谣言类型（top）：0为谣言，1为论证中

在此基础上新增两项：
* 详细解析：富文本格式

使用一次爬虫即可，这次使用pyspider，安装有一点麻烦
https://blog.csdn.net/u011451186/article/details/88222328

```python
from pyspider.libs.base_handler import *
import json

class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        self.crawl('https://i.snssdk.com/rumor-denier/list/?count=170', callback=self.index_page)

    @config(age=10 * 24 * 60 * 60)
    def index_page(self, response):
        resp = json.loads(response.text)
        article_url = 'https://www.toutiao.com/i'
        for item in resp["data"]:
            self.crawl(article_url+ str(item["id"]), callback=self.detail_page,fetch_type='js',save={"id":item["id"],"pic_url":item["pic_url"][0],"title":item["title"],"top":item["top"]})            


    @config(priority=2)
    def detail_page(self, response):
        return {
            "itemId":response.save["id"],
            "pic_url":response.save["pic_url"],
            "title":response.save["title"],
            "top":response.save["top"],
            "ans":response.doc('div.article-box > div.article-content').html()
        }
```
总共169条谣言数据，比其他数据好的地方是有封面图片

## 2.使用caddy部署h5页面（20200202）
参考：https://blog.univerone.com/post/3-caddy-hugo-git-20181211/
注意在github仓库上设置webhook
这样每次commit到远程仓库的时候服务器就会自动更新页面了

## 3. 建立api接口并存储数据
### 3.1 quiz接口
链接： http://120.79.197.140:1337/quizzes
一共有53条数据
| 名称      | 解释                  |
|-----------|-----------------------|
| id        | 编号                  |
| ques      | 标题内容              |
| flag      | 空，来存储用户的答案  |
| img       | 题干图片              |
| ans       | 题目正确选项，为数字  |
| tip       | 答案解析，html格式    |
| item__001 | 选项A                 |
| item__002 | 选项B                 |
| item__003 | 选项C（为空则不显示） |
| item__004 | 选项D（为空则不显示） |

### 3.2 rumor接口
链接： http://120.79.197.140:1337/rumors
一共有2307条数据
| 名称     | 解释                                                |
|----------|-----------------------------------------------------|
| id       | 编号                                                |
| title    | 标题内容                                            |
| type     | 0为谣言，1为疑问，2为真（null等同于0,还有“新”类型） |
| category | 分类（0为新冠专项）                                 |
| img_url  | 封面图片的链接                                      |
| descrip  | 流言的简述，有些为空                                |

### 3.3 passage接口
http://120.79.197.140:1337/passages
一共有2307条数据
| 名称    | 解释                                                |
|---------|-----------------------------------------------------|
| id      | 编号                                                |
| title   | 标题内容                                            |
| type    | 0为谣言，1为疑问，2为真（null等同于0,还有“新”类型） |
| descrip | 流言的简述，有些为空                                |
| answer  | 简短的流言论证，有些为空                            |
| detail  | 详细的流言论证                                      |

