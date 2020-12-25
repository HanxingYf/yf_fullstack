Page({
  data: {
    phones:[{
      title: 'iphone13',
      desc: '宇庙最香手机',
      price: '11000.00',
      thumb: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145789.9525714.jpg',
      num: 2
    }, {
      title: '小米10',
      desc: '得屌丝者得天下',
      price: '1300.00',
      thumb: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90',
      num: 2
    }, {
      title: 'Redmi Note 9 系列',
      desc: '爸妈用的',
      price: '999.00',
      thumb: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/584add2c9cfdb9eefe7b642bf191773a.png?thumb=1&w=160&h=110&f=webp&q=90',
      num: 2
    }],
    dailao: '上菜' ,
    xgg: '刘艺龙',
    imageURL: '',
    imageURL2: ''
  },
  onLoad() {
    // console.log('当页面的wxml 和wxss加载完成， 显示之后， 调用这个函数， 生命周期函数')
    setTimeout(() => {
      this.setData({
        dailao: '陈睦景'
      })
    }, 5000)

    setTimeout(() => {
      this.setData({
        xgg: '喻顺武'
      })
    },10000)
  }
})