// pages/home/home.js
const WXAPI = require('apifm-wxapi');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    keyword: '',
    noticeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 首页功能很多
    // 1. 取banners 数据,
    this.initBanners();
    // 2. 商口列表
    this.categories();
    // ....
    this.getCoupons();
    this.getNotice();
    this.kanjiaGoods();
    this.pingtuanGoods();
  },
  // async 函数修饰符
  // 里面可以有大量耗时的操作 告别then 
  async initBanners() {
    // es7 await 
    // ? WXAPI 而来， 抽象
    // 小程序是前端， 
    // API 来自后端 
    // 由第三方提供 URL + method 
    // SDK  banners 接口名 type 不同的banner
    const res =  await WXAPI.banners({
      type: 'index'
    })
    // console.log(res);
    this.setData({
      banners: res.data
    })
  },
  categories() {},
  getCoupons() {},
  async getNotice() {
    // WXAPI
    //   .noticeList({pageSize: 5})
    //   .then(res => {
    //     console.log(res);
    //     this.setData({
    //       noticeList: res.data
    //     })
    //   })
    const res = await WXAPI.noticeList({pageSize: 5})
    this.setData({
      noticeList: res.data
    })
  },
  kanjiaGoods() {},
  pingtuanGoods() {},
  tapBanner(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({
        url:url
      })
    }
  },
  doSearchInput(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  doSearch(e) {
    wx.navigateTo({
      url: `../goods/list?name=${this.data.keyword}`,
    })
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
