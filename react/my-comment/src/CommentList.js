import React, { Component } from 'react';
import './CommentList.css';
import Comment from './Comment';
export default class CommentList extends Component {
  render() {
    return (
      <div>
        CommentList
        {/* {wx:for vue  react 没有指令} */}
        {
          this.props.comments.map(comment => <Comment comment={comment} />)
        }
      </div>
    )
  }
}