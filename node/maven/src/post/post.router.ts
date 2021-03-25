// 文章模块的路由
import express from 'express'
import * as postController from './post.constoller';
const router = express.Router();

// RESTFUL
/**
 * 创建内容
 */
router.post('/posts',postController.store)

/**
 * 获取内容
 */
// router.get('/posts')

export default router;

