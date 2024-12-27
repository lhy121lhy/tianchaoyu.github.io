---
title: 内存硬盘监控
permalink: /tutorials/python/memory_space/
---


```python
import psutil
import logging


logger = logging.getLogger(__name__)


def check_memory_space():
    total_G = psutil.virtual_memory().total/1024/1024
    free_G = psutil.virtual_memory().free/1024/1024
    used_G = psutil.virtual_memory().used /1024/1024
    logging.info("total memory is {},free memory is {},used memory is {}".format(total_G,free_G,used_G))

    # return total_G, free_G, used_G

def check_disk_space(path):
    """
    磁盘剩余空间检测
    :return:
    """
    disk_id = path.split("/")[0]
    size_disk = psutil.disk_usage(disk_id)
    total_G = size_disk.total / 1024 / 1024
    free_G = size_disk.free / 1024 / 1024
    used_G = size_disk.used / 1024 / 1024
    # return total_G,free_G,used_G
    logging.info("total disk is {},free disk is {},used disk is {}".format(total_G, free_G, used_G))

```
