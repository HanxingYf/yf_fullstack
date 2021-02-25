import React, { Component } from 'react';
import PropTypes from 'prop-types'
class XjjItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {}
  render() {
    console.log('render,挂载中');
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
    );
  }
  handleClick() {
    console.log('撩小姐姐');
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
  }
  componentWillMount() {
    console.log('componentWillMount,将要挂载');
  }
  componentDidMount() {
    console.log('componentDidMount,挂载完成');
  }
  componentWillReceiveProps() {
    console.log('child - componentWillReceiveProps')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
}

XjjItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default XjjItem;