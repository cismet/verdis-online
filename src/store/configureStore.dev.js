// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import promise from 'redux-promise';

/**
 * redux-thunk 
 * 
 * middleware that allows you to write action creators that return a function 
 * instead of an action. The thunk can be used to delay the dispatch of an action, 
 * or to dispatch only if a certain condition is met. Used mainly for async calls to api, 
 * that dispatch another action on success / failure
 */
import thunkMiddleware from 'redux-thunk';
import {responsiveStoreEnhancer} from 'redux-responsive';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const middlewares = [
        // Add other middleware on this line...
        logger,
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        //reduxImmutableStateInvariant(),

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        //promise,
        thunkMiddleware
    ];

    const store = createStore(rootReducer,
            initialState,
            responsiveStoreEnhancer,
            composeEnhancers(applyMiddleware(...middlewares))
            );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
