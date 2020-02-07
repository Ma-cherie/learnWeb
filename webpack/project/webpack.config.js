// 总的配置
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry:{
        list: "./src/list/index.js",
        detial: "./src/detail/index.js"
    },
    output:{
        filename: "script/[name].[chunkhash:5].js"
    },
    resolve:{
        alias:{
            "@": path.resolve(__dirname,'src')
        }
    },
    stats: {
        modules: false,
        colors: true
    },
    plugins: [
        // 自动删除上次打包内容
        // new CleanWebpackPlugin(), 
        // 拷贝页面
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: 'detail.html',
            chunks: ['detail']
        }),
        // 拷贝图片等静态资源
        new CopyWebpackPlugin([
            {from: './public', to: './'}
        ]),
    ],
    // 开发服务器
    devServer: {
        open:true,
        openPage: 'list.html',
        proxy: {
            "/api":{
                target: "http://yuanjin.tech:5100/",
                changeOrigin: true
            }
        }
    }
}