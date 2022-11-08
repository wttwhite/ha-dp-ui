const path = require("path");
const BaseConfig = require("./webpack.pro.base");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(BaseConfig, {
  entry: {
    index: path.join(__dirname, "../packages/", "hs-ui.js"),
  },
  output: {
    filename: "hs-ui.common.js",
    path: path.resolve(__dirname, "../", "lib/"),
    libraryTarget: "umd", // 打成umd的方式
    libraryExport: "default",
  },
  plugins: [new CleanWebpackPlugin()],
});
