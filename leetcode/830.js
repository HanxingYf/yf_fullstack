// var largeGroupPositions = function(s) {
//     let res = [];
//     for (let l = 0, r = 0; l < s.length, r < s.length;) {
//         while(s[l] === s[r+1]){
//             r++;
//         }
//         // console.log(l,r);
//         if (r - l >= 2) {
//             res.push([l, r]);
//         }
//         l = r + 1;
//         r = l; 
        
//     }
//     return res;
// };

// var largeGroupPositions = function(s) {
//     let a = s.split('').find('x');
//     console.log(a);
// };
// let s = "abcdddeeeeaabbbcd";
// console.log(largeGroupPositions(s));


// 0,1,1,2,3,5,8,13,21,34
let s = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040];
console.log(s.find(i => i>0));