var obj = {}; // 空对象
// defineProperties 方法 es6 定义对象的新的API vue
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});
obj.property2 = 'lbz';
console.log();
