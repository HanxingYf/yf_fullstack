#  react + ts 的怀抱

1. logo
  webpack bundler
  一切静态资源可以打包
2. DisplayData  更加安全和
  ts 展示数据
  - 异步/同步 Promise + ts
  - api  模块化 
  - ts  model 
  members  数组
  js []   ts  type[]
3. 面试官问 React 项目的目录架构， 你是怎么理解的
  开公司 小型项目， 没那么要求   webpack index.ts -> App-> Component
  大型项目， react 全家桶组织起来， MVVM -> SPA router + 数据管理Rudux 
  /api  请求的管理  
  /pages 咱由级别组件
  /model  ts 独有的， 对所有的数据做interface 

  ts + react  拦路虎 api 
  1. 组件里要有数据 生命周期来请求  
  2. /api 提供了 members.fetchMember
  3. 返回的是thenable的数据 
  4. api 定义的时候 Prmise.resolve(data) thenable return data 
  5. ts 要对api 请求方法做类型的检 返回值
    :Promise<MemberEntity[]>
  6. model 提供了对 MemberEntity定义
  




