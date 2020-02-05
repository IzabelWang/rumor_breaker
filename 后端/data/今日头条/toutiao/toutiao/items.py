# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ToutiaoItem(scrapy.Item):
    # define the fields for your item here like:
    itemId = scrapy.Field()
    ans = scrapy.Field()
    pic_url = scrapy.Field()
    title = scrapy.Field()
    top = scrapy.Field()
