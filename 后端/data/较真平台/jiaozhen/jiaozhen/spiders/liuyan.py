# -*- coding: utf-8 -*-
import scrapy
from urllib.parse import urlencode
import json
from jiaozhen.items import JiaozhenItem

class LiuyanSpider(scrapy.Spider):
    name = 'liuyan'
    base_url = 'https://vp.fact.qq.com/loadmore?'
    start_urls = []
    for i in range(1,11):
        params = {  
            'page': i 
        } 
        url = base_url + urlencode(params)
        start_urls.append(url)
    
    def parse(self, response):
        resp = json.loads(response.text)
        article_url = 'https://vp.fact.qq.com/article?'
        for item in resp["content"]:
            params = {  
                'id': item["id"] 
            } 
            yield scrapy.Request(url=article_url+ urlencode(params), callback=self.parse_detail)

    def parse_detail(self,response):
        item = JiaozhenItem()
        item['title'] = response.css('body > div.title > h1::text').extract_first()
        item['descrip'] = response.css('body > div.title > p.subtitle::text').extract_first()
        item['LiuyanType'] = response.css('body > div.check_content.text > div.check_content_mark > span.mark_total > span.mark_title::text').extract_first()
        answer = response.css('body > div.check_content.text > div.check_content_points>ul>li::text').extract()
        item["answer"] = '\n'.join(answer)
        item['detail'] = response.css('body > div.question.text').extract_first()
        item['author'] = response.css('body > div.check_content.text > div.check_content_text.check_content_writer::text').extract_first()
        yield item


