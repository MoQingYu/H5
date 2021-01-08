const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); 
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')
const isPub = process.env.ENV == "pub";

module.exports = {
  mode: isPub ? "production" : "development",
  entry: {
    app: "./src/app.tsx",
  },
  output: {
    filename: "[name]_bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              }
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当图片小于3000B时，使用url-loader处理图片, 否则使用file-loader
              limit: 3000,
              fallback: "file-loader",
              name: "[name].[hash:7].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html",
      hash: true,
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    // 非根路由下刷新报错
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9900,
    compress: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
      })
    ]
  }
}