// 剪刀石头布游戏， Tecent 
// 两个人玩  用户与 程序 玩这个游戏
// 1. 用户输入， node 输入？ rock scanf


var playerAction = process.argv[2];
console.log(process.argv[2]);

// 对手
if (['rock', 'paper', 'scissor'].indexOf(playerAction) == -1) {
  console.log('请输入正确的');
  return;
} else {
  var computerAction;
  var random = Math.random()*3;
  if(random<1){
    computerAction = 'rock';
    console.log('电脑出了石头');
  }else if(random > 2){
    computerAction = 'scissor';
    console.log('电脑出了剪刀');
  }else{
    computerAction = 'paper';
    console.log('电脑出了布');
  }
}

// if(computerAction == playerAction){
//   console.log('平局');
// }else if()


