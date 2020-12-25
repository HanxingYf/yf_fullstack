let g = [10, 9, 8, 7];
let g_flag = new Array(10000).fill(0);
let s = [5, 6, 7, 8];
g.sort((a, b) => a - b);
s.sort((a, b) => a - b);
const numOfChildren = g.length, numOfCookies = s.length;
let count = 0;
for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
        j++;
    }
    if (j < numOfCookies) {
        count++;
    }
}
console.log(count);
