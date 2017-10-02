import {  combineReducers} from 'redux';
import {  routerReducer} from 'react-router-redux';
import kassenzeichenReducer from './modules/kassenzeichen';
import mappingReducer from './modules/mapping';
import authReducer from './modules/auth';
import uiStateReducer from './modules/uiState';

const rootReducer = combineReducers({
  kassenzeichen: kassenzeichenReducer,
  mapping: mappingReducer,
  uiState: uiStateReducer,
  auth: authReducer,
  routing: routerReducer,
});
export default rootReducer;