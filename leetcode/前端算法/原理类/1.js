function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
} 

const p = new Person('orange')
const p1 = new Person('a')
console.log(p.name) // 'orange'
p1.sayName(); // 'orange'

