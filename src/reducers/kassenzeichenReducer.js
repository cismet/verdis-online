import {SEARCH_BY_KASSENZEICHEN, SEARCH_BY_POINT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
 import {MOCKDATA} from '../store/mockdata/mock';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function kassenzeichenReducer(state = initialState.kassenzeichen, action) {
    let newState;
    switch (action.type) {
        case SEARCH_BY_KASSENZEICHEN: {
            console.log("search for: "+action.kassenzeichen);
            newState=objectAssign({},state);
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