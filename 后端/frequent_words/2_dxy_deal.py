#!/usr/bin/env python
# coding=utf-8

# 丁香园json数据的问题：
# 有些行的数据是一样的，为了避免分析关键词的时候受到影响，需要过滤
# 不过幸好重复数据都在相邻的行，所以过滤起来比较简单
# @Silewhi

import json

filename = './initial_data/2_dxy.json'
f_false = './processed_data/false/2_dxy_false.txt'

f2 = open(f_false,'w')

with open(filename, 'r', encoding='utf-8') as f:
    data_dict = json.load(f)
    old_id = "x"
    new_id = "x"
    for data in data_dict:
        new_id = data["id"] 
        if new_id != old_id:
            old_id = new_id
            f2.write(data["body"])
            f2.write(data["mainSummary"])
            f2.write(data["title"])
            f2.write('\n')

f2.close()
