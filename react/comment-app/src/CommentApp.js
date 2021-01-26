// 应用的根组件
import React from 'react';
// css 分组件来写的 
import './CommentApp.css';// webpack 一切静态资源皆可打包 
import CommentList from  './CommentList.js'; // json
import CommentForm from './CommentForm.js'; // json
class CommentApp extends React.Component { // 通过继承快速创建类
  constructor() {
    super()
    this.state = {
      name: 'CommentApp'
    }
  }
  
  // 至少要实现的方法
  render() { // 复杂 JSX  template wxml wxss  js  
    return ( // JSX react template XML in JS 
      // HTML 也叫XML 用于网页标签的XML叫HTML
      // react 中有种JSX 来放模板
      <div class="wrapper">
        {this.state.name}
        <CommentForm />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp; // 向外输出一下  挂载到root dom 上的 react的区域
