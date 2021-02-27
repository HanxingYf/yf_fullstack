
import React, { Component } from 'react';
import './boss.css'

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      button_Hide: true,
      button_Show: false
    }
  }
  render() {
    return (
      <div>
        <div className='a'>
          aaa
        </div>
        <div className={this.state.isShow ? 'show' : 'hide'}>小仙女-张若怡</div>
        <div>
          {this.state.button_Hide ? <button onClick={this.handleShow.bind(this)}>隐藏小仙女</button> : null}
          {this.state.button_Show ? <button onClick={this.handleShow.bind(this)}>召唤小仙女</button> : null}

        </div>
      </div>
    );
  }

  handleShow() {
    this.setState({
      isShow: !this.state.isShow,
      button_Hide: !this.state.button_Hide,
      button_Show: !this.state.button_Show
    })
  }
}

export default Boss;