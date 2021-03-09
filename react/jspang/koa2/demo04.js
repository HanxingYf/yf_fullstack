const Koa = require('koa')
const fs =require('fs')

const app = new Koa();

function render(page){

  return new Promise((resolve,reject)=>{
    let pageUrl = `./page/${page}`;
    fs.readFileSync(pageUrl,'binary',(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}