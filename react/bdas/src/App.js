import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";



import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
