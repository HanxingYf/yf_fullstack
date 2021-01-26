import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // 根组件
import reportWebVitals from './reportWebVitals';
import CommentApp from './CommentApp';

ReactDOM.render(
  <React.StrictMode>
    <CommentApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
