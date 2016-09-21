import React, { Component } from 'react';
import { Link } from 'react-router';
import { Map, is } from 'immutable';

export default class Hi extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: Map({time: 1}),
      text: 'immutable test'
    }
    
  }
  
  addadd() {
    let temp = this.state.count;
    temp.time++;
    
    // traditional
    // this.setState({count: temp});
    // console.log(this.state.count.time); //这样就一点都不清真（Immutable）了，必须cloneDeep
    
    // immutable
    this.setState({count: this.state.count.update('time', v => v+1)});
    console.log(this.state.count.get('time'));
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // traditional
    // console.log('update ', this.state.count.time);
    // console.log('update ', nextState.count.time);
    
    // immutable
    console.log('update ', this.state.count.get('time'));
    console.log('update ', nextState.count.get('time'));
    console.log(is(this.state, nextState), this.state === nextState, this.props === nextProps, is(this.props, nextProps));
    return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
  }
  
  render() {
    return (
      <div>
        mervyn hi
        <div>{this.state.text}</div>
        {/*<div>{this.state.count.time}</div>*/}
        <div>{this.state.count.get('time')}</div>
        <button onClick={this.addadd.bind(this)}>+1</button>
        <Link to={'/hello'}><div>HELLO</div></Link>
        <Link to={'/'}><div>App</div></Link>
      </div>
    );
  }
};