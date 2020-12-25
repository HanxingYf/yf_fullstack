// 云数据库
const db = wx.cloud.database()
// userInfo表
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList: []
  },
  navigatTo() {

  },
  getUserInfo(result) {
    // console.log(result.detail.userInfo);
    // 一次上云事件
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        // mysql where 条件查询
        userInfo.where({
          // 去云端就是为了拿openId
          // 用户的openId是唯一的，
          _openid:res.result.openId
        }).count().then( res => {
          console.log(res); 
          // 新用户
          if(res.total === 0){
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })
          }else{
            wx.navigateTo({
              url: '../add/add',
            })
          }
          
        })
      }
    })
  }
})