---
title: pandas应用
permalink: /tutorials/python/pandas/
---


## 1、pandas介绍

作为数据处理基础三件套（numpy、pandas、matplotlib）之一，Pandas库是一个免费、开源的第三方 Python库，是Python数据分析必不可少的工具之一。

pandas的设计初衷就是想复现在excel的功能并对其进行功能扩展。所以大部分excel能做的，pandas都能做，很多excel不能做的，pandas也能做。实话，要是excel对python的支持更好一点，如果VB的功能完全演变成python的接口，可能大部分工作直接excel就搞定了。excel还有的一个bug就是大文件数据无法操作。

## 2、pandas常见的功能


-  pandas安装，任意百度关键词 
-  两种数据结构：series，dataframe 
-  series:有点类似于字典，可以由字典转化而来 

```python
import pandas as pd
import numpy as np
data = np.array(['a','b','c','d'])
s = pd.Series(data，index=[2,3,4,7])
print(s)
Out:
2    a
3    b
4    c
7    d
dtype: object
```

- dataframe结构DataFrame 一个表格型的数据结构，既有行标签（index），又有列标签（columns），它也被称异构数据表，所谓异构，指的是表格中每列的数据类型可以不同，比如可以是字符串、整型或者浮点型等。如下图所示：整体结构和excel比较类似，左侧为行索引 ，上标题为列名。![image.png](../../assets/images/python/2-Pandas数据处理.assert/1652163835555-3eb1c394-1897-47a8-a90b-650dcf57cc94.png)

## 3、dataframe常见操作


- pandas的数据读取

| Format Type | Data Description | Reader | Writer | 
|---|---|---|---|
 | text | CSV(opens new window) | read_csv | to_csv | 
 | text | JSON(opens new window) | read_json | to_json | 
 | text | HTML(opens new window) | read_html | to_html | 
 | text | Local clipboard | read_clipboard | to_clipboard | 
 | binary | MS Excel(opens new window) | read_excel | to_excel | 
 | binary | OpenDocument(opens new window) | read_excel |  | 
 | binary | HDF5 Format(opens new window) | read_hdf | to_hdf | 
 | binary | Feather Format(opens new window) | read_feather | to_feather | 
 | binary | Parquet Format(opens new window) | read_parquet | to_parquet | 
 | binary | Msgpack(opens new window) | read_msgpack | to_msgpack | 
 | binary | Stata(opens new window) | read_stata | to_stata | 
 | binary | SAS(opens new window) | read_sas |  | 
 | binary | Python Pickle Format(opens new window) | read_pickle | to_pickle | 
 | SQL(opens new window) | SQL | read_sql | to_sql | 
 | SQL | Google Big Query(opens new window) | read_gbq | to_gbq | 


- pandas的index对向

 | 类型 | 说明 | 
|---|---|
 | index | 最泛化的index对象，轴标签表示为python对象的数组 | 
 | int64index | 针对整数的特殊index | 
 | MultiIndex | 层次化对象，多层索引 | 
 | DatatimeIndex | 纳秒级时间戳 | 
 | PeriodIndex | 针对period数据（时间间隔）的特殊index | 

### 3.1、pandas的索引，选取和过滤


```plain
import pandas as pd
data = pd.DataFrame([[1,2,3],[3,4,5],[2,3,4]],columns=["a","b","c"])
data
Out[4]: 
   a  b  c
0  1  2  3
1  3  4  5
2  2  3  4
```


- **1) 取行，连续取行**

```plain
data[1:2]  # 行号，与index有关
Out[7]: 
   a  b  c
1  3  4  5
```


- **iloc：安标签取行，可跨行索引**

```plain
data.loc[[0,2]]
Out[21]: 
   a  b  c
0  1  2  3
2  2  3  4
```


- **2) 取列**输入:
```plain
data["a"],data[["a","b"]]
Out[12]: 
(0    1
 1    3
 2    2
 Name: a, dtype: int64,
    a  b
 0  1  2
 1  3  4
 2  2  3)
```


- **3）安条件取值**输入：
```plain
data[data["b"]>2]
Out[15]: 
   a  b  c
1  3  4  5
2  2  3  4
```

### 3.2、函数应用与映射：map、apply、mapapply


-  map()、apply()、mapapply()三者的区别总结如下：map()：只能作用于Series中的每个元素；apply()：既可以作用于Series中的每个元素，也可以作用于DataFrame中的行或列；applymap()：只能作用于DataFrame中的每个元素 
-  map函数：主要是运用在Series中，用来对Series中的元素进行转化se.map(arg, na_action=None)参数说明：· arg:函数、字典或序列对应的映射· na_action: 是否忽略NA，默认None 

```plain
se1 =pd.Series({'a':1,'b':2,'c':3,'d':4})
se2 =pd.Series({1:11,2:22,3:33,4:44})
se1.map(se2)
```

输出：


```plain
Out[5]: 
a    11
b    22
c    33
d    44
dtype: int64


df["c"] = df["a"].apply(lambda x: x[0:@])
```


- apply函数：来调用一个函数(Python method)，让此函数对数据对象进行批量处理
输入：


```plain
df =pd.DataFrame([[1,2,3],[3,4,5],[3,2,4]],columns=["a","b","c"])
df
Out[8]: 
   a  b  c
0  1  2  3
1  3  4  5
2  3  2  4
```

输入：


```plain
df.apply(np.sum,axis=1)
Out[12]: 
0     6
1    12
2     9
dtype: int64
```


- applymap函数：类似于map,针对所有元素
### 3.3、数据拼接：merge,join,contcat

Pandas包的merge、join、concat方法可以完成数据的合并和拼接，merge方法主要基于两个dataframe的共同列进行合并，join方法主要基于两个dataframe的索引进行合并，concat方法是对series或dataframe进行行拼接或列拼接。


- **merge函数**
pandas的merge方法是基于共同列，将两个dataframe连接起来。merge方法的主要参数：

left/right：左/右位置的dataframe。how：数据合并的方式。left：基于左dataframe列的数据合并；right：基于右dataframe列的数据合并；outer：基于列的数据外合并（取并集）；inner：基于列的数据内合并（取交集）；默认为'inner'。on：用来合并的列名，这个参数需要保证两个dataframe有相同的列名。left_on/right_on：左/右dataframe合并的列名，也可为索引，数组和列表。left_index/right_index：是否以index作为数据合并的列名，True表示是。sort：根据dataframe合并的keys排序，默认是。suffixes：若有相同列且该列没有作为合并的列，可通过suffixes设置该列的后缀名，一般为元组和列表类型。

**1.内连接:指定索引列，安固定列取交集**


```plain
import pandas as pd
import numpy as np

df1 = pd.DataFrame({'alpha':['A','B','B','C','D','E'],'feature1':[1,1,2,3,3,1],
            'feature2':['low','medium','medium','high','low','high']})
# 定义df2
df2 = pd.DataFrame({'alpha':['A','A','B','F'],'pazham':['apple','orange','pine','pear'],
            'kilo':['high','low','high','medium'],'price':np.array([5,6,5,7])})
# print(df1)
# print(df2)
# 基于共同列alpha的内连接
df3 = pd.merge(df1,df2,how='inner',on='alpha')
df3
```

**2.外连接：基于指定列的并集**


```plain
df1 = pd.DataFrame({'alpha':['A','B','B','C','D','E'],'feature1':[1,1,2,3,3,1],
                'feature2':['low','medium','medium','high','low','high']})
# 定义df2
df2 = pd.DataFrame({'alpha':['A','A','B','F'],'pazham':['apple','orange','pine','pear'],
                        'kilo':['high','low','high','medium'],'price':np.array([5,6,5,7])})
# 基于共同列alpha的内连接
df4 = pd.merge(df1,df2,how='outer',on='alpha')
df4
```

**3.左连接:以指定列为准，进行补充**


```plain
df1 = pd.DataFrame({'alpha':['A','B','B','C','D','E'],'feature1':[1,1,2,3,3,1],
    'feature2':['low','medium','medium','high','low','high']})
# 定义df2
df2 = pd.DataFrame({'alpha':['A','A','B','F'],'pazham':['apple','orange','pine','pear'],
                        'kilo':['high','low','high','medium'],'price':np.array([5,6,5,7])})
# 基于共同列alpha的左连接
df5 = pd.merge(df1,df2,how='left',on='alpha')
df5
```

**4.右连接:**


```plain
df1 = pd.DataFrame({'alpha':['A','B','B','C','D','E'],'feature1':[1,1,2,3,3,1],
'feature2':['low','medium','medium','high','low','high']})
# 定义df2
df2 = pd.DataFrame({'alpha':['A','A','B','F'],'pazham':['apple','orange','pine','pear'],
                        'kilo':['high','low','high','medium'],'price':np.array([5,6,5,7])})
# 基于共同列alpha的右连接
df6 = pd.merge(df1,df2,how='right',on='alpha')
df6
```


- **join方法**join方法是基于index连接dataframe，merge方法是基于column连接，连接方法有内连接，外连接，左连接和右连接，与merge一致。index与index的连接

```plain
caller = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3', 'K4', 'K5'], 'A': ['A0', 'A1', 'A2', 'A3', 'A4', 'A5']})
other = pd.DataFrame({'key': ['K0', 'K1', 'K2'],'B': ['B0', 'B1', 'B2']})
print(caller)
print(other)
# lsuffix和rsuffix设置连接的后缀名
caller.join(other,lsuffix='_caller', rsuffix='_other',how='inner')
```


- **concat**concat方法是拼接函数，有行拼接和列拼接，默认是行拼接，拼接方法默认是外拼接（并集），拼接的对象是pandas数据类型。

1. **行拼接**

```plain
df1 = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3', 'K4', 'K5'], 'A': ['A0', 'A1', 'A2', 'A3', 'A4', 'A5']})
df2 = pd.DataFrame({'key': ['K0', 'K1', 'K2'],'B': ['B0', 'B1', 'B2']})
print(df1)
print(df2)
# 行拼接
pd.concat([df1,df2])
>>>
  key    A    B
0  K0   A0  NaN
1  K1   A1  NaN
2  K2   A2  NaN
3  K3   A3  NaN
4  K4   A4  NaN
5  K5   A5  NaN
0  K0  NaN   B0
1  K1  NaN   B1
2  K2  NaN   B2

```

**2.列拼接**


```plain
pd.concat([df1,df2],axis=1)
```
### 3.4、dataframe行遍历

```plain
for i,r in df.iterrows():

 print(i,'-- ',r)

```

```plain
count=0

for tup in df.itertuples():

 print(tup[0],'-- ',tup[1::],type(tup[1:]))

 count+=1

 if count 5:

 break
```

### 3.5、基于某列进行排序

```python
df.sort_values(["a"],inplace=True)

```
sort_values参数及其含义：

- axis	若axis=0或’index’，则按照列中数据大小排序；若axis=1或’columns’，则按照索引中数据大小排序，默认axis=0
- ascending：是否按指定列的数组升序排列，默认为True，升序排列
- inplace：是否用排序后数据替换原来数据，默认为False，不替换
- na_position：na_position {‘first’,‘last’}，设定缺失值的显示位置在首部还是尾部
## 4、pandas的groupby的操作：

pandas的groupby操作就是按照属性列进行分组


```plain
import pandas as pd

data = pd.DataFrame([["a",1,2],["b",2,3],["c",1,2],["a",4,5],["c",4,6]],columns=["com","age","num"])
data
Out[4]: 
  com  age  num
0   a    1    2
1   b    2    3
2   c    1    2
3   a    4    5
4   c    4    6
data.groupby(["com"])
Out[5]: <pandas.core.groupby.generic.DataFrameGroupBy object at 0x00000121CDE25970>
```


- groupby:输出的直接对象为groupby对象


```plain
for class_,df in data.groupby(["com"]):
    print(class_)
    print(df)
Out:
a
  com  age  num
0   a    1    2
3   a    4    5
b
  com  age  num
1   b    2    3
c
  com  age  num
 # 直接转化为dataframe
 pf1=data.groupby(["com"]).reset_index()
```

### 4.1、groupby的其他操作：

groupby对象是用来分组的，分完组以后，想针对分完的组做其他操作，比如求某列的和，平均值等

**1) 对某列求和**


```plain
data.groupby(["com"])["age"].sum()

Out:
com
a    5
b    2
c    5
Name: age, dtype: int64
type(data.groupby(["com"])["age"].sum())

Out:
  pandas.core.series.Series
```

**2）求和后转换成dataframe**


```python
data.groupby(["com"])["age"].sum().reset_index(name = "sum_age")
Out:
com  sum_age
0   a        5
1   b        2
2   c        5
```

**3) agg聚合函数应用**


```plain
data.groupby(["com"])["age"].agg([max,min])
Out[12]:
     max  min
com
a      4    1
b      2    2
c      4    1
```

**4）transform的应用**用于计算某类别下，不同成分的占比非常方便


```plain
data['avg_age'] = data.groupby('com')['age'].transform('mean')
data
Out[14]:
  com  age  num  avg_age
0   a    1    2      2.5
1   b    2    3      2.0
2   c    1    2      2.5
3   a    4    5      2.5
4   c    4    6      2.5
```

**5）apply函数应用**

计算某公司年龄最大的


```plain
def get_oldest_staff(x):
    df = x.sort_values(by = 'age',ascending=True)
    return df.iloc[-1,:]
	
	
oldest_staff = data.groupby('com').apply(get_oldest_staff)
oldest_staff
Out[17]: 
    com  age  num  avg_age
com                       
a     a    4    5      2.5
b     b    2    3      2.0
c     c    4    6      2.5
```

其他应用

```python
da = pd.DataFrame([[1,2,3],[1,2,4],[7,6,8]],columns=["a","b","c"])

da[["a","b"]].apply(lambda x:x[0]+x[1] if x[1]>x[0] else 0,axis=1)
```
# 5、应用示例

```python
file_name = os.path.join(configs_path, k_factor_file).replace("\\", "/")
pddata = pd.read_csv(file_name, index_col=None, engine="python", encoding="utf-8")
purposes = list(set(pddata["Purpose"]))
modes =  list(set(pddata["Modes"]))

df_ciy = pd.DataFrame([self.zone_table["U_factor"], list(self.taz_id)]).T
df_ciy.columns = ["city_id", "taz_id"]

# 创建小区矩阵
taz_num = len(self.taz_id)
matrix = np.zeros([taz_num, taz_num])
df_taz = pd.DataFrame(matrix, columns=list(self.taz_id), index=list(self.taz_id))
# 矩阵变三列式
df_taz_reset = df_taz.stack().reset_index().rename(
    columns={"level_0": "FROM_taz", "level_1": "TO_taz", "level_2": "Values"})
df_taz_reset.columns = ["FROM_taz", "TO_taz", "Values"]

# 三列式匹配城市ID
df_taz_city_from = pd.merge(df_taz_reset,
                            df_ciy.rename(columns={"city_id": "city_id_from", "taz_id": "FROM_taz"}),
                            on="FROM_taz", how="left")
df_taz_city_FROM_to = pd.merge(df_taz_city_from,
                               df_ciy.rename(columns={"city_id": "city_id_to", "taz_id": "TO_taz"}),
                               on="TO_taz", how="left")

df_taz_city_FROM_to["city_from_to"] = df_taz_city_FROM_to["city_id_from"] + "_" + df_taz_city_FROM_to[
    "city_id_to"]
pddata["city_from_to"] = pddata[["FROM", "TO"]].apply(lambda x: "_".join([x["FROM"], x["TO"]]), axis=1)
# 基于索引匹配
df_taz_city_FROM_TO = pd.merge(df_taz_city_FROM_to, pddata, on="city_from_to", how="left")

k_factor_dict = {}
for purpose in purposes:
    for mode in modes:
        key_name = "_".join([purpose,mode])
        df_purpose_mode = df_taz_city_FROM_TO[(df_taz_city_FROM_TO["Purpose"] == purpose) & (df_taz_city_FROM_TO["Modes"] == mode)]
        k_factor_data = df_purpose_mode.pivot(index="FROM_taz", columns="TO_taz", values="K_factor")
k_factor_dict[key_name] = k_factor_data.values
```
