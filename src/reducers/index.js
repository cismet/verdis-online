// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import {responsiveStateReducer} from 'redux-responsive';

// export default combineReducers;

 const rootReducer = combineReducers({
  routing: routerReducer,
  browserUI: responsiveStateReducer
});
export default rootReducer;
