import other from './other';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  other,
  routing: routerReducer
});

export default rootReducer;