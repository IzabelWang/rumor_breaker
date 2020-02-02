# -*- coding: utf-8 -*-
import scrapy
import json
from toutiao.items import ToutiaoItem
from scrapy.selector import Selector
class RumorSpider(scrapy.Spider):
    name = 'rumor'
    start_urls = ['https://i.snssdk.com/rumor-denier/list/?count=170']

    def parse(self, response):
        resp = json.loads(response.text)
        article_url = 'https://m.toutiao.com/i'
        for item in resp["data"]:
            yield scrapy.Request(url=article_url+ str(item["id"]), callback=self.parse_detail,meta={"id":item["id"],"pic_url":item["pic_url"][0],"title":item["title"],"top":item["top"]})            

    def parse_detail(self,response):
        item = ToutiaoItem()    
        item["itemId"] = response.meta["id"]   
        item["pic_url"] = response.meta["pic_url"] 
        item["title"] = response.meta["title"]
        item["top"] = response.meta["top"]
        print(response.text)
        item["ans"] = response.css("#article_content").extract_first()
        yield item


    @config(priority=2)
    def detail_page(self, response):
        return {
            "itemId":response.save["id"]
            "pic_url":response.save["pic_url"]
            "title":response.save["title"]
            "top":response.save["top"]
        }
