const path = require('path')
//启动热更新的第二步
const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),
    output : {
        path : path.join(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    devServer : {
        open : true,
        port : 3000,
        contentBase : 'src', 
        hot :  true //启用热启动的第一步
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(), //配置热启动的第三步
        new htmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html'
        })
    ],
    module : {
        //这个节点用于配置所有第三方模块加载器
        rules: [
            //所有第三方模块的匹配规则
            {test: /\.css$/, use:['style-loader', 'css-loader']}, //配置.css文件的第三方loader规则
            {test: /\.less$/, use:['style-loader', 'css-loader' ,'less-loader']}, //配置处理.less文件的第三方loader规则 
            {test: /\.scss/, use:['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|gif|bng)$/, use:'url-loader?limit=50&name=[hash]-[name].[ext]'},   //处理图片路径的loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，
            // 大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            { test: /\.vue$/, use: 'vue-loader' },
        ] 
    },
    resolve : {
        alias : {
            // "vue$" : "vue/dist/vue.js"
        }
    }

}