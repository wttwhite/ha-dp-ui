## 准备工作

### 先跑起来页面

下载需要的依赖包

1. "vue": "^2.6.14",
2. "vue-loader": "^15.10.0"
3. "vue-template-compiler": "2.6",  // 和vue版本一致
4. babel-loader
5. html-webpack-plugin
6. webpack@5  // 4下载sass sass-loader报错
7. webpack-cli
8. webpack-dev-server

新建webpack.dev.js

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require ('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../demo/', 'main.js')
  },
  devtool: 'source-map',
  devServer: {
    open: false,
    hot:true,
    host:'0.0.0.0',
    // useLocalIp: true // 没有这个属性了
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve (__dirname, '../public/index.html'),
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
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
```

mian.js

```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App),
}).$mount('#app')

```

App.vue

```javascript
<template>
  <div> 555 </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
```

package.json/scripts

`"dev": "webpack-dev-server --config ./webpack/webpack.dev.js"`

`npm run dev`

就能把简单的页面跑起来，现在把packages里的vue文件以组件的形式import到App.vue中，此时因为还没有装scss，会报错, 所以要下载sass sass-loader style-loader，并在webpack.dev.js中增加规则配置

```javascript
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
```

### 组件注册渲染

hs-ui.js


core-js: 是关于 ES 标准最出名的polyfill,
