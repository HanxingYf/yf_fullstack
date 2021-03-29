// app创建以及基本配置 中间件 面筋
// es6 module typescript=> => js  
import express from 'express';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from './app.middleware';
import userRouter from '../user/user.router';
const app = express();
const bodyParser = require('body-parser');
// app 处于侍服状态 eventEmitter
// 等
app.use(bodyParser.urlencoded());
//body 加中间件 bodyParser 

// 中间件来打理 函数
// 所有的路由都在这里汇总
app.use( //函数
  // 文章模块的路由存， 删， 改 查
  userRouter,
  postRouter
  
  // 用户路由
  // ...

)
// 处理各种错误 
app.use(defaultErrorHandler);
export default app;