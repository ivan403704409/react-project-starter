import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hi extends Component{
  render() {
    return (
      <div>
        mervyn hi
        <Link to={'/hello'}><div>HELLO</div></Link>
        <Link to={'/'}><div>App</div></Link>
      </div>
    );
  }
};