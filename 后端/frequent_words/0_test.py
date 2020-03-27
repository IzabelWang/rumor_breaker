#!/usr/bin/env python
# coding=utf-8

# 测试jieba分词效果
# @Silewhi

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
