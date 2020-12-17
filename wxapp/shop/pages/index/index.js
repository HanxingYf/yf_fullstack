// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    interval:2000,
    duration:800,
    newsList: [
      {
        url: '/image/s4.png',
        name: '瓜子 100g',
        price: '0.01'
      },
      {
        url: '/image/s5.png',
        name: '芹菜 半斤',
        price: '0.02'
      },
      {
        url: '/image/s6.png',
        name: '素米 375g',
        price: '0.03'
      },
      {
        url: '/image/s4.png',
        name: '瓜子 100g',
        price: '0.01'
      },
      {
        url: '/image/s5.png',
        name: '芹菜 半斤',
        price: '0.02'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})