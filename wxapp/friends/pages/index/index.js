Page({
  data:{
    userList: []
  },
  navigatTo() {

  },
  getUserInfo(result) {
    // console.log(result.detail.userInfo);
    // 登录
    wx.cloud.callFunction({
      name: 'getOpenId',
      // 回调函数
      complete: res => {
      }
    })
  },
  
})