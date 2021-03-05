// 数据范围 2（53）-1
// bigint
// 高精度的时间戳， MySQL id 大数据
const theBiggestInt = 9999999999999999999n;
// console.log(typeof theBiggestInt);
const alsoHuge = BigInt(99999999999999999);

const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
const b2 = BigInt(Number.MIN_SAFE_INTEGER)

const maxP = b1 + 1n;
console.log(maxP);