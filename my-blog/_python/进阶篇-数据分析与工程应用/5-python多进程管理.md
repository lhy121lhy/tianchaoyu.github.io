---
title: 多进程管理
permalink: /tutorials/python/mul-process/
---


# 1、多进程技术

```python
from multiprocessing import Process
import os
# 定义要调用的方法
def async_fun(name, add):
    for arc in add:
        print(name + str(os.getpid()) + " " + arc)

if __name__ == '__main__':
    my_tuple = ("你好", "今天是个好日子", "天气真不错")

# 创建进程
process = Process(target=async_fun, args=("子进程", my_tuple))
# 启动子进程
process.start()
# 启动主进程
async_fun("主进程", my_tuple)
```

```python
import multiprocessing
import os


# 定义要调用的方法
def async_fun(name, add):
    for arc in add:
        print(name + str(os.getpid()) + " " + arc)


class MyProcess(multiprocessing.Process):
    def __init__(self, name, add):
        multiprocessing.Process.__init__(self)
        self.add = add
        self.name = name
        # 重写run()方法

    def run(self):
        async_fun(self.name, self.add)


if __name__ == '__main__':
    my_tuple = ("你好", "今天是个好日子", "天气真不错")
    myprocess = MyProcess("子进程", my_tuple)
    myprocess.start()
    # 主进程
    async_fun("主进程", my_tuple)
```
# 2、多进程数据返回

多进程数据返回
```python
from multiprocessing import Pool

L1=[1,5,10,20]
p = Pool(5)
result=[]
for i in range(10):
	result.append(p.apply_async(fun1,args=(i,)))
p.close()
p.join()
for i in result:
    print(i.get())
```

```python
from multiprocessing import Process

pools = []
for year_id, year in enumerate(years):
    p1 = Process(target=function_export_data, args=(year,))
    pools.append(p1)

for p in pools:
    p.start()
for p in pools:
    p.join()
```
