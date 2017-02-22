import {SET_KASSENZEICHEN} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function kassenzeichenReducer(state = initialState.kassenzeichen, action) {
    let newState;
    switch (action.type) {
        case SET_KASSENZEICHEN: {
          newState=objectAssign({},state);
          let test=action.kassenzeichenObject;
          if (test) {
              newState=test;
          }
          return newState;
        }
        default:
            return state;
    }
}
