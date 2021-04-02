const goods = [
  {
    name: 'iphone',
    price: 5000,
    inventory: 5,
    id: 1
  },
  {
    name: '华为',
    price: 10000,
    inventory: 5,
    id: 2
  }, {
    name: 'car',
    price: 500000,
    inventory: 5,
    id: 3
  },
  {
    name: '亚洲龙',
    price: 200000,
    inventory: 5,
    id: 4
  }
]

export default {
  // cd callback
  getProducts: (cb) => setTimeout(cb(goods), 1000)
}