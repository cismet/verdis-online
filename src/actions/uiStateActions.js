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
    return {
        type: types.SHOW_SETTINGS,
        visible
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