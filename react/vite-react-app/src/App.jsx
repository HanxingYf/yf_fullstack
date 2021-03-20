import React, { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Recommend from './pages/Recommend/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Recommend />
    </Provider>
  )
}

export default App
