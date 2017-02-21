import * as types from '../constants/actionTypes';

export function toggleInfoElements() {
    return {
        type: types.TOGGLE_INFO_ELEMENTS
    };
}

export function toggleChartsElements() {
    return {
        type: types.TOGGLE_CHART_ELEMENTS
    };
}

export function toggleKanalElements() {
    return {
        type: types.TOGGLE_KANAL_ELEMENTS
    };
}

export function toggleFilterElements() {
    return {
        type: types.TOGGLE_FILTER_ELEMENT
    };
}

export function toggleDetailsElements() {
    return {
        type: types.TOGGLE_DETAIL_ELEMENTS
    };
}

export function showSettings(visible) {
    return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    console.log("showSettings: " + visible);
    setTimeout(() => {
        console.log("ASYNC showSettings: " + visible);
        return {
            type: types.SHOW_SETTINGS,
            visible
        };
    }, 1000);
  };
}

export function changeLayerOpacitySetting(key,opacity) {
    return {
        type: types.CHANGE_LAYER_OPACITY,
        key,
        opacity
    };
}
export function changeLayerEnabledSetting(key,enabled) {
    return {
        type: types.CHANGE_LAYER_ENABLED,
        key,
        enabled
    };
}