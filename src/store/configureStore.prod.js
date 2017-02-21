import {createStore, compose, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {responsiveStoreEnhancer} from 'redux-responsive';

export default function configureStore(initialState) {
  const middewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
    promise
  ];

  return createStore(rootReducer, initialState, responsiveStoreEnhancer, compose(
    applyMiddleware(...middewares)
    )
  );
}
