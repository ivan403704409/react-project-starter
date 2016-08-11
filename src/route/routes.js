import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Hello from '../views/hello';
import Hi from '../views/hi';
import App from '../views/app';

export default (
  <Route path="/">
    <IndexRoute component={App}/>
    <Route path="/hello" component={Hello}/>
    <Route path="/hi" component={Hi}/>  
  </Route>
);