import {  combineReducers} from 'redux';
import {  routerReducer} from 'react-router-redux';
import kassenzeichenReducer from './modules/kassenzeichen';
import mappingReducer from './modules/mapping';
import uiStateReducer from './modules/uiState';
import counter from './modules/counter';

const rootReducer = combineReducers({
  kassenzeichen: kassenzeichenReducer,
  mapping: mappingReducer,
  uiState: uiStateReducer,
  routing: routerReducer,
  counter
});
export default rootReducer;