# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import json
import codecs

class JiaozhenPipeline(object):
    def process_item(self, item, spider):
        return item
class JsonWriterPipeline(object):
    def open_spider(self,spider):
        self.file = codecs.open('new.json', 'wb', encoding='utf-8')

    def process_item(self, item, spider):
        line = json.dumps(dict(item), ensure_ascii=False, sort_keys=False) + ",\n"
        self.file.write(line)
        return item

    def close_spider(self, spider):
        self.file.close()