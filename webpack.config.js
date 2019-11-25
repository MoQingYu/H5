var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 项目根路径
var ROOT_PATH = path.resolve(__dirname);
// 项目源码路径
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
// 产出路径
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


var proxy = {};
var plugins = [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
        favicon: './favicon.ico', //favicon路径
        filename: './index.html',
        template: "./src/index.html",
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }
    })
]
    plugins.push(new webpack.HotModuleReplacementPlugin());

var publicPath = "./index/";
module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./src/app']
    },
    output: {
        path: "/",
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        proxy: proxy,
        host: '127.0.0.1'
    },
    module: {
        rules: [{
            test: /\.tsx|\.ts$/,
            exclude: /^node_modules$/,
            use: 'awesome-typescript-loader'
        }, {
            test: /\.(less|css)$/,
            exclude: /^node_modules$/,
            // loader: ExtractTextPlugin.extract('style-loader', "css-loader?minimize!less-loader?compress")
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    "less-loader"
                ]
            })
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            // use: 'url?limit=10000&name=img/[hash].[ext]'
            use: "file-loader"
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {}, 
    },
    externals: {}
}