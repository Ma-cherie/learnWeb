# 使用 webpack 搭建大型项目工程 {ignore}

[toc]

> 该项目为多页应用程序

## 初始化

1. 使用 npm 初始化项目
2. 构建工程目录
   - dist：输出目录，该目录保存最终运行的代码
   - src：源码目录，该目录保存开发期间编写的所有源代码
     - assets：嵌入式静态资源，该目录保存需要用到的各种嵌入式静态资源，如图片、css、字体图标等
     - 其他独立功能模块目录：为不同的功能模块创建不同的子目录
     - common: 公共模块目录，该目录保存被所有独立功能模块使用的模块
   - public：页面模板所在目录，该目录中保存页面模板
3. 安装 webapck
4. 创建 webpack.config.js
   - 配置mode为development
5. 在 npm 中分别开启脚本
   - start: 目前没有
   - build：webpack
6. 执行构建命令```npm run build```进行测试

## 配置入口和出口

需要根据实际情况进行配置

目前的工程中有两个页面，如果认为每个页面仅需要引用一个JS，则最终需要生成两个JS，分别是list和detail

按照目前的要求，配置两个入口

```json
{
    "entry":{
        "list": "...",
        "detail":"..."
    }
}
```

为了反映文件内容的变化，配置出口规则，输出文件格式为 ``` 入口名称-5位哈希.js ```，并把js放置到输出目录的scripts文件夹中

按照目前的要求，配置出口规则

```json
{
    "output":{
        "filename":"scripts/[name]-[hash:5].js"
    }
}
```

## 清理输出目录

为了保证每次构建时清理输出目录，使用插件 [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)

## 输出模板文件

使用插件 [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) 将public文件夹中的模板生成到输出目录

## 处理 css 依赖

使用加载器 [css-loader](https://www.npmjs.com/package/css-loader) 处理css依赖

然后使用加载器 [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) 

```js
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:5].css'
        })
    ]
}
```

## 处理图片文件

使用 [url-loader](https://www.npmjs.com/package/file-loader)

```js
module:{
    rules:[
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: "imgs/[name]-[hash:5].[ext]"
                    },
                },
            ],
        }
    ]
}
```

## 开发服务器

安装插件 [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

配置端口

```js
devServer: {
  port: 9000,
  openPage: "list.html",
  open: true,
  quiet: true
}
```

配置 npm scripts 的start脚本：```webpack-dev-server```

## 添加babel

安装babel 

```shell
npm i -D @babel/core babel-loader
```

配置：

```js
module:{
    rules:[ 
        {
            test:/\.js/, 
            use: {
                loader:"babel-loader" 
            }
        }
    ]
}
```

## 配置代理

ajax请求地址：http://101.132.72.36:5100/api/local

为解决开发期间直接请求造成的跨域问题，可在开发期间配置代理服务器

```js
devServer: {
  port: 9000,
  openPage: "list.html",
  open: true,
  quiet: true,
  proxy: {
      "/api": "http://101.132.72.36:5100"
  }
}
```