let reg = /(\d{4})-(\d{2})-(\d{2})/;
let r = /(\d{1})-(\d{2})-(\d{2})/;
console.log(reg.test('0791-86-34'));
console.log(r.test('0791-86-34'));
console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);