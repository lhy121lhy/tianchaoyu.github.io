---
title: ftp文件传输
permalink: /tutorials/python/ftp/
---


# 1、ftp文件上传和下载


```python
# -*- coding: utf-8 -*-
"""
Created on 20201027
author:lhy
#从ftp服务器下载文件
1> 出行生成
"""

from ftplib import FTP
import os
import traceback

HOST = "*.*.*.*"
USERNAME = "model"
PASSWORD = "***"
POER = "1004"



class FtpObject(object):
    """从ftp服务器读取文件"""
    
    def __init__(self, host, username, password, port):
        """
        初始化ftp
        
        :param host: ftp主机ip
        :param username: ftp用户名
        :param password: ftp密码
        :param port:  ftp端口 （默认21）
        """
        self.host = host
        self.username = username
        self.password = password
        self.port = port
        
        def ftp_connect(self):
            """
            连接ftp
            
            :return:ftp对象
            """
            ftp = FTP()
            ftp.set_debuglevel(0)  # 不开启调试模式
            ftp.connect(host=self.host, port=self.port)  # 连接ftp
            ftp.login(self.username, self.password)  # 登录ftp
            return ftp
        
        def download_file(self, ftp_file_path, dst_file_path, file_name):
            """
            从ftp下载文件到本地
            
            :param ftp_file_path: ftp下载文件路径
            :param dst_file_path: 本地存放路径
            :return:
            """
            buffer_size = 10240  #默认是8192
            ftp = self.ftp_connect()
            print ftp.getwelcome()  #显示登录ftp信息
            
            file_list = ftp.nlst(ftp_file_path)
            # print(file_list)
            try:
                ftp_file = os.path.join(ftp_file_path, file_name).replace("\\", "/")
                write_file = os.path.join(dst_file_path, file_name).replace("\\", "/")
                print(ftp_file)
                print(write_file)
                
                with open(write_file, "wb") as f:
                    ftp.retrbinary('RETR {0}'.format(ftp_file), f.write, buffer_size)
                    f.close()
                except Exception as ex:
                    print(str(traceback.format_exc()))
                    print("the file is not exist")
                    ftp.quit()
                    
                    def upload_file(self, local_file_path, ftp_file_path, file_name):
                        """
                        上传文件到指定服务器
                        
                        :param local_file:本地文件
                        :param ftp_file_path:
                        :return:
                        """
                        buffer_size = 10240  # 默认是8192
                        ftp = self.ftp_connect()
                        try:
                            ftp.cwd(ftp_file_path)
                            except:
                                try:
                                    ftp.mkd(ftp_file_path)
                                    ftp.cwd(ftp_file_path)
                                    except:
                                        print("the directory is not wrong")
                                        
                                        ftp_file = os.path.join(ftp_file_path, file_name).replace("\\", "/")
                                        local_file = os.path.join(local_file_path, file_name).replace("\\", "/")
                                        print(ftp_file)
                                        print(local_file)
                                        file_handle = open(local_file, "rb")
                                        ftp.storbinary('STOR {0}'.format(ftp_file), file_handle, buffer_size)
                                        
                                        ftp.quit()
                                        
                                        
def download_file_from_ftp(load_file_name, configs_path, dict_option, source = "input"):
    """
    从ftp下载文件
    
    :param load_file_name: 下载的文件名
    :param configs_path: 配置参数
    :param dict_option: 选项
    :param source: 输出还是输出
    :return:
    """
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp = FtpObject(host=host, username=username, password=password, port=port)
    ftp_file_path = "/"+"/".join([dict_option["userId"], dict_option["taskId"], source])
    
    ftp.download_file(ftp_file_path=ftp_file_path, dst_file_path=configs_path, file_name=load_file_name)


def upload_file_to_ftp(load_file_name, configs_path, dict_option, target="output"):
    """
    上传文件到ftp:
    
    :param load_file_name: 上传的文件
    :param configs_path: 配置路径
    :param dict_option: 选项
    :param target: 输入还是输出
    :return: None
    """
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp = FtpObject(host=host, username=username, password=password, port=port)
    ftp_file_path = "/" + "/".join([dict_option["userId"], dict_option["taskId"], target])
    
    ftp.upload_file(local_file_path=configs_path, ftp_file_path=ftp_file_path, file_name=load_file_name)


def download_impedance_from_ftp(load_file_name, configs_path, dict_option):
    """
    下载文件到本地
    
    :param load_file_name:加载文件名
    :param configs_path:配置路径
    :param dict_option:选项，任务ID
    :return:None
    """
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp = FtpObject(host=host, username=username, password=password, port=port)
    ftp_file_path = "/"+"/".join([dict_option["userId"], dict_option["taskId"], "output"])
    
    ftp.download_file(ftp_file_path=ftp_file_path, dst_file_path=configs_path, file_name=load_file_name)


def upload_impedance_to_ftp(load_file_name, configs_path, dict_option):
    """
    上传文件到ftp
    
    :param load_file_name: 上传文件
    :param configs_path: 配置路径
    :param dict_option: 字典选项
    :return: None
    """
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp = FtpObject(host=host, username=username, password=password, port=port)
    ftp_file_path = "/" + "/".join([dict_option["userId"], dict_option["taskId"], "output"])
    
    ftp.upload_file(local_file_path=configs_path, ftp_file_path=ftp_file_path, file_name=load_file_name)


def check_file_exist(ftp_file_path, file_name):
    """
    检查文件是否存在
    
    :param ftp_file_path:文件路径
    :param file_name:文件名称
    :return:
    """
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp_ob = FtpObject(host=host, username=username, password=password, port=port)
    ftp = ftp_ob.ftp_connect()
    file_list = ftp.nlst(ftp_file_path)
    if file_name in file_list:
        return True
    else:
        return False

if __name__ == '__main__':
    host = "*.*.*.*"
    username = "model"
    password = "****"
    port = "1004"
    ftp_file_path_input = "/user/b4c6eaacdfa04a038805c35cbf24ccc6/input"
    dst_file_path = r"E:\model\task_project\test"
    file_name = "M02_02_01.csv"
    ftp = FtpObject(host=host, username=username, password=password, port=port)
    ftp.download_file(ftp_file_path=ftp_file_path_input, dst_file_path=dst_file_path, file_name=file_name)
    output_file = "M02_R01.csv"
    ftp_file_path = "/user/b4c6eaacdfa04a038805c35cbf24ccc6/output"
    configs_path = r"E:\model_v3\task_project\test"
    ftp.upload_file(local_file_path=configs_path, ftp_file_path=ftp_file_path, file_name=output_file)
```
