# -*- coding: utf-8 -*-
import scrapy
from guokr.items import LiuyanItem

class LiuyanSpider(scrapy.Spider):
    name = 'liuyan'
    start_urls = [
        'http://liuyan.guokr.com/category/?cond=true'
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
