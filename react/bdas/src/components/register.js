import React, { useState } from 'react';
import axios from 'axios'
import servicePath from '../api/apiUrls'
import { Select, Form, message, Input, Button } from 'antd'
import '../static/style/register.css'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Option } = Select;

const Register = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios({
      method: 'post',
      data: values,
      withCredentials: true,
      url: servicePath.register,
    }).then(
      res => {
        console.log(res);
        if (res.data.code === 0) {
          message.success('注册成功')
          props.history.push('/')
        }
        else {
          message.error('注册失败')
        }
      }
    )

  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="register">
      <div className="register-name">
        欢迎来到注册界面
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="user_name"
          name="user_name"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}

        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              pattern: /^.{8,30}$/,
              message: '密码必须8-30位',
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

      <Form.Item
        name="password_confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          {
            pattern: /^.{8,30}$/,
            message :' '
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('两次密码必须相同'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </Form>

    </div >
  )
}

export default Register
