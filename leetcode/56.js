let s = [1, 2, 9];
let len = s.length;
let plus = 0;
for (let i = len - 1; i >= 0; i--) {
    if(i === len -1){
        s[i]++;
    }
    plus = parseInt(s[i] / 10);
    s[i] = (s[i] + plus) % 10;
    console.log(plus);
}
console.log(s);


