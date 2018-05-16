const htmlWebpackPlugin = require('html-webpack-plugin');//配置自动生成 html
const webpack = require('webpack');

module.exports = {
    //入口
    entry: {
        main: './src/main.js'},
    //出口
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js'
    },
    //模块
    module: {
            loaders: [
            {
            test: /.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {//处理 sass
            test: /.scss$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            //loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
        }, {//处理 es6
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                plugins: ['transform-runtime'],
            }
        }, {//处理 vue
            test: /.vue$/,
            loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader',
                        sass: 'style-loader!css-loader!sass-loader?indentedSyntax',
                    },
                },
        }, {// 处理图片
            test: /.(png|jpg|svg|gif|jpeg|ttf|woff|eot)$/,
            loader: 'url-loader?limit=4096&name=image/[name].[ext]'//导出的图片存到指定的文件夹中
        }]
    },
    plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
            }),//以 src/index.html 为模板生成的新 html
            new webpack.ProvidePlugin({
                //'Moment': 'moment',
                "$": "jquery",
                "jQuery": "jquery",
                "window.jQuery": "jquery",
                Popper: ['popper.js', 'default']
                //"React": "react"
            }),//处理 jquery 的全局引入
            //new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
            //    disable: false,
            //    allChunks: true
            //}),//抽离 css
        ]
        //插件

}
