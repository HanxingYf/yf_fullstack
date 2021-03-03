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



import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
    </div>
  )
}
export default Example;





















