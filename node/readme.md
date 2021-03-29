
- user 业务
  1. user.router.ts 入口 POST /register
  2. user.controller.ts 用户名或密码不为空，这是绝对不能存的，会带来数据库的问题， 用户端 管理 数据库
  3. user.service.ts 存数据
  4. user.middleware.ts 检测是否有存在的用户？ 注册 POST / register checkIsNameExist next() register