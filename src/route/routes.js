import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import Hello from '../views/hello';
// import Hi from '../views/hi';
// import App from '../views/app';

export default (
  <Route path="/">
    <IndexRoute getComponents = { (nextState, callback) => {
      require.ensure([], function (require) {
        callback(null, require('../views/app').default)
      })
    }}/>
    <Route path="/hello" getComponents = { (nextState, callback) => {
      require.ensure([], function (require) {
        callback(null, require('../views/hello').default)
      })
    }}/>
    <Route path="/hi" getComponents = { (nextState, callback) => {
      require.ensure([], function (require) {
        callback(null, require('../views/Hi').default)
      })
    }}/>
  </Route>
);