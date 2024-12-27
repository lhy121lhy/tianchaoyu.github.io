---
title: 邮件发送
permalink: /tutorials/python/email-send/
---


# 1、邮件发送

```python
# -*- coding: utf-8 -*-
"""
Created on 2020622
author:lhy
功能：发送信息到邮箱
"""
import yagmail


def send_message_by_email(message):
    """
    发送消息到邮箱
    
    :param message:
    :return:
    """
    yag = yagmail.SMTP(user='****@163.com', password='EPDDPCXHPBZCXMXC', host='smtp.163.com')
    # 发送邮件
    yag.send(to=['****@qq.com'], subject='wuhan_model_error', contents=message)
    
    
def send_file_by_email(subject, file_name):
    """
    发送文件到邮箱
    
    :param subject:
    :param file_name:
    :return:
    """
    yag = yagmail.SMTP(user='****@163.com', password='EPDDPCXHPBZCXMXC', host='smtp.163.com')
    # 发送邮件
    yag.send(to=['***@qq.com'], subject=subject, attachments=[file_name])
```
