---
title: 工程创建
permalink: /tutorials/emme/create_project/
---

# 1、starting emme

emme工程的创建方法：

- 软件界面创建
- 脚本语言

- # 2、脚本化创建emme工程

## 2.1、主要步骤

- 创建emme工程数据库（emme bank）
创建空的emme工程，设置工程位置，名称，定义工程参数维度， 
```python
dimensions = {
          "scalar_matrices":999, 'origin_matrices':999, 'destination_matrices':999,
          'full_matrices':9999, 'scenarios':30, 'centroids':5000,
          'regular_nodes':57499, 'links':250000, 'turn_entries':400000,
          'transit_vehicles':30, 'transit_lines':20000, 'transit_segments':800000,
          'extra_attribute_values':40000000, 'functions':99,"operators":2000
      }
```

- 创建基础scenario 
- 数据加载： 
  - 加载函数
  - 创建矩阵
  - 添加mode
  - 添加车辆信息
  - 添加小区
  - 添加小区地带属性（zone partition）
  - 添加基础网络（node,link)
  - 添加线性文件
  - 添加公交文件
  - 添加额外属性（node,link,transit line,transit segment）
  - 空间坐标系指定
  - 设定vdf function参数指定
- 结束 

# 3、EMME工程文件结构

![文件结构](/assets/images/emme/file_struck.png)
-  Database:为基础数据库，存放emmebank，matrix等文件；
- logbook:为日志记录文件夹，存放执行记录；
- Media:背景文件夹，存放GIS地图目录，可在EMME工程中直接添加自定义背景；
- Network Build：网络创建文件夹，用户编辑网络记录文件，允许不同工程之间共享；
- Scripts:脚本文件目录，jupyter notebook下创建的脚本文件存放目录；
- Worksheets：数据表存放目录；