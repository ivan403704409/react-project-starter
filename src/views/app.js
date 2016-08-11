import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component{
  render () {
    return (
      <div>
        <h1>React Kentucky</h1>
        <ul role="nav">
          <li><Link to={'/hello'}>HELLO</Link></li>
          <li><Link to={'/hi'}>HI</Link></li>
        </ul>
      </div>
    );
  }
};