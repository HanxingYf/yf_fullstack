// const createPhoneNumber = (arr) => '(' + arr[0] + arr[1] + arr[2] + ')'

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";  //手机模板
    numbers.forEach(n =>{
        // console.log(n);
        format.replace('x',n);
    })
    return format;
}

console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]));
let n = 1;
console.log("asdf".replace('s',n));