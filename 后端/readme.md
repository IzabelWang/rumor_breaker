# 创新杯工作记录

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