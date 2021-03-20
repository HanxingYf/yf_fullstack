// 首页 singer 排行榜 复杂的
// 模块化
import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../pages/Recommend/store'

export default combineReducers({
  recommend: recommendReducer,
  // singers: ,
  // rank: ,
})