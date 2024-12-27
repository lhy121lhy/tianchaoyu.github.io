

# html简介

```python
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<h1>我的第一个标题</h1>
 
<p>我的第一个段落。</p>
 
</body>
</html>
```

![02A7DD95-22B4-4FB9-B994-DDB5393F7F03.jpg](./1-html前端简要介绍.assert/1700924089929-71377680-af73-4982-ba95-77fdf4293e1c.jpeg)


- **<!DOCTYPE html>** 声明为 HTML5 文档
- **<html>** 元素是 HTML 页面的根元素
- **<head>** 元素包含了文档的元（meta）数据，如 **<meta charset="utf-8">** 定义网页编码格式为 **utf-8**。
- **<title>** 元素描述了文档的标题
- **<body>** 元素包含了可见的页面内容
- **<h1>** 元素定义一个大标题
- **<p>** 元素定义一个段落<br>换行
## html工程项目一般结构


```plain
my-project/                # 项目根目录
|-- dist/                  # 用于存放构建后的文件，如压缩后的CSS/JS文件
|-- src/                   # 存放源代码
|   |-- assets/           # 静态资源
|   |   |-- images/       # 图片资源
|   |   |-- fonts/       # 字体资源
|   |-- components/       # 项目组件（如果使用组件化开发）
|   |   |-- Header.js     # 导航栏组件
|   |   |-- Footer.js     # 页脚组件
|   |   `-- ...           # 其他组件
|   |-- styles/           # CSS样式文件
|   |   |-- main.css      # 主样式表
|   |   `-- ...           # 其他样式表
|   |-- scripts/          # JavaScript脚本
|   |   |-- main.js       # 主JavaScript文件
|   |   `-- ...           # 其他脚本文件
|   |-- views/            # 视图文件（如果使用MVC架构）
|   |   |-- index.html    # 主页视图
|   |   `-- ...           # 其他视图文件
|   |-- index.html        # 主HTML文件
|   `-- manifest.json     # 网站清单文件（用于PWA）
|-- node_modules/          # Node.js项目依赖
|-- .git/                  # Git版本控制文件夹
|-- .gitignore             # 指定不需要版本控制的文件和文件夹
|-- package.json           # Node.js项目配置文件
|-- webpack.config.js       # Webpack配置文件
|-- postcss.config.js      # PostCSS配置文件
|-- babel.config.js        # Babel配置文件
`-- README.md              # 项目说明文件
```


# 前端服务启动
### 本地开发环境

1. **安装依赖**： 如果你使用的是Node.js项目，需要先在项目根目录下运行```npm install
```
或```yarn
```
来安装依赖。
```plain
bash

npm install
# 或者
yarn
```

1. **构建项目**： 对于需要构建的项目（如使用了Webpack、Rollup等构建工具的项目），需要先构建项目。
```plain
bash

npm run build
# 或者
yarn build
```
构建过程会将源代码压缩、优化，并输出到```dist/
```
或其他指定的目录。

1. **本地预览**： 在构建完成后，可以使用静态服务器在本地预览构建后的文件。可以使用```http-server
```
、```serve
```
等静态服务器工具。
```plain
bash

npx http-server dist -o
# 或者
npx serve -s dist
```
### 部署到服务器

1. **选择服务器**： 你可以选择不同的服务器来部署你的前端项目，例如Vercel、Netlify、GitHub Pages、AWS S3、阿里云OSS等静态网站托管服务，或者使用传统的Web服务器如Apache、Nginx。
2. **上传文件**： 将构建后的文件上传到服务器。这可以通过FTP、SCP、rsync等工具手动完成，也可以通过CI/CD流程自动化。
3. **配置服务器**： 根据服务器的不同，可能需要配置服务器以正确服务静态文件。例如，在Nginx中，你需要配置一个server块来处理静态资源的请求。
```plain
nginx

server {
    listen 80;
    server_name example.com;

    location / {
        root /path/to/dist;
        index index.html index.htm;
    }
}
```

1. **设置域名**（如果需要）： 如果你希望使用自定义域名，需要在DNS服务商处将域名解析到你的服务器IP地址，并在服务器上配置SSL证书（如果使用HTTPS）。
2. **监控与维护**： 部署完成后，需要监控前端服务的运行状态，并定期进行维护和更新。### 使用平台即服务（PaaS）
一些平台提供了更简单的部署方式，如：

- **Vercel**、**Netlify**：这些平台可以直接从你的Git仓库（如GitHub）自动部署前端项目。
- **GitHub Pages**：可以直接从GitHub仓库部署静态网站。这些服务通常提供了一键部署的功能，你只需要将代码推送到仓库，平台会自动帮你构建和部署。
