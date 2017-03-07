import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {
  responsiveStoreEnhancer
} from 'redux-responsive';

export default function configureStore(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(rootReducer, initialState, composeEnhancers(responsiveStoreEnhancer,
    applyMiddleware(...middlewares)
  ));
}
