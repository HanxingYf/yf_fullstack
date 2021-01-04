# 电商小程序开发

- 前端框架 vant
    1. npm i @vant/weapp -S --production
    来自有赞， 微信生态为长
    2. npm init -y 初始化为node项目
    为了安装第三方插件
    3. 构建
    miniprogram_npm
    @vant/weapp/button/index

- api 在哪
    商品列表
    apifm-wxapi 提供数据

- 电商项目的感觉
    搜索栏
    导航栏
    banners
    推荐
    商品列表

- 总结一下搜索体验
    placeholder + padding-left + bindinput + bindConfirm + search 图标

- 业务
    1. 搜索
    2. tabbar （前端） 条件筛选业务 （后端查询参数？order=price）
    3. 列表业务 wx:for
    data:{
        goods: []
    }
    apifm
    /goods?order=&page=${n}$size=20&keyword=addidas
    
- 生命周期
    谁先发生， 适合做什么
    onLoad 加载 wxml，wxss js 最少
    onshow wxml + wxss 渲染， js 还没执行完 无法交互
    onReady 