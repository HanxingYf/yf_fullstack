
// 模块化方案  import  export default  
// commonjs   require  module.export   exports
// 复用 playerAction
module.exports = function(playerAction) {

  if (['rock', 'paper', 'scissor'].indexOf(playerAction) == -1) {
      // console.log('请输入正确的');
      throw new Error('invalid playerAction');
      return;
  } else {
      var computerAction;
      var random = Math.random() * 3
      if (random < 1) {
          computerAction = "rock"
          console.log('电脑出了石头');
      }
      else if (random > 2) {
          computerAction = "scissor";
          console.log('电脑出了剪刀');
      }
      else {
          computerAction = "paper";
          console.log('电脑出了布');
      }
      if (computerAction == playerAction) {
          console.log('平局');
          return 0;
      } else if (
          (computerAction == 'rock' && playerAction == 'scissor') ||
          (computerAction == 'scissor' && playerAction == 'paper') ||
          (computerAction == 'paper' && playerAction == 'rock')){
              console.log('你输了');
              return -1;
      }else{
          console.log('你赢了');
          return 1;
      }
    }
}
