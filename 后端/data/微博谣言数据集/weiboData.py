import pandas as pd
import json
dataset = pd.read_table('/home/sherry/project/创新杯/data/Weibo.txt',sep='\t+|:')
df = pd.DataFrame(dataset)
cols = [1,3]
# 表格共两列，第一列是id，第二列是标签，0为其它，1为谣言
df = df[df.columns[cols]]
df.columns = ['eid', 'label']
print(df)
# 做一个统计分析，多少个谣言，多少个非谣言
print(df['label'].value_counts())
# 2350个非谣言，2313个谣言
# 每个样本，根据eid提取其文本信息作为新的一列
textPath = "/home/sherry/project/创新杯/data/Weibo/"
def extractEid(eid):
    with open(textPath+eid+".json") as f:
        data = json.load(f)
    return(data[0]["original_text"])
textData = [extractEid(str(eid)) for eid in df['eid']]
df['text'] = textData
# 根据文字信息去重复
pd.DataFrame.drop_duplicates(df, subset=['text'], keep='first', inplace=True)
print(df['label'].value_counts())
# 剩余2332个非谣言，2183个谣言

# 控制一下谣言的字数在100以内
df = df.loc[df['text'].str.len() < 100]
print(df['label'].value_counts())
# 剩余985个非谣言，691个谣言

# 把谣言和非谣言保存成csv文件
df = df[['text','label']]
# 根据label sort一下
df =  df.sort_values(by=['label'])
df.to_csv("/home/sherry/project/创新杯/data/rumor.csv",index=False,sep='\t')