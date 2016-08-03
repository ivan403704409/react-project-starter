import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Hello extends React.Component{
  render() {
    const { text, addOne, addTwo } = this.props;
    return (
      <div>
        <div className="edf">
          mervyn update to 15.2.1 {text}
        </div>
        
        <button onClick={ (e) => {
          addOne(1)
        }}>加1</button>
        <button onClick={ (e) => {
          addTwo()
        }}>加2</button>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { text: state.other.text};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)