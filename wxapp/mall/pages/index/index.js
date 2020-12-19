//index.js
//获取应用实例
const WXAPI = require('apifm-wxapi');
const app = getApp()

Page({
  data: {
    banners:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //生命周期
  onLoad: function () {
    // 启动滑屏效果
    // 图片数据从哪里来
    WXAPI
      .banners({// 头图 banner 位
        type:'app'
      })
      .then(res =>{
        this.setData({
          banners:res.data
        })
        console.log(res)
      })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
