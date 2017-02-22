import * as actionTypes from '../constants/actionTypes';

export function toggleInfoElements() {
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

export function showSettings(visible) {
    return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    if (visible==true) {
      dispatch(showWaiting(true));
      setTimeout(() => {
          console.log("ASYNC showSettings: " + visible);
          dispatch(showSettingsImmediately(visible));
          dispatch(showWaiting(false));
      }, 1000);
    }
    else {
      dispatch(showSettingsImmediately(visible));
    }
  };

}

export function showSettingsImmediately(visible) {
    console.log("\\o/");
    return {
        type: actionTypes.SHOW_SETTINGS,
        visible
    };
}

export function showWaiting(visible) {
  return {
      type: actionTypes.SHOW_WAITING,
      visible
  };

}



export function changeLayerOpacitySetting(key,opacity) {
    return {
        type: actionTypes.CHANGE_LAYER_OPACITY,
        key,
        opacity
    };
}
export function changeLayerEnabledSetting(key,enabled) {
    return {
        type: actionTypes.CHANGE_LAYER_ENABLED,
        key,
        enabled
    };
}
