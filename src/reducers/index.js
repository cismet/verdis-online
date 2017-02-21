// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {responsiveStateReducer} from 'redux-responsive';
import kassenzeichenReducer from './kassenzeichenReducer';
import uiStateReducer from './uiStateReducer';

/**
 * REDUX Control Flow:
 * 
 *    1) Whenever you want to replace the state in the store, you dispatch an action.
 *
 *    2) The action is caught by one or more reducers.
 *
 *    3) The reducer/s create a new state that combines the old state, and the dispatched action.
 *
 *    4) The store subscribers are notified that there is a new state.
 *
 * @type {Function}
 * 
 */

const rootReducer = combineReducers({
    kassenzeichen: kassenzeichenReducer,
    uiState: uiStateReducer,
    browserUI: responsiveStateReducer,
    routing: routerReducer
});
export default rootReducer;
