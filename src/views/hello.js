import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

class Hello extends Component {
  render() {
    const { text, route, addOne, addTwo } = this.props;
    console.log(route);
    return (
      <div>
        <div className="edf">
          mervyn update to 15.3.0 {text} add some function and update all
        </div>
        
        <button onClick={ (e) => {
          addOne(1)
        }}>加1</button>
        <button onClick={ (e) => {
          addTwo()
        }}>加2</button>
        
      <Link to={'/hi'}><div>HI</div></Link>
        <Link to={'/'}><div>App</div></Link>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.other.text,
    route: ownProps.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  // bind all actions to store
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)