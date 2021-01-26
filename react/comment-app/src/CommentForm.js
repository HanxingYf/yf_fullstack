import React, { Component } from 'react'; //es6 解构
import './CommentForm.css'; // wxss

export default class CommentForm extends Component {
  render() {
    // JSX  wxml  html 当成 js 来执行
    return (
      <div className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
              <input type="text"/>
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
              <textarea/>
            </div>
          </div>
          <div className="comment-field-button">
            <button>发布</button>
          </div>
      </div>

    )
  }
}
