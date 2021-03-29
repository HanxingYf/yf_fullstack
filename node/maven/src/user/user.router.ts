import express from 'express';
import {
  validateUserData,
  hashPassword
} from './user.middleware';

import * as userController from './user.controller'

const router = express.Router();

/**
 * 创建用户
 */
router.post('/users', validateUserData, hashPassword, userController.store);

export default router;