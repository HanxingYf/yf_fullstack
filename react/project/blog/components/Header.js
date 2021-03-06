import React from 'react'

import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
} from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">杨帆</span>
        <span className="header-txt">react练习</span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
          <HomeOutlined />
                    首页
                </Menu.Item>
          <Menu.Item key="video">
          <SettingFilled />
                    视频
                </Menu.Item>
          <Menu.Item key="life">
          <SmileOutlined />
                    生活
                </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header