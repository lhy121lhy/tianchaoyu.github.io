---
title: XML文件格式解析
permalink: /tutorials/python/XML/
---


# 1、xml文件基础
每个element对象都具有以下属性：
1. tag：string对象，表示数据代表的种类。
2. attrib：dictionary对象，表示附有的属性。
3. text：string对象，表示element的内容。
4. tail：string对象，表示element闭合之后的尾迹。
5. 若干子元素（child elements）。

```plain
<tag attrib1=1>text</tag>tail
  1     2        3         4
```

## 2、解析XML文件

