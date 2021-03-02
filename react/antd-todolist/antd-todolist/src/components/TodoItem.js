import React, { Component } from 'react';
import { Typography, Button } from 'antd'; // 下划线的组件  css 
import { DeleteFilled } from '@ant-design/icons';
const { Text } = Typography; //下划线 
class TodoItem extends Component {
  handleDelete(id) {
    this.props.deleteItem(id) // 报告老板
  }
  handleChangeItem(id) {
    this.props.changeItem(id)
  }
  render() {
    let { content, isComplete, id } = this.props; // 所有的props 解出来
    return (
      <div className="item-container" 
        onDoubleClick={() => this.handleChangeItem(id)}
      style={{cursor: 'poiner'}} >
        <Text delete={isComplete}>{content}</Text>
        <Button type="primary" icon={<DeleteFilled />} 
        onClick={() => this.handleDelete(id)}></Button>
      </div>
    )
  }
}

export default TodoItem;
