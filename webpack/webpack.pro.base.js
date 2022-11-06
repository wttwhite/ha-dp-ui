const VueLoaderPlugin = require ('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  externals: {
    vue: 'vue',
    echarts: 'echarts'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test:/\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
}
