---
title: 多线程管理
permalink: /tutorials/python/mul-threads/
---



# 1、多线程技术
## 1.1、多线程基础

```python
import threading
import time

exitFlag = 0

class myThread (threading.Thread):
    def __init__(self, threadID, name, delay):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.delay = delay
    def run(self):
        print ("开始线程：" + self.name)
        print_time(self.name, self.delay, 5)
        print ("退出线程：" + self.name)

def print_time(threadName, delay, counter):
    while counter:
        if exitFlag:
            threadName.exit()
        time.sleep(delay)
        print ("%s: %s" % (threadName, time.ctime(time.time())))
        counter -= 1

        # 创建新线程
thread1 = myThread(1, "Thread-1", 1)
thread2 = myThread(2, "Thread-2", 2)

# 开启新线程
thread1.start()
thread2.start()
thread1.join()
thread2.join()
print ("退出主线程")
```

## 1.2、多线程数据返回

```python
import threading
# from multiprocessing import Process,freeze_support

class MyThread(threading.Thread):

    def __init__(self, func, args=()):
        super(MyThread, self).__init__()
        self.func = func
        self.args = args
        self.result = None

    def run(self):
        self.result = self.func(*self.args)

    def get_result(self):
        try:
            return self.result
        except Exception:
            print("get result wrong")
            return None
```
# 2、多线程应用

```python
tour_threads = []
        for purposes_types_block in purposes_types_blocks:
            tour_thread = MyThread(UtilityCalculate._get_tour_utility, args=(self,purposes_types_block))
            tour_threads.append(tour_thread)
            tour_thread.start()
        for tour_thread in tour_threads:
            tour_thread.join()
            self.tour_utility.update(tour_thread.get_result())
```
