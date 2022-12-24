const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", //指定开发模式，默认为none
  entry: "./src/index.tsx", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"), //指定输出文件存放到dist文件夹中
    filename: "bundle.js", //指定打包后生成的文件名称为bundle.js
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 由awesome-typescript-loader 解析以.tsx结尾的文件
        loader: "ts-loader", 
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //定义解析文件的顺序，且引入这些文件可以不加后缀
  },
  plugins: [
    //指定加载的index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    // 每次打包都自动删掉上一次打包留下的包（dist）
    new CleanWebpackPlugin({}),
  ],
};
