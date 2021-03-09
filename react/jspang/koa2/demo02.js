const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
  //当请求时GET请求时，显示表单让用户填写
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
    ctx.body = html;
    //当请求时POST请求时
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = '接收到请求';
  } else {
    //其它请求显示404页面
    ctx.body = '<h1>404!</h1>';
  }
})

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
})