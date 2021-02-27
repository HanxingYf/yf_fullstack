import axios from 'axios';
import React, { Component, Fragment } from 'react';
import TodoListItem from './TodoListItem'
import Boss from './boss'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '请输入',
      list: ['刷leetcode', '学习 react hooks']
    }
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue}
          onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}>add</button>
        <ul ref={(ul) => { this.ul = ul }}>

          {
            this.state.list.map((item, index) => {
              return (
                <TodoListItem content={item}
                  key={index}
                  deleteItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
          {/* {
            this.state.list.map((value, index) => {
              return (
                <li onClick={this.deleteItem.bind(this, index)} key={index}>{value}</li>
              )
            })
          } */}
        </ul>
        <Boss></Boss>
      </Fragment>
    );
  }

  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  componentDidMount() {
    axios.post('http://rap2api.taobao.org/app/mock/278207/reactdemo/todolist')
      .then((res) => { 
        console.log('axios 获取数据成功:' + JSON.stringify(res)) 
        this.setState({
          list:res.data.data
      })
      })
      .catch((error) => { console.log('axios 获取数据失败' + error) })
  }
}

export default TodoList;