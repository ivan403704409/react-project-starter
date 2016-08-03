import { createStore } from 'redux';
import rootReducer from '../reducers'

export default () => {
  const store = createStore(rootReducer);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers').default
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}