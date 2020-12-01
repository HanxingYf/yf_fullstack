// console.log('Ai 来了！');
// node 引入模块的关键字
// 图像识别
// const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
//fs是 node 的内置模块
// const fs = require('fs')
// 1. 读入文件 I/O 从硬盘读入内存

const APP_ID = "23077963";
const API_KEY = "oehh6GInC9iy09hUCxVxeB6s";
const SELECT_KEY = "ko94PdiUlLbqAoKTBpu1HynT5OddiIx6";

const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;

const client = new ApiImageClassifyClient(APP_ID,API_KEY,SELECT_KEY);
const fs = require('fs');

const image = fs.readFileSync("timg.jpg").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })