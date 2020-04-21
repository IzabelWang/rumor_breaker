#!/usr/bin/env python3
# coding=utf-8

# @Silewhi

import json
import re
import csv

fi_name = './initial_data/4_jiaozhen.txt'
fo_name = './processed_data/other/4_jiaozhen_other.txt'

def html_filter(html_str): #html标签过滤
    dr = re.compile(r'<[^>]+>',re.S)
    dd = dr.sub('',html_str)
    return dd

def url_replace(html_str): #过滤网址
    dr = re.compile(r'http://',re.S)
    dd = dr.sub('',html_str)
    return dd

fo = open(fo_name,'w')

with open(fi_name,'r',encoding = 'utf-8')  as f:
    for row in f:
        data = url_replace(html_filter(row))
        fo.write(data)

fo.close()



