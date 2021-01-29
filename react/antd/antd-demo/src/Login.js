import React, { Component } from 'react';
import './Login.css';
import config from './config';
import { Form, Input, Button, Row } from 'antd';
// 用antd 做网站后台, 网站PC|mobile , 小程序 , Native App(ReactNative App), node 后端
export default class Login extends Component {
  render() {
    return (
      <div className="form">
        <div className="logo">
          <img src={config.logoPath} alt="logo"/>
          <span>{config.siteName}</span>
        </div>
        <Form>
          <Form.Item name="username"
          label="username"
          name="username">
            <Input placeholder="请输入用户名"/> 
          </Form.Item>
          <Form.Item name="password"
          label="Password"
          name="password">
            <Input placeholder="请输入密码"/> 
          </Form.Item>
          <Row>
            <Button type="primary" htmpType="submit">Sign in</Button>
            <p>
              <span className="margin-right">
                Username:guest
              </span>
              <span>Password :guest</span>
            </p>
          </Row>
        </Form>
      </div>
    )
  }
}
