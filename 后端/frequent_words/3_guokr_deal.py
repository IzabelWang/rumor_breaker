#!/usr/bin/env python3
# coding=utf-8

# 果壳json数据的问题：
# 文字用的Unicode编码，看起来不太直观
# [还没写=>]另外，爬取内容时里面有很多html标签，需要过滤掉
# @Silewhi

import json
import re

fi_true = './initial_data/3_guokr_true.json'
fi_false = './initial_data/3_guokr_false.json'
fi_other = './initial_data/3_guokr_discussing.json'

fo_true = './processed_data/true/3_guokr_true.txt'
fo_false = './processed_data/false/3_guokr_false.txt'
fo_other = './processed_data/other/3_guokr_other.txt'


def get_data(fi_name, fo_name):
    fo = open(fo_name,'w')
    with open(fi_name, 'r', encoding = 'gbk')  as fi:
        data_dict = json.load(fi)
        for data in data_dict:
            if(data["title"]):
                fo.write(data["title"].encode("gbk", 'ignore').decode("gbk", "ignore"))
            if(data["descrip"]):
                fo.write(data["descrip"].encode("gbk", 'ignore').decode("gbk", "ignore"))
            if(data["detail"]):
                fo.write(data["detail"].encode("gbk", 'ignore').decode("gbk", "ignore"))

    
get_data(fi_true, fo_true)
get_data(fi_false, fo_false)
get_data(fi_other, fo_other)
