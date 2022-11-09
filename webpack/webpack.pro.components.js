const path = require("path");
const BaseConfig = require("./webpack.pro.base");
const { merge } = require("webpack-merge");
const fs = require("fs");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const files = fs.readdirSync(
  path.resolve(__dirname, "../packages/components/")
);
// console.log('files', files) // files [ 'bar-rate', 'name-value' ]

let entry = {};
for (const item of files) {
  const name = item.toLowerCase();
  entry[name] = path.resolve(
    __dirname,
    `../packages/components/${name}/`,
    "index.js"
  );
}

module.exports = {
  mode: "production",
  externals: {
    vue: "vue",
    echarts: "echarts",
  },
  entry,
  output: {
    path: path.resolve(__dirname, "../", "lib"),
    filename: "[name]/index.js",
    // publicPath: "/",
    // libraryExport: "default",
    // umdNamedDefine: true,
    libraryTarget: "umd", // 打成umd的方式
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  // optimization: {
  //   minimizer: [new cssMinimizerWebpackPlugin()],
  // },
  plugins: [
    new VueLoaderPlugin(),
    new miniCssExtractPlugin({
      filename: "[name]/style.css",
    }),
  ],
};
