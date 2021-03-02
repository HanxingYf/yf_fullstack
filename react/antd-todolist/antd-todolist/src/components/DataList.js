import TodoList from "../TodoList"

// 父组件 TodoList.js -> 数据通过 props 传给 DataList 粒度
// 一个组件负责作一件事情 
// 1. prop-types 
// 2. 事件  多个兄弟组件共享数据,  
import React, { Component } from 'react';
import { List } from 'antd'; // List 框架熟练的表征
import TodoItem from './TodoItem';

class DataList extends Component {
  deleteItem (id) {
    this.props.deleteItem(id);
  }
  changeItem (id) {
    this.props.changeItem(id);
  }

  render() {
    let data = this.props.list
    return (
      <List 
        bordered
        dataSource={data} // 数据源
        renderItem= { item => (
          // item id, content, isComplete,  
          <List.Item>
              <TodoItem  
              changeItem={id => this.changeItem(id)}
              deleteItem={id => this.deleteItem(id)} {...item}/>
          </List.Item>
        )}// item 定制
      />
    )
  }
}

export default DataList;
