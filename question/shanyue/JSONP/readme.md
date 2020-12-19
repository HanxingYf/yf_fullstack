1. HTTP 协议
    TCP/IP HTTP 是上层
    Web Server RestFul

JSON 资源, 喜欢的运动员 HTTP 提供服务 R请求 Q响应
url http://127.0.0.1/players.json
动作 GET
live-server 静态资源
json-server

url -> 资源 resource
跨域 ： 域名不一样 || 协议不一样 || http -> https || 3000 -> 8000
json 自带跨域能力
js 不允许跨域
不支持 ？ 解决方案是 JSONP JSON with padding

用 DOM 编程， docunment.createElement('script')
script.src = "https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction";
doucunment.body.appendChild(script);

- 文章
    用前端实现底层
    1. fetch Promise thenable 去服务器端通信
    2. DOM API
        tree
        doucument.createElement()
        父节点.appendChild(子节点)
        doucunment.createTextNode();

    HTTP 底层协议
        请求响应 url + method
        数据格式是 JSON
        跨域 为了安全
        json-server 本地 自带解决方案
        JSONP fn(data)  在页面端预留一个函数fn

        response 来到客户端
        script 返回 fn(data)

        代码有一定的的功能区分时， 请写函数userItemElement = (user) => {
            const user = createElement;
            return user;
        }
