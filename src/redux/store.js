import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { actions as UiStateActions } from './modules/uiState';

export const history = createHashHistory();

const logger = createLogger({
	collapsed: false
	// diff:true
});

const initialState = {};
const enhancers = [];
const devMiddleware = [ thunk, logger, reduxImmutableStateInvariant(), routerMiddleware(history) ];

const prodMiddleware = [ thunk, routerMiddleware(history) ];

let composedEnhancers;

if (process.env.NODE_ENV === 'development') {
	console.log('============= DEVELOPMENT ENV');

	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}

	composedEnhancers = compose(applyMiddleware(...devMiddleware), ...enhancers);
} else {
	composedEnhancers = compose(applyMiddleware(...prodMiddleware), ...enhancers);
}

const store = createStore(rootReducer, initialState, composedEnhancers);

window.addEventListener('resize', () => {
	store.dispatch(UiStateActions.screenResize(window.innerHeight, window.innerWidth));
});
//Fire a first screenResize to initially fill the uiState
store.dispatch(UiStateActions.screenResize(window.innerHeight, window.innerWidth));

if (window.Cypress) {
	window.__store__ = store;
}

export default store;
