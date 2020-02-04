def convert(self,spider):
    self.file = codecs.open('all.json', 'wb', encoding='utf-8')
    line = json.dumps(dict(item), ensure_ascii=False, sort_keys=False) + "\n"
    self.file.write(line)
    self.file.close()

open_spider()