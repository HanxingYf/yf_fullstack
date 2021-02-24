import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
import './index.css'; 


function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video/">视频教程</Link></li>
            <li><Link to="/workplace">职场技能</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path='/' exact component={Index}></Route>
          <Route path='/video/'  component={Video}></Route>
          <Route path="/workplace/"   component={Workplace} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter