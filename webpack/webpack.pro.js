const path = require('path')
const BaseConfig = require('./webpack.pro.base')
const { merge } = require ('webpack-merge') 

module.exports = merge(BaseConfig, {
  entry: {
    index: path.join(__dirname, '../packages/', 'ha-vue-ui.js')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../', 'dist/'),
    libraryTarget: 'umd',  // 打成umd的方式
    libraryExport: 'default'
  }
})