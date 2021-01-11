1. 框架
 weui 让小程序更像原生框架
 比 vant 小一些

2. 导航的自定义
3. 全局引入组件
  app.js  app.wxss  app.json
4. 全局启用下拉更新 onPulldownRefresh
  耗时操作，stop 模仿 app 中下拉刷新
  有点鲁莽
5. 图片都放在 images 会让程序变大， 放入云 cdn 中，减少代码包的体积

6. color-ui 大法好
  flex justify-center padding 