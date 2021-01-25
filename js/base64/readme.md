- 图片性能优化，    想到什么？ 减少 http 数， lazyload thro
  - 编解码
data:img/jpg;base64, 文件头  base64 编码格式
google 大量的使用 base64 转换

  1. 网页性能优化
    - 精灵图片技术优化  多张图（小图， icon） 
    - 历史  lazyload  scroll +  ，  减少一些执行次数 throttle
    - 现在有  base64 把发送请求的机会都没了 不是所有图片  需要衡量
        小一点的图片
    - 大图的话， 特别是头图， banner 图， 商品详情页的图片
      可以在 webp 大小减少25%+  清晰度不受损  + lazyload
      <!-- 京东图片优化历史 -->


- js 多线程的苗头 Worker 推出有一段时间了， 但是没有成为主流
  有多线程的能力
  new Worker('js 文件') 单独运行， 不会阻塞主线程
  1. 与 dom 相关的事情不能做
    js 是 css/html 的第三者
    worker 不能和主线程去同时操作同一个元素