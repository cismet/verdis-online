import {SEARCH_BY_KASSENZEICHEN, SEARCH_BY_POINT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {MOCKDATA} from '../store/mockdata/mock';
 
 /**
  * A reducer (also called a reducing function) is a function that accepts an accumulation 
  * and a value and returns a new accumulation. They are used to reduce a collection of 
  * values down to a single value.
  * 
  * In Redux, the accumulated value is the state object, 
  * and the values being accumulated are actions. 
  */

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function kassenzeichenReducer(state = initialState.kassenzeichen, action) {
    let newState;
    switch (action.type) {
        case SEARCH_BY_KASSENZEICHEN: {
            newState=objectAssign({},state);
            // Reducers calculate a new state given the previous state and an action. 
            let test=MOCKDATA.get(action.kassenzeichen);
            if (test) {
                newState=test;
            }
            return newState;
        }
        case SEARCH_BY_POINT: {
             newState=objectAssign({},state);
            return newState;
        }
        default:
            return state;
    }
}