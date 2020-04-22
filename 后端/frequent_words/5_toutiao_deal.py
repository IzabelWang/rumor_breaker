#!/usr/bin/env python3
# coding=utf-8

# @Silewhi

import csv
import re

fi_name = './initial_data/5_toutiao.csv'

fo_true = './processed_data/true/5_toutiao_true.txt'
fo_false = './processed_data/false/5_toutiao_false.txt'
fo_other = './processed_data/other/5_toutiao_other.txt'

f1 = open(fo_true,'w')
f2 = open(fo_false,'w')
f3 = open(fo_other,'w')

def html_filter(html_str): #html标签过滤
    dr = re.compile(r'<[^>]+>',re.S)
    dd = dr.sub('',html_str)
    return dd

with open(fi_name, 'r', encoding = 'utf-8')  as f:
    reader = csv.reader(f)
    i = 0
    for row in reader:
        if i == 0:  #跳过第一行
            i = 1
            continue
        if row[7] == "真":
            f1.write(html_filter(row[1]))
            f1.write(html_filter(row[3]))
            f1.write(html_filter(row[9]))
        if row[7] == "假":  
            f2.write(html_filter(row[1]))
            f2.write(html_filter(row[3]))
            f2.write(html_filter(row[9]))
        if row[7] == "疑":
            f3.write(html_filter(row[1]))
            f3.write(html_filter(row[3]))
            f3.write(html_filter(row[9]))