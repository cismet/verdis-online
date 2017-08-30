// Set up your root reducer here...
import {  combineReducers} from 'redux';
import {  routerReducer} from 'react-router-redux';
import kassenzeichenReducer from './kassenzeichenReducer';
import mappingReducer from './mappingReducer';
import uiStateReducer from './uiStateReducer';
import counter from './counter'

const rootReducer = combineReducers({
  kassenzeichen: kassenzeichenReducer,
  mapping: mappingReducer,
  uiState: uiStateReducer,
  routing: routerReducer,
  counter
});
export default rootReducer;