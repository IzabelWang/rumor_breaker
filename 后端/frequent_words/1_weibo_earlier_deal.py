#!/usr/bin/env python
# coding=utf-8

# 微博csv数据的问题：
# 理论上标签应该在第二栏，实际上数据里的标签和文本都在第一栏= =
# 我不知道标签和文本之间为什么要用'\t'，csv文件的话应该用','
# 因此，只能采用倒读第一栏倒数第二个文本的方式判断标签
# @Silewhi

filename = './initial_data/1_weibo_rumor.csv'
f_true = './processed_data/true/1_weibo_true.txt'
f_false = './processed_data/false/1_weibo_false.txt'

f1 = open(f_true,'w')
f2 = open(f_false,'w')

import csv

with open(filename,'r',encoding = 'utf-8')  as f:
    reader = csv.reader(f)
    for row in reader:
        flag = row[0][-1]
        print('flag =',flag,'\n')
        row[0] = row[0][:-2]
        print(row)
        if flag == '0':
            f1.write(row[0])
        else:
            f2.write(row[0])


f.close()
f1.close()
f2.close()
