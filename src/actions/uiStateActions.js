import * as actionTypes from '../constants/actionTypes';


/**
 * An action creator is, quite simply, a function that creates an action. 
 * Do not confuse the two terms—again, an action is a payload of information, 
 * and an action creator is a factory that creates an action.
 * 
 * @return {toggleInfoElements.uiStateActionsAnonym$0}
 */
export function toggleInfoElements() {
    /**
     * An action is a plain object that represents an intention to change the state.
     * ctions must have a type field that indicates the type of action being performed. 
     * Types can be defined as constants and imported from another module. 
     */
    return {
        type: actionTypes.TOGGLE_INFO_ELEMENTS
    };
}

export function toggleChartsElements() {
    return {
        type: actionTypes.TOGGLE_CHART_ELEMENTS
    };
}

export function toggleKanalElements() {
    return {
        type: actionTypes.TOGGLE_KANAL_ELEMENTS
    };
}

export function toggleFilterElements() {
    return {
        type: actionTypes.TOGGLE_FILTER_ELEMENT
    };
}

export function toggleDetailsElements() {
    return {
        type: actionTypes.TOGGLE_DETAIL_ELEMENTS
    };
}

/*export function showSettings(visible) {
 return {
 type: actionTypes.SHOW_SETTINGS,
 visible
 };
 }*/

/**
 * 
 * @param {type} visible
 * @return {showSettings.uiStateActionsAnonym$14}
 * 
 * Parenthesize the body to return an object literal expression:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 */
export const showSettings = (visible) => ({
        type: actionTypes.SHOW_SETTINGS,
        visible
    });

/*export function showSettingsWithTimeout() {
  return function (dispatch) {
    console.log("TERROR");
    dispatch(showSettings(true));
    setTimeout(() => {
      dispatch(showSettings(false));
    }, 5000);
  };
}*/

/**
 * Same as above as arrow function
 * 
 * @return {Function}
 */
/*export const showSettingsWithTimeout = () => dispatch => {
    console.log("TERROR");
  dispatch(showSettings(true));
  setTimeout(() => {
      dispatch(showSettings(false));
    }, 5000);
};*/

export function saveFuelSavings() {
  return dispatch => {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    setTimeout(() => {
     console.log("SAVED ....");
    }, 1000);
  };
}

export function showSettingsWithTimeout() {
    return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    console.log("SAVED");
    dispatch(showSettings(true));
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      
      console.log("WTF");
      dispatch(showSettings(false));
    }, 1000);
  };
}

export function changeLayerOpacitySetting(key, opacity) {
    return {
        type: actionTypes.CHANGE_LAYER_OPACITY,
        key,
        opacity
    };
}

export function changeLayerEnabledSetting(key, enabled) {
    return {
        type: actionTypes.CHANGE_LAYER_ENABLED,
        key,
        enabled
    };
}

 const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
 
 function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      console.log("WTF");
      dispatch(increment());
    }, 1000);
  };
}