import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class Form extends Component {
  
  handleChange(value) {
    this.props.searchItem(value)
  }

  render() {
    return (
      <Search 
        placeholder="请输入搜索内容"
        style={{marginButton: '8px'}}
        onSearch={value => this.handleChange(value)}
      />
    )
  }
}

export default Form;