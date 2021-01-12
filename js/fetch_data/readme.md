# js 常考考点
es6/ 红宝书 你不知道的javascript leetcode 
单线程的语言 , 数据通信相关    vue/react 不学 
1. npm init -y  
2. npm i json-server
3. db.json 数据文件
  命令行，如何启动db.json 成为后台数据源
  json 是 js 前端和后端通信的数据文件
- promise  五星 异步
-  postman http 访问代理

- 前端 + 后端 
  live-server http 前端服务 index.html
  json-server 后端数据
  前端和后端数据通信
  前端 去拉取后端数据
  get 
  post


- ajax 的表达
  JS 最重要的考点 XMLHttonRequest 对象
  1. 是历史性的突破， 带来前端主动请求数据能力， Ajax应用
    前端更主动， ajax + DOM 页面变得丰富，动态
  2. http://localhost:3000/uers 一切皆资源
    数据资源 GET 请求动作 path / users 
    POST 新增的  /uers {name:'yf'}

-XMLHttpRequest ActiveXObject("Micrsoft.XMLHTTP")
  浏览器嗅探 if else
  let httpRequest;
  - 创建好对象
  - .open('GET', url, true) 打开一个请求通道
    .send() 这个请求真的发送了
    .onreadystatechange
    XHMHttpRequest.Done 完成了
    httpRequest.responseText  返回的数据
    JOSN.parse(httpRequest.responseText)  返回的数据
    json数组 -> html 数组 map `<li>${user.id}</li>` innerHtml