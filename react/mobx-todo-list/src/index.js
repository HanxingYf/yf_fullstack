import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
// 复杂应用 都是细分的
// 组件和数据是分离的
import store from './store';  // 组件与数据流的模块化
// 给我们的组件提供状态管理
import { Provider } from 'mobx-react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,document.body
)
