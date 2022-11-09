const path = require("path");
const BaseConfig = require("./webpack.pro.base");
const { merge } = require("webpack-merge");
const fs = require("fs");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
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

module.exports = merge(BaseConfig, {
  entry,
  output: {
    filename: "[name]/index.js",
    libraryExport: "default",
    path: path.resolve(__dirname, "../", "lib"),
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: "/",
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
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name]/style.css",
    }),
  ],
});
