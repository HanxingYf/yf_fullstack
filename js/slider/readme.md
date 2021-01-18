# 开发工作流，  交给 node 去做
- 工作内容和工作流程是两码事
  - 轻量级的开发流程
    parcel
  - 重量级的开发流程
    webpack babel
- live-server  http 静态服务
  stylus stylus 编译
  初级阶段开发流程    ->    高级阶段

  多个命令行， 有点复杂， 统一

- 轻量级的前端开发套件 parcel
  - node  做开发流程工具
    npm i parcel    安装在当前项目下  
  - npm node package management
    yarn facebook npm i -g yarn
  - npm -i stylus --save-dev  为了开发阶段而安装

- 现代开发工艺
  parcel live-server + stylus + ...   全部包圆
  index.html 是入口文件   http 服务1234
  Build 编译   stylus   -》 css
  .styl devDependencies style.styl -> style.css