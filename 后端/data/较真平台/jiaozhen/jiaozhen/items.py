# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class JiaozhenItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    descrip = scrapy.Field()
    LiuyanType = scrapy.Field()
    answer = scrapy.Field()
    detail = scrapy.Field()
    author = scrapy.Field()
