import React, { useReducer } from 'react';

function ReducerDemo(){
  const [count, dispatch] = useReducer((state,action)=>{
    switch(action){
      case 'add':
        return state++
      case 'sub':
        return state--
      default:
        return state
    }
  },0)

  return(
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={()=>dispatch('add')}>+</button>
      <button onClick={()=>dispatch('sub')}>-</button>
    </div>
  )
  }

  export default ReducerDemo