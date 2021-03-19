const koa = require('koa');
const mount = require('koa-mount')
const app = new koa();
const fs = require('fs');


// console.log(app instanceof require('events').EventEmitter);

// 使用中间件
// 调入内存 fs
// 发送
app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/views/index.html', 'utf-8');
  })
)

app.listen(3000)