// 文章模板的路由， 
import express from 'express';
import * as postController from './post.controller';
import { authGard } from '../auth/auth.middleware';
const router = express.Router();
// GET 获得 

/**
 * 创建内容
 */
// 检查有没有登录 next 
router.post('/posts', authGard , postController.store)

/**
 * 获取文章列表
 */
// router.get('/posts')

export default router;