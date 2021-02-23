// import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// js 模块化
// es6  模块化规范
import  { GlobalStyle }  from './style';  // style 方样式的
// iconfont 
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter }  from 'react-router-dom'; //前端路由
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';

// 根据当前path /  /Singer 
function App() { // react 组件  函数式组件 界面显示的， StatelessComponent
  return ( // JSX 
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      {renderRoutes(routes)} 
    </HashRouter>
  )
}

// class App extends Component { // 类式组件 StatefullComponent
//   constructor() {
//     this.setState({

//     })
//   }
//   render() {
//     return (
//       <div>
//       </div>
//     )
//   }
// }

export default App;
