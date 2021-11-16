function  eval (str) {
  return new Function(`return ${str}`)
}

// console.log(eval('poi')());

let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"
