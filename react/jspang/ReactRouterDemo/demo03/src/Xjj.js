import React, { Component, Fragment } from 'react';
import XjjItem from './XjjItem'
import './style.css'
class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '请输入',
      list: ['头部按摩', '精油推背']
    }
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate---组件发生改变前执行')
    return true
  }
  //shouldComponentUpdate返回true才会被执行。
  componentWillUpdate() {
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }
  //shouldComponentUpdate返回true才会被执行。
  componentWillUpdate() {
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input id="jspang" className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => { this.input = input }}></input>
          <button onClick={this.addList.bind(this)}> 增加服务</button>

        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.state.list.map((item, index) => {
              return (
                <XjjItem content={item}
                  key={index + item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                ></XjjItem>
                // <li key={index + item}
                //   onClick={this.deleteItem.bind(this, index)}
                //   dangerouslySetInnerHTML={{ __html: item }}>

                // </li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

  inputChange() {
    // console.log(e.target.value);
    this.setState({
      inputValue: this.input.value
    })
  }

  // 增加服务的按钮响应方法
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('div').length);
    })

  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}


export default Xjj;