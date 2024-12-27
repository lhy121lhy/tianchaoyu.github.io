
# 1、项目创建

```python
# 创建项目
django-admin startproject mywebsite

# 启动项目
python manage.py runserver

```

# 2、项目目录设置
工程项目mywebsite二级目录

- manage.py 文件是管理DJango项目的重要命令行，主要用于启动、创建应用和完成数据库的迁移。
- __init__.py 文件用于标识当前所在的目录是一个python包
- setting.py是重要的配置文件，项目启动时，setting.py配置文件会被自动调用，而它定义的一些全局为Django运行提供参数，在配置文件中也可以自定义一些变量，用于全局作用域的数据传递。
- urls.py用于记录django项目的url映射关系，属于项目的基础路由配置文件，路由系统就是在这个文件中完成相应配置的，项目中的动态路径必须先经过该文件匹配，才能实现WEB站点上资源的访问功能。
- wsgi.py是WSGI服务程序的人口文件，主要用于启动应用程序。​
# 3、创建应用

```python
python manage.py startapp
```

## 3.1、应用说明

- __init__.py：说明目录是一个python模块
- models.py：写和数据库项目的内容
- views.py:接受请求，进行处理，与M与T进行交互，返回应答，定义处理函数，视图函数
- test.py:写测试代码的文件
- admin.py:网站后台管理文件​
## 3.2、应用注册
当建立应用和项目之间的联系以后，需要对应用进行注册，接着需要修改setting.py的INSTALLED_APPS配置项
​



