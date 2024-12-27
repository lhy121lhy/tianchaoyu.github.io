---
title: 错误提示
permalink: /tutorials/python/error_info/
---

# 1、自定义错误
1) model_error.py

```python
# -*- coding: utf-8 -*-
"""
Created on Mon Sep 28 10:40:13 2020
    自定义模块计算错误类

# @author: lhy
# @Time    : 2020/12/31 11:19
# @email   : 742232975@qq.com
"""



class ModelError(Exception):
    """
    自定义错误类型
    """
    pass



class FileError(ModelError):
    """
    文件输入类型错误
    """

    def __init__(self, key_error, error_message):
        self.message = "{0}:{1}".format(key_error, error_message)

    def __str__(self):
        return self.message



class MatrixError(ModelError):
    """
    文件输入类型错误
    """

    def __init__(self, key_name, message):
        """
        初始化

        :param key_name:错误类型
        :param message: 关键信息
        """
        self.message = "{0}:{1} is wrong".format(key_name, message)

    def __str__(self):
        return self.message


```
# 2、错误信息返回

```plain
from model_error import FileError

raise FileError("DataError", "{0} is empty".format(name))
```
