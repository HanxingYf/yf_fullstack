// app 创建以及基本配置 中间件
// es6 module typescript => js

import express from 'express';
import postRouter from '../post/post.router'

const app = express();

const bodyParser = require('body-parser')
// 等
app.use(bodyParser.urlencoded());
// app 处于伺服 状态 eventEmitter

// body 加中间件 bodyParser

// 中间件来打理， 函数
// 所有的路由都在这里汇总
app.use(  // 中间件
  // 文章模块的路由，增删改查
  postRouter,
  // 用户相关的路由

  // 
)

export default app;