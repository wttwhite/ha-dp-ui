const path = require("path");
const BaseConfig = require("./webpack.base");
const { merge } = require("webpack-merge"); // 合并配置项 , "webpack-merge": "^5.8.0"要使用解构的方式
module.exports = merge(BaseConfig, {
  mode: "development",
  entry: {
    index: path.join(__dirname, "../example/", "main.js"),
  },
  devtool: "source-map",
  devServer: {
    open: false,
    hot: true,
    host: "0.0.0.0",
    // useLocalIp: true
  },
});
