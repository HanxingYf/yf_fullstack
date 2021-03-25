import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../static/style/Login.css'

import servichPath from '../api/apiUrls'
import axios from 'axios'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  const [user_name, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [u_type, setU_type] = useState('user')

  const checkLogin = (prpos) => {
    setIsLoading(true)
    if (!user_name) {
      message.error('用户名不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      return false
    } else if (!password) {
      message.error('密码不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      return false
    }
    let dataProps = {
      'u_type': u_type,
      'user_name': user_name,
      'password': password
    }
    let history = this.context.router.history
    // console.log(dataProps);
    axios({
      method: 'POST',
      url: servichPath.login,
      data: dataProps,
      withCredentials: true
    }).then(
      res => {
        setIsLoading(false)
        // console.log(res);
        if (res.data.code === 0) {
          history.push('/')
        } else {
          message.error('用户名密码错误')
        }
      }
    )
  }


  return (
    <div className='login'>
      <div className="login-name">
        欢迎来到登录界面
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
          onChange={(e) => { setUserName(e.target.value) }}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          onChange={(e) => { setPassword(e.target.value) }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={checkLogin}>
            登录
        </Button>
          Or <a href="">立即注册</a>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Login