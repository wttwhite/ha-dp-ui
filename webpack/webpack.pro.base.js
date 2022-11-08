const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  externals: {
    vue: "vue",
    echarts: "echarts",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
};
