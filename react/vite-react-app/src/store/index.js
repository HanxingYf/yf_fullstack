import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk' // 异步支持

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// tree 单一状态树
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store