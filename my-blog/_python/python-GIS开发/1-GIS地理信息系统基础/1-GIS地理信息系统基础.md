---
title: 基础语法
permalink: /tutorials/python/delixinxi/
---


- authort:lhy
## 1、python与地理空间系统

地理信息系统（Geographic Information System或 Geo－Information system，GIS）有时又称为“地学信息系统”。它是一种特定的十分重要的空间信息系统。它是在计算机硬、软件系统支持下，对整个或部分地球表层（包括大气层）空间中的有关地理分布数据进行采集、储存、管理、运算、分析、显示和描述的技术系统。

地理信息系统（GIS，Geographic Information System）是一门综合性学科，结合地理学与地图学以及遥感和计算机科学，已经广泛的应用在不同的领域，是用于输入、存储、查询、分析和显示地理数据的计算机系统，随着GIS的发展，也有称GIS为“地理信息科学”（Geographic Information Science），近年来，也有称GIS为"地理信息服务"（Geographic Information service）。GIS是一种基于计算机的工具，它可以对空间信息进行分析和处理（简而言之，是对地球上存在的现象和发生的事件进行成图和分析）。 GIS 技术把地图这种独特的视觉化效果和地理分析功能与一般的数据库操作（例如查询和统计分析等）集成在一起。

> 来源于百度百科



- 常见空间数据标准格式：shapefile,DXF,DWG,DGN,ECW,MrSID,TIFF,JPG2000, KML, GML等
- 常见gis操作软件：arcgis,Qgis,transcad,emme,cad
## 2、python开发环境搭建

### 2.1、geopandas软件包安装


- 依次下载和安装三方软件包：gdal、Fiona、Pyproj、shapely
> 注：根据python软件版本下载对应版本的软件包，对于pip install package无法成功，需要手动下载三房软件包，下载网址：[https://www.lfd.uci.edu/~gohlke/pythonlibs/#wordcloud](https://www.lfd.uci.edu/~gohlke/pythonlibs/#wordcloud)


### 2.2、软件包手册


- geopandas：[https://geopandas.org/en/stable/getting_started/introduction.html](https://geopandas.org/en/stable/getting_started/introduction.html)
- shapely：[https://www.osgeo.cn/shapely/manual.html](https://www.osgeo.cn/shapely/manual.html)