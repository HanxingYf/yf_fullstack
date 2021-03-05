// 数据业务 模块化
import Loki from 'lokijs'  // js database  localStorage IndexDB 封装库 
// db 数据库句柄 notes 数据库的名字
export const db = new Loki('notes', {
  autoload: true, 
  autoloadCallback: databaseInitialize, // 第一次链接 执行的回调函数
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage' // 持久化 localStorage
})

function databaseInitialize () { // 
  const notes = db.getCollection('notes') // 有notes 数据表吗？ collections  table 
  if (notes === null) {
    db.addCollection('notes') // 添加一个表  notes 
  }
}

export function loadCollection (collection) { // 打开表
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)
    })
  })
}