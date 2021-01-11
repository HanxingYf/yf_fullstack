// es6 提供的新的数据结构
// 1. 为了数组的优化而来
// Set Map 两种数据结构 存放特定的数据集合
const people = new Set();
people.add('hl');
people.add('lh');
people.add('yf');
people.add('hl');
for(const person of people){
  console.log(person);
}
const students = new Set(['wdh','xwh','xyj']);
students.add('zez');
// console.log(people);