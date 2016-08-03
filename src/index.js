import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './route/routes';

const store = configureStore();
const app = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}>
      </Router>
    </div>
  </Provider>
), app);