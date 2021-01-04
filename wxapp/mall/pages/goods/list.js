// pages/goods/list.js
const WXAPI = require('apifm-wxapi')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listType:1,
    name: '', //搜索
    orderBy: '',// 排序条件
    goods:[]
  },
  changeShowType(){
    if (this.data.listType == 1) {
      this.setData({
        listType: 2
      })
    } else {
      this.setData({
        listType: 1
      })
    }
  },
  bindinput(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindconfirm(e){
    this.setData({
      name: e.detail.value
    })
    this.search()
  },
  search() {

  },
  async search(){
    wx.showLoading({
      title: '加载中',
    })
    const _data = {
      orderBy: this.data.orderBy,
      page: 1,
      pageSize: 20,
    }
    if (this.data.name) {
      _data.k = this.data.name
    }
    // /goods?k=addidas&page=1&pageSize=20
    const res = await WXAPI.goods(_data)
    console.log(res);
    this.setData({
      goods: res.data
    })
    wx.hideLoading()

  },
  filter(e){
    this.setData({
      orderBy: e.currentTarget.dataset.val
    })
    this.search()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.search();
    
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
