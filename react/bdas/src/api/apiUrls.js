let ipUrl = 'http://bdas.xiaosiro.cn/api/v1/'

let servicePath = {
  ping: ipUrl + 'ping',
  login: ipUrl + 'login'
  // getArticleList: ipUrl + 'getArticleList',  //  首页文章列表接口
  // getArticleById: ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
  // getTypeInfo: ipUrl + 'getTypeInfo'  // 文字类别接口
}
export default servicePath;