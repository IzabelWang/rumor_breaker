#!/usr/bin/env python
# coding=utf-8

# 适配所有的txt数据处理，只要所有要处理的txt文件在一个文件夹下面就行
# 会把得到的高频词汇写在输出文件里面
# 需要手动修改main函数中的文件路径
# @Silewhi


def get_content(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = ''
        for l in f:
            l = l.strip()
            content += l
    return content

def get_stopwords_list(path):
    stopwords = [line.strip() for line in open(path, encoding='utf-8').readlines()]
    return stopwords

def move_stopwords(sentence_list, stopwords_list):
    out_list = []
    for word in sentence_list:
        if word not in stopwords_list:
            if word != '\t' and word != ' ':
                out_list.append(word)
    return out_list

def get_TF(words, topK):
    tf_dic = {}
    for w in words:
        tf_dic[w] = tf_dic.get(w, 0) + 1
    return sorted(tf_dic.items(), key = lambda x: x[1], reverse=True)[:topK]

def main():
    import glob
    import jieba

    # - - - - - - - 
    # 当前执行文件路径：
    #file_path = './processed_data/true/*.txt'
    file_path = './processed_data/false/*.txt'
    # 当前输出文件路径：
    #file_out = './processed_data/true_words.txt'
    file_out = './processed_data/false_words.txt'
    # 当前停止词文件路径:
    stop_words_path = './processed_data/stopwords_all.txt'
    # 所需高频词的数量：
    topK = 100
    # - - - - - - -

    print('当前执行文件路径：'+file_path)
    print('当前输出文件路径：'+file_out)
    print('高频词的数量：'+str(topK)+'\n')
    
    files = glob.glob(file_path)
    corpus = [get_content(x) for x in files]
    f = open(file_out,'w')
    
    for i in range(len(corpus)):
        split_words = list(jieba.cut(corpus[i],cut_all=False))
        split_words = move_stopwords(split_words, get_stopwords_list(stop_words_path))
        frequent_words = get_TF(split_words,topK)
        print('第'+str(i+1)+'组高频词：'+str(frequent_words))
        for word in frequent_words:
            f.write(word[0]+','+str(word[1])+'\n')
        f.write('\n')

if __name__=='__main__':
    	main()
