// import  es6 模块化方案
// 游戏规则与设备分离 游戏要在小程序， 。。。。上玩，移植怎么办？
// 复用
const game = require('./game.js'); // commonJS 
// JS 操作系统 事件机制
// 一直玩？ process.argv[2] 持续不断的去命令行取呢？ 
var winCount = 0;
process.stdin.on('data', (buffer) => {
  const action = buffer.toString().trim(); // 二进制变string
  const result = game(action);
  if (result == 1) {
    winCount++
    if (winCount == 3) {
      console.log('我不玩了, 哼')
      process.exit()
    }
  }
})

