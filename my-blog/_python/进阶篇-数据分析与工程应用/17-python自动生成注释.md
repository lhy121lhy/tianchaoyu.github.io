---
title: 自动注释
permalink: /tutorials/python/sphinx/
---


- 技术路线：sphinx
# 1、sphinx简介
sphinx是一种基于python的文档工具，可以基于python源码中的注释，生成单独的接口文档。

# 2、文档生成
## 2.1、安装sphinx

```python
pip install sphinx  #  安装包
pip install sphinx_rtd_theme  # 安装主题包
```

## 2.2、生成模板

- 新建doc目录：
- 终端进入doc目录：cd  ./doc
- 输入：sphinx-quickstart，根据需要输出选项；
```python
Separate source and build directories (y/n) [n]:y # 源文件和目标文件分开
The project name will occur in several places in the built documentation.
> Project name: mymodel  # 项目名称
> Author name(s): lhy # 作者
> Project release []: 1.0.1 # 版本号

```

配置完成后生成：
![image.png](/assets/images/python/1671526487751-980365c0-670d-46d4-aced-95b3a45b54fd.png)


## 2.3、生成html文件

- 配置文件修改：source/conf.py
```python
import  os
import sys
sys.path.insert(0,os.path.abspath(r"E:\pycharm_app\torch_model\torch_app\src"))


project = 'mymodel'
copyright = '2022, lhy'
author = 'lhy'
release = '1.0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx.ext.autodoc"
]

templates_path = ['_templates']
exclude_patterns = []

language = 'zh_CN'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_theme = 'alabaster'
html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']

```

- 添加文件目录：添加绝对路径，不容出问题，不然生成html过程中会出现无法导入自定义的包
```python
import  os
import sys
sys.path.insert(0,os.path.abspath(r"E:\pycharm_app\torch_model\torch_app\src"))
```

- 添加自动根据注释生成模块：
```python
extensions = [
    "sphinx.ext.autodoc"
]
```

- 修改语言：中文：zh_CN
- 修改主题：
```python
html_theme = "sphinx_rtd_theme"
```

- 编译文件：在doc目录下
```python
sphinx-apidoc -o ./source  ../src
```
./source ：doc下生成build目标的源文件；
../src：自己编写的 python源文件
make clean可以清除build下面的文件夹

- 生成make html
