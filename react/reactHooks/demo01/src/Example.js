// import React, { Component } from 'react';

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p>click {this.state.count} times</p>
//         <button onClick={this.clickBtn.bind(this)}>点击我</button>
//       </div>
//     );
//   }
//   clickBtn() {
//     // console.log('a');
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
// }

// export default Example;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Index() {
  useEffect(() => {
    console.log(console.log('useEffect=>老弟，你来了！Index页面'));
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  },[])
  return <h2>JSYang</h2>
}

function List() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！List页面')
  })
  return <h2>List-page</h2>
}


function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`you click ${count} times`);
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}
export default Example;




















