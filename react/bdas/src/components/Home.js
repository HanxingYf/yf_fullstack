import axios from 'axios';
import React, { Component } from 'react';
import servicePath from '../api/apiUrls';
import { Button } from 'antd'

class Home extends Component {

  // values = 1;

  componentDidMount() {
    // console.log('-----');
    axios({
      method: 'post',
      data: '1',
      url: servicePath.ping
    }).then((res) => {
      console.log(res);
    })
  }

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        Home
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}


export default Home;