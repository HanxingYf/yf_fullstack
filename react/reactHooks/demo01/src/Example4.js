import React, { useState, createContext, useContext  } from 'react';

const CountContext = createContext()

function Example4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>

      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>

  )
}

function Counter(){
  const count = useContext(CountContext)
  return <h2>{count}aaaaaaa</h2>
}

export default Example4;