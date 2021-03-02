class Lady {
  content = "hi，小哥哥";
  sayHello() {
    return this.content;
  }
}

class Xjj extends Lady {
  sayLove(){
    return 'i love you'
  }
  sayHello(){
    return super.sayHello() + " 你好！"
  }
}
const goddess = new Xjj();
console.log(goddess.sayLove());
console.log(goddess.sayHello());

