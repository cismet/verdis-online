// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import {responsiveStateReducer} from 'redux-responsive';
import kassenzeichenReducer from './kassenzeichenReducer';
import uiStateReducer from './uiStateReducer';

 const rootReducer = combineReducers({
  kassenzeichen: kassenzeichenReducer,
  uiState: uiStateReducer,
  browserUI: responsiveStateReducer,
  
  routing: routerReducer
});
export default rootReducer;
