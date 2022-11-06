const path = require('path')
const BaseConfig = require('./webpack.pro.base')
const { merge } = require ('webpack-merge') 
const fs = require('fs')
const files = fs.readdirSync(path.resolve (__dirname, '../packages/components/'))
// console.log('files', files) // files [ 'bar-rate', 'name-value' ]

let entry = {};
for (const item of files) {
  const name = item.toLowerCase()
  entry[name] = path.resolve (__dirname, `../packages/components/${name}/`, 'index.js')
}

module.exports = merge(BaseConfig, {
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist/packages/'),
    libraryTarget: 'umd',  // 打成umd的方式
    libraryExport: 'default'
  }
})
