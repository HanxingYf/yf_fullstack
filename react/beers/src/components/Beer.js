import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return(
      <div>
        Beer
        <Link to="/">Main</Link>
      </div>
    )
  }
}