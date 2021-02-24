import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: 'yf的个人博客' },
        { cid: 456, title: 'yf的个人博客' },
        { cid: 789, title: 'yf的个人博客' },
      ]
    }
    this.props.history.push("/home/")
  }
  render() {
    return (
      <div>
        
        <h2>JSPang.com</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <Link to={'/List/' + item.cid}>
                  <li key={index}>{item.title}</li>
                </Link>

              )
            })
          }
        </ul>
      </div>

    );
  }
}

export default Index;