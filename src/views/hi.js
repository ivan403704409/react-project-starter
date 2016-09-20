import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hi extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: {time: 1},
      text: 'immutable test'
    }
    
  }
  
  addadd() {
    let temp = this.state.count;
    temp.time++;
    this.setState({count: temp});
    console.log(this.state.count.time); //这样就一点都不清真（Immutable）了，必须cloneDeep
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('update ', this.state.count.time);
    console.log('update ', nextState.count.time);
    return true;
  }
  
  render() {
    return (
      <div>
        mervyn hi
        <div>{this.state.text}</div>
        <div>{this.state.count.time}</div>
        <button onClick={this.addadd.bind(this)}>+1</button>
        <Link to={'/hello'}><div>HELLO</div></Link>
        <Link to={'/'}><div>App</div></Link>
      </div>
    );
  }
};