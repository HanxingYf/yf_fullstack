// 引用类型
// 基本数据类型 引用数据类型（Array function object ）
const a = []
const b = a;
b.push(1);
a.push(2)
console.log(b, a);

let a1 = 1;
b1 = a1;
b1 = 2;
console.log(a1);

function test(person) {  // 引用
  person.age = 26;
  person = {
    name: 'yyyy',
    age: 30
  }
  return person
}

const p1 = {
  name: 'ssss',
  age: 25
}

const p2 = test(p1)

console.log(p1);
console.log(p2);