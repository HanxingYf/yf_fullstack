const obj = {
  name: 'this指向obj',
  bar() {
    const x = () => this
    return x
  },
}
console.log(obj.bar()(),'======')
const a = {name: 'this指向a'}
const b = {name: 'this指向b而非obj和a'}
console.log(obj.bar.bind(b)().call(a))
