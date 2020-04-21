#!/usr/bin/env python
# coding=utf-8

# @Silewhi

# 测试jieba分词效果
'''
import jieba
sent = '来测试一下jieba分词有没有效果！'
seg_list = jieba.cut(sent, cut_all=True)
print('全模式：', '/ '.join(seg_list))
seg_list = jieba.cut(sent, cut_all=False)
print('精确模式：', '/ '.join(seg_list))
seg_list = jieba.cut(sent)
print('默认精确模式：', '/ '.join(seg_list))
seg_list = jieba.cut_for_search(sent)
print('搜索引擎模式', '/ '.join(seg_list))
'''

# 测试windows下的utf-8和unicode编码转换

s = "\u70b8\u732a\u6392\u8089\u8272\u53d1\u7ea2\u5c31\u662f\u4e0d\u65b0\u9c9c"
s1 = s.encode("gbk", 'ignore').decode("gbk", "ignore")
print('s1 =',s1)
s2 = s.encode("unicode-escape", 'ignore').decode("utf-8", "ignore")
print('s2 =',s2)
s3 = s.encode("gbk", 'ignore').decode("utf", "ignore")
print('s3 =',s3)