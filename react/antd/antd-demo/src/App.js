import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, button } from 'antd';
import Login from './Login';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Post></Post>
      {/* <Login></Login> */}
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
