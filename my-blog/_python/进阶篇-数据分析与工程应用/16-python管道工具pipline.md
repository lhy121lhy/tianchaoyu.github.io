---
title: 管道
permalink: /tutorials/python/pipline/
---


## 1、管道
## 1.1、什么是管道？
管道在python中就是按照序列依次执行函数，前一个函数的输出作为下一个函数的输入。在表达形式上，更为简介。
ex：依次调用3个函数：

```python
def funtion_1(str):
    return str

def funtion_2(str):
    return str

def function_3(str):
    return str

def pipline(str,function):
    return reduce(lambda x,y:y(x),function,str)

if __name__ == "__main__":
    str1 = "abcd"
    # 依次调用
    s  = function_1(function_2(function_3(str1)))
    # 管道调用：
	result = pipeline(str, [function_1, function_2, function_3])
```
## 1.2、fastcore包：
比较成熟的包fastcore,含有现成的pipline,无需自己写。

```python
from fastcore.transform import Pipeline

input_string = "IT-is-a-test\n"
pipe = Pipeline([lower, remove_, strip])
output = pipe(input_string)
print(output)
```

# 2、Orca软件包
单纯的pipline，对输入变量严格要求继承于上一次的输出，因此在实际使用过程中具有较大局限性，不能自定义输入变量。因此基于Orca的软件包，可完美解决传统pipline的问题。
Orca是一个管道编排框架，它允许您定义动态数据源并显式地将它们连接到函数中。Orca不仅含有处理Pandas数据结构的函数，同时还支持其他数据格式。Orca最初是为协调UrbanSim模拟而设计的，因此具有在迭代一组输入数据的同时多次运行管道的能力。
软件包教程链接：[https://udst.github.io/orca/core.html](https://udst.github.io/orca/core.html)
## 2.1、目标
ORCA的主要目标，即**灵活性**、**透明度**、**延迟执行**和**实践性**:

- 灵活性：用户可以编写和运行任何Python函数；
- 透明度：明确地列出了数据和处理单元之间的依赖关系，记录程序执行流程；
- 延迟执行：Orca只在显式需要函数时调用它们；
- 良好的实践性：支持小型的功能单元、支持代码重用；## 2.1、功能组件
Orca管道的单元是通过修饰符注册到Orca的Python函数。Orca通过将这些函数的参数与其他注册数据进行匹配来调用这些函数。(这种格式的灵感很大程度上来自PYTEST的[fixtures](http://pytest.org/latest/fixture.html#fixture).。)管道的主要组件包括：

- 步骤：step步骤是注册给Orca的Python函数，其主要效用是通过它们的副作用。有些步骤会以某种方式更新管道数据，可能是通过更新表中的列或向表中添加行；其他步骤可能会生成绘图或保存处理过的数据。

- 表：Tablesorca对pandas的数据框架有一个内置的理解，这被称为“表”。表可以注册为普通数据帧或注册为返回数据帧的函数。

- 列：Columns可以动态地添加到表列注册个人熊猫系列实例或通过注册函数,返回series.

- 注射剂：Injectables函数需要的数据可能不在一个表或者列中。这些你可以注册任何对象或函数作为一个“注射”使它可以在一个orca的管道。
​
ORCA为简化管道建设提供了一些便利：

- 参数匹配当需要计算已注册的函数时，Orca会检查函数的参数名称和关键字参数值。Orca将这些参数与已注册的变量进行匹配，如表、列或注入表，并使用这些参数调用该函数（然后根据需要调用任何其他函数并注入其他参数）。
自动将函数的输入参数和注册表的名称，列等进行数据匹配；

- 函数作为数据如果需要按需重新计算某些内容，您可以注册一个返回表/列/注入表的函数。该函数将在管道中使用变量时进行计算，以便该值总是当前的。

- 缓存是否有一些数据需要计算，但不是很频繁吗？您可以对单个项目启用缓存以节省时间，然后稍后清除该项目上的缓存或在一次调用中清除整个缓存。您还可以对缓存设置有限的范围，以便以设置的时间间隔从缓存中删除项。

- 自动合并一旦您描述了多个表之间的关系，虎鲸就可以将它们合并到某些目标表中。

- 数据存档在运行管道之后，查看数据在进展过程中是如何变化的是很有用的。Orca可以在每次迭代期间或以设置的时间间隔将注册的表保存到HDF5文件中。
​
# 3、API
### 4.1、Table API
 | [add_table](https://udst.github.io/orca/core.html#orca.orca.add_table)(table_name, table[, cache, …]) | Register a table with Orca. | 
|---|---|
 | [table](https://udst.github.io/orca/core.html#orca.orca.table)([table_name, cache, cache_scope, copy_col]) | Decorates functions that return DataFrames. | 
 | [get_table](https://udst.github.io/orca/core.html#orca.orca.get_table)(table_name) | Get a registered table. | 
 | [list_tables](https://udst.github.io/orca/core.html#orca.orca.list_tables)() | List of table names. | 
 | [DataFrameWrapper](https://udst.github.io/orca/core.html#orca.orca.DataFrameWrapper)(name, frame[, copy_col]) | Wraps a DataFrame so it can provide certain columns and handle computed columns. | 
 | [TableFuncWrapper](https://udst.github.io/orca/core.html#orca.orca.TableFuncWrapper)(name, func[, cache, …]) | Wrap a function that provides a DataFrame. | 
### 4.2、Column API
 | [add_column](https://udst.github.io/orca/core.html#orca.orca.add_column)(table_name, column_name, column) | Add a new column to a table from a Series or callable. | 
|---|---|
 | [column](https://udst.github.io/orca/core.html#orca.orca.column)(table_name[, column_name, cache, …]) | Decorates functions that return a Series. | 
 | [list_columns](https://udst.github.io/orca/core.html#orca.orca.list_columns)() | List of (table name, registered column name) pairs. | 
### 4.3、Injectable API
 | [add_injectable](https://udst.github.io/orca/core.html#orca.orca.add_injectable)(name, value[, autocall, …]) | Add a value that will be injected into other functions. | 
|---|---|
 | [injectable](https://udst.github.io/orca/core.html#orca.orca.injectable)([name, autocall, cache, …]) | Decorates functions that will be injected into other functions. | 
 | [get_injectable](https://udst.github.io/orca/core.html#orca.orca.get_injectable)(name) | Get an injectable by name. | 
 | [list_injectables](https://udst.github.io/orca/core.html#orca.orca.list_injectables)() | List of registered injectables. | 
### 4.4、Merge API
 | [broadcast](https://udst.github.io/orca/core.html#orca.orca.broadcast)(cast, onto[, cast_on, onto_on, …]) | Register a rule for merging two tables by broadcasting one onto the other. | 
|---|---|
 | [list_broadcasts](https://udst.github.io/orca/core.html#orca.orca.list_broadcasts)() | List of registered broadcasts as (cast table name, onto table name). | 
 | [merge_tables](https://udst.github.io/orca/core.html#orca.orca.merge_tables)(target, tables[, columns, …]) | Merge a number of tables onto a target table. | 
### 4.5、Step API
 | [add_step](https://udst.github.io/orca/core.html#orca.orca.add_step)(step_name, func) | Add a step function to Orca. | 
|---|---|
 | [step](https://udst.github.io/orca/core.html#orca.orca.step)([step_name]) | Decorates functions that will be called by the run function. | 
 | [get_step](https://udst.github.io/orca/core.html#orca.orca.get_step)(step_name) | Get a wrapped step by name. | 
 | [list_steps](https://udst.github.io/orca/core.html#orca.orca.list_steps)() | List of registered step names. | 
 | [run](https://udst.github.io/orca/core.html#orca.orca.run)(steps[, iter_vars, data_out, …]) | Run steps in series, optionally repeatedly over some sequence. | 
### 4.6、Cache API
 | [clear_cache](https://udst.github.io/orca/core.html#orca.orca.clear_cache)([scope]) | Clear all cached data. | 
|---|---|
 | [disable_cache](https://udst.github.io/orca/core.html#orca.orca.disable_cache)() | Turn off caching across Orca, even for registered variables that have caching enabled. | 
 | [enable_cache](https://udst.github.io/orca/core.html#orca.orca.enable_cache)() | Allow caching of registered variables that explicitly have caching enabled. | 
 | [cache_on](https://udst.github.io/orca/core.html#orca.orca.cache_on)() | Whether caching is currently enabled or disabled. | 
 | [clear_injectable](https://udst.github.io/orca/core.html#orca.orca.clear_injectable)(injectable_name) | Clear the cached value of an injectable. | 
 | [clear_table](https://udst.github.io/orca/core.html#orca.orca.clear_table)(table_name) | Clear the cached copy of an entire table. | 
 | [clear_column](https://udst.github.io/orca/core.html#orca.orca.clear_column)(table_name, column_name) | Clear the cached copy of a dynamically generated column. | 
 | [clear_columns](https://udst.github.io/orca/core.html#orca.orca.clear_columns)(table_name[, columns]) | Clear all (or a specified list) of the dynamically generated columns associated with a table. | 
 | [update_injectable_scope](https://udst.github.io/orca/core.html#orca.orca.update_injectable_scope)(name[, new_scope]) | Update the cache scope for a wrapped injectable function. | 
 | [update_table_scope](https://udst.github.io/orca/core.html#orca.orca.update_table_scope)(name[, new_scope]) | Update the cache scope for a wrapped table function. | 
 | [update_column_scope](https://udst.github.io/orca/core.html#orca.orca.update_column_scope)(table_name, column_name) | Update the cache scope for a wrapped column function. | 
# 4、example:

```python
df = pd.DataFrame({'a': [1, 2, 3]})
orca.add_table('my_table', df)

@orca.table('halve_my_table')
def halve_my_table(my_table):
    df = my_table.to_frame()
    return df / 2

@orca.table()
def halve_my_table(my_table):
    df = my_table.to_frame()
    return df / 2

In [19]: wrapped = orca.get_table('halve_my_table')

In [20]: wrapped.to_frame()
Out[20]:
     a
0  0.5
1  1.0
2  1.5

```

```python
df_a = pd.DataFrame(
    {'a': [0, 1]},
    index=['a0', 'a1'])
df_b = pd.DataFrame(
    {'b': [2, 3, 4, 5, 6],
     'a_id': ['a0', 'a1', 'a1', 'a0', 'a1']},
    index=['b0', 'b1', 'b2', 'b3', 'b4'])
df_c = pd.DataFrame(
    {'c': [7, 8, 9]},
    index=['c0', 'c1', 'c2'])
df_d = pd.DataFrame(
    {'d': [10, 11, 12, 13, 15, 16, 16, 17, 18, 19],
     'b_id': ['b2', 'b0', 'b3', 'b3', 'b1', 'b4', 'b1', 'b4', 'b3', 'b3'],
     'c_id': ['c0', 'c1', 'c1', 'c0', 'c0', 'c2', 'c1', 'c2', 'c1', 'c2']},
    index=['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'])

orca.add_table('a', df_a)
orca.add_table('b', df_b)
orca.add_table('c', df_c)
orca.add_table('d', df_d)
```

```python
orca.broadcast(cast='a', onto='b', cast_index=True, onto_on='a_id')
orca.broadcast(cast='b', onto='d', cast_index=True, onto_on='b_id')
orca.broadcast(cast='c', onto='d', cast_index=True, onto_on='c_id')
```

```python
In [4]: orca.merge_tables(target='b', tables=[a, b])
Out[4]:
   a_id  b  a
b0   a0  2  0
b3   a0  5  0
b1   a1  3  1
b2   a1  4  1
b4   a1  6  1

In [5]: orca.merge_tables(target='d', tables=[a, b, c, d])
Out[5]:
   b_id c_id   d  c a_id  b  a
d0   b2   c0  10  7   a1  4  1
d3   b3   c0  13  7   a0  5  0
d2   b3   c1  12  8   a0  5  0
d8   b3   c1  18  8   a0  5  0
d9   b3   c2  19  9   a0  5  0
d4   b1   c0  15  7   a1  3  1
d6   b1   c1  16  8   a1  3  1
d1   b0   c1  11  8   a0  2  0
d5   b4   c2  16  9   a1  6  1
d7   b4   c2  17  9   a1  6  1
```

```python
s = pd.Series(['a', 'b', 'c'])
orca.add_column('my_table', 'my_col', s)

@orca.column('my_table')
def my_col_x2(my_table):
    df = my_table.to_frame(columns=['my_col'])
    return df['my_col'] * 2

@orca.column('my_table')
def my_col_x2(my_table):
    return my_table['my_col'] * 2  # or my_table.my_col * 2
@orca.column('my_table')
def my_col_x2(data='my_table.my_col'):
    return data * 2

In [29]: wrapped = orca.get_table('my_table')

In [30]: wrapped.columns
Out[30]: ['a', 'my_col', 'my_col_x2']

In [31]: wrapped.local_columns
Out[31]: ['a']

In [32]: wrapped.to_frame()
Out[32]:
   a my_col_x2 my_col
0  1        aa      a
1  2        bb      b
2  3        cc      c
```

```python
orca.add_injectable('z', 5)

@orca.injectable(autocall=False)
def pow(x, y):
    return x ** y

@orca.injectable()
def zsquared(z, pow):
    return pow(z, 2)

@orca.table()
def ztable(my_table, zsquared):
    df = my_table.to_frame(columns=['a'])
    return df * zsquared
```

```python
df = pd.DataFrame({'a': [1, 2, 3]})
orca.add_table('new_table', df)

@orca.step()
def replace_col(new_table):
    new_table['a'] = [4, 5, 6]

@orca.step()
def update_col(new_table):
    s = pd.Series([99], index=[1])
    new_table.update_col_from_series('a', s)

@orca.step()
def add_rows(new_table):
    new_rows = pd.DataFrame({'a': [100, 101]}, index=[3, 4])
    df = new_table.to_frame()
    df = pd.concat([df, new_rows])
    orca.add_table('new_table', df)
   In [68]: orca.run(['replace_col', 'update_col', 'add_rows'])
Running step 'replace_col'
Running step 'update_col'
Running step 'add_rows'

In [69]: orca.get_table('new_table').to_frame()
Out[69]:
     a
0    4
1   99
2    6
3  100
4  101 
```

```python
In [77]: @orca.step()
   ....: def print_year(iter_var,iter_step):
   ....:         print '*** the iteration value is {} ***'.format(iter_var)
   ....:         print '*** step number {0} is named {1} ***'.format(iter_step.step_num, iter_step.step_name)
   ....:

In [78]: orca.run(['print_year'], iter_vars=range(2010, 2015))
Running iteration 1 with iteration value 2010
Running step 'print_year'
*** the iteration value is 2010 ***
*** step number 0 is named print_year ***
Time to execute step 'print_year': 0.00 s
Total time to execute iteration 1 with iteration value 2010: 0.00 s
Running iteration 2 with iteration value 2011
Running step 'print_year'
*** the iteration value is 2011 ***
*** step number 0 is named print_year ***
Time to execute step 'print_year': 0.00 s
Total time to execute iteration 2 with iteration value 2011: 0.00 s
Running iteration 3 with iteration value 2012
Running step 'print_year'
*** the iteration value is 2012 ***
*** step number 0 is named print_year ***
Time to execute step 'print_year': 0.00 s
Total time to execute iteration 3 with iteration value 2012: 0.00 s
Running iteration 4 with iteration value 2013
Running step 'print_year'
*** the iteration value is 2013 ***
*** step number 0 is named print_year ***
Time to execute step 'print_year': 0.00 s
Total time to execute iteration 4 with iteration value 2013: 0.00 s
Running iteration 5 with iteration value 2014
Running step 'print_year'
*** the iteration value is 2014 ***
*** step number 0 is named print_year ***
Time to execute step 'print_year': 0.00 s
Total time to execute iteration 5 with iteration value 2014: 0.00 s
```

# 5、简单案例：

- 功能描述：