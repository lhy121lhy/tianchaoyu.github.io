---
title: minio文件传输
permalink: /tutorials/python/minio/
---

MinIO是一个高性能的分布式对象存储系统，它兼容Amazon S3云存储服务接口，非常适合于存储大容量非结构化的数据，例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等

# minIO服务安装与启动

参考教程[minio安装](https://min.io/docs/minio/windows/index.html)


# 基于python的在线文件传输
```python
# -*- coding: UTF-8 -*-
"""
Created on 2021 - 12 - 15
# @ 功能：
    从minio上传和下载文件
# @author: lhy
# @file: get_file_from_minio.py
# @time: 2021/12/15 15:39
# @email: 742232975@qq.com
"""

from minio import Minio
from minio.error import ResponseError
import os
import traceback
import logging
logger = logging.getLogger(__name__)


HOST = "*.*.*.*"
USERNAME = "***"
PASSWORD = "***"
POER = "***"


minio_conf = {
    "endpoint": '*****',
    "access_key": "****",
    "secret_key": "****",
    "secure": False
}


class MinioObject(object):
    """网络"""
    def __init__(self, minio_conf):
        self.minio_conf = minio_conf
        self.minio_client = Minio(minio_conf["endpoint"],
                                  access_key="admin",
                                  secret_key="admin12345",
                                  secure=False)
        self.bucket_name = "file-manage"
        self.check_bucket()

    def check_bucket(self):
        check_exist = self.minio_client.bucket_exists("file-manage")

        if not check_exist:
            self.minio_client.make_bucket("model")

    def upload_file(self, object_name, file_path):
        """
        上传文件
        :param file_path:存储对象名称
        :param file_name:本地文件对象
        :return:
        """
        try:
            self.minio_client.fput_object(bucket_name=self.bucket_name, object_name=object_name,file_path=file_path)
        except Exception as ex:
            print("some error work",ex.message)
            print("upload failed")

    def download_file(self,object_name, file_path):
        """
        下载文件
        :param object_name:服务器名称
        :param file_path:本地文件名称
        :return:
        """
        try:
            self.minio_client.fget_object(bucket_name=self.bucket_name, object_name=object_name, file_path =file_path)
        except Exception as ex:
            print("some error work", ex.message)
            print("download failed")


def download_file_from_minio(load_file_name,configs_path, dict_option):
    """
    下载文件到本地
    :param load_file_name:下载文件名称
    :param configs_path:本地路径
    :param dict_option:任务ID
    :return:
    """

    minio = MinioObject(minio_conf)
    start_file = "model/"+"/".join([dict_option["userId"], dict_option["taskId"], "input", load_file_name])
    end_file = os.path.join(configs_path, load_file_name)
    if not check_file_exist(start_file):
        # print("the file is not exist in minio",start_file)
        logging.info("the file {} not exist in minio".format(load_file_name))
    else:
        logging.info("down file {} in minio".format(load_file_name))
        minio.download_file(object_name=start_file, file_path=end_file)


def upload_file_to_minio(load_file_name,report_path, dict_option):
    """(output_file["mode_choice_report"], self.report_path, get_json
    上传文件到指定位置
    :param ftp_file_path:
    :param dst_file_path:
    :return:
    """
    minio = MinioObject(minio_conf)
    end_path = "model/" + "/".join([dict_option["userId"], dict_option["taskId"], "output", dict_option["subTaskId"],load_file_name])
    start_path = os.path.join(report_path, load_file_name)
    logging.info("upload file：{} to minio".format(load_file_name))
    minio.upload_file(object_name=end_path, file_path=start_path)


    def check_file_exist(minio_path_file):
    """检查文件是否尊在"""
    minio = MinioObject(minio_conf)
    # objects = minio.minio_client.list_objects(minio.bucket_name, recursive=True)
    exit_stats = True
    # path_name = os.path.join(minio_path, auto_skim_file)
    try:
   		minio.minio_client.stat_object(minio.bucket_name,minio_path_file)
    except:
        exit_stats = False
        print("there no target file in minio")
    return exit_stats


    if __name__ == '__main__':
        host = "*.*.*.*"
        username = "model"
        password = "****"
        port = "****"
        ftp_file_path_input = "/user/b4c6eaacdfa04a038805c35cbf24ccc6/input"
        dst_file_path = r"E:\model\task_project\test"
        file_name = "M02_02_01.csv"
```

