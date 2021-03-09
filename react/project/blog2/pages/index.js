
import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'
import { CalendarOutlined, FolderAddOutlined, FireOutlined } from '@ant-design/icons'


const Home = (list) => {

  const [mylist, setMylist] = useState(list.data)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><CalendarOutlined /> {item.addTime}</span>
                    <span><FolderAddOutlined /> {item.typeName}</span>
                    <span><FireOutlined /> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introdue}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}


Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        console.log(res.data);
        resolve(res.data)
      }
    )
  })
  return await promise
}

export default Home