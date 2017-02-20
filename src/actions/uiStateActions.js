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
    return {
        type: actionTypes.SHOW_SETTINGS,
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