const { Module } = require("webpack");

// 与 parcel 的不同， 配置繁琐
// npm run build
// 去根目录下找到 webpack.config.js 配置文件
// module node 模块化 commonjs
// import export es6    export default
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
}
