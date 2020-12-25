let num = [12, 10, 8, 12, 7, 6, 4, 10, 12];
let list = {};
let id = 0;
let max = 0;
num.map(a =>{
    if(a in list)   list[a]++;
    else    list[a] = 1;
})
// console.log(list);
for(let i in list){
    if(list[i]>=max){
        max = list[i];
        id = i;
    }
}
console.log(typeof id);