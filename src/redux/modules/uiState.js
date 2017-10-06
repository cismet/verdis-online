import objectAssign from 'object-assign';

import {
    VERSIEGELTE_FLAECHEN
} from '../../constants/appModes';
import {
    WAITING_TYPE_MESSAGE,
    WAITING_TYPE_ERROR,
    WAITING_TYPE_INFO
} from '../../constants/uiConstants';


///TYPES
export const types = {
    TOGGLE_INFO_ELEMENTS: 'UI_STATE/TOGGLE_INFO_ELEMENTS',
    TOGGLE_CHART_ELEMENTS: 'UI_STATE/TOGGLE_CHART_ELEMENTS',
    TOGGLE_KANAL_ELEMENTS: 'UI_STATE/TOGGLE_KANAL_ELEMENTS',
    TOGGLE_FILTER_ELEMENT: 'UI_STATE/TOGGLE_FILTER_ELEMENT',
    TOGGLE_DETAIL_ELEMENTS: 'UI_STATE/TOGGLE_DETAIL_ELEMENTS',
    CHANGE_LAYER_OPACITY: 'UI_STATE/CHANGE_LAYER_OPACITY',
    CHANGE_LAYER_ENABLED: 'UI_STATE/CHANGE_LAYER_ENABLED',
    SHOW_SETTINGS: 'UI_STATE/SHOW_SETTINGS',
    SHOW_WAITING: 'UI_STATE/SHOW_WAITING',
    SET_KASSENZEICHEN_SEARCH_IN_PROGRESS: 'UI_STATE/SET_KASSENZEICHEN_SEARCH_IN_PROGRESS',
    SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE: 'UI_STATE/SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE',
    SET_KASSENZEICHEN_TOSEARCH_FOR: 'UI_STATE/SET_KASSENZEICHEN_TOSEARCH_FOR',
    SCREEN_RESIZE: 'UI_STATE/SCREEN_RESIZE'
};


///INITIAL STATE
const initialState = {
    width: -1,
    height: -1,
    mainMode: VERSIEGELTE_FLAECHEN,
    infoElementsEnabled: true,
    chartElementsEnabled: true,
    kanalElementsEnabled: false,
    filterElementEnabled: false,
    detailElementsEnabled: true,

    settingsVisible: false,
    searchForKassenzeichenVisible: false,
    
    waitingVisible: false,
    waitingMessage: null,
    waitingType: WAITING_TYPE_MESSAGE,
    waitingUIAnimation: true,

    searchInProgress: false,
    kassenzeichenToSearchFor: null,
    layers: [{
            key: "ABK in Graustufen",
            opacity: 0.5,
            enabled: true
        },
        {
            key: "ABK in Farbe",
            opacity: 0.5,
            enabled: false
        },
        {
            key: "Luftbilder (NRW)",
            opacity: 0.5,
            enabled: false
        }
    ]
};


///REDUCER
export default function uiStateReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case types.SCREEN_RESIZE:
            {
                newState = objectAssign({}, state);
                newState.width = action.width;
                newState.height = action.height;
                return newState;
            }
        case types.TOGGLE_INFO_ELEMENTS:
            {
                newState = objectAssign({}, state);
                newState.infoElementsEnabled = !state.infoElementsEnabled;
                return newState;
            }
        case types.TOGGLE_CHART_ELEMENTS:
            {
                newState = objectAssign({}, state);
                newState.chartElementsEnabled = !state.chartElementsEnabled;

                return newState;
            }
        case types.TOGGLE_KANAL_ELEMENTS:
            {
                newState = objectAssign({}, state);
                newState.kanalElementsEnabled = !state.kanalElementsEnabled;

                return newState;
            }
        case types.TOGGLE_FILTER_ELEMENT:
            {
                newState = objectAssign({}, state);
                newState.filterElementEnabled = !state.filterElementEnabled;
                return newState;
            }
        case types.TOGGLE_DETAIL_ELEMENTS:
            {
                newState = objectAssign({}, state);
                newState.detailElementsEnabled = !state.detailElementsEnabled;
                return newState;
            }
        case types.SHOW_SETTINGS:
            {
                newState = objectAssign({}, state);
                newState.settingsVisible = action.visible;
                return newState;
            }
        case types.SET_KASSENZEICHEN_SEARCH_IN_PROGRESS:
            {
                newState = objectAssign({}, state);
                newState.searchInProgress = action.progress;
                return newState;
            }
        case types.SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE:
            {
                newState = objectAssign({}, state);
                newState.searchForKassenzeichenVisible = action.visible;
                return newState;
            }
        case types.SET_KASSENZEICHEN_TOSEARCH_FOR:
            {
                newState = objectAssign({}, state);
                newState.kassenzeichenToSearchFor = action.kassenzeichen;
                return newState;
            }
        case types.SHOW_WAITING:
            {
                newState = objectAssign({}, state);
                if (action.visible && state.waitingVisible) {
                    newState.waitingUIAnimation = false;
                } else {
                    newState.waitingUIAnimation = true;
                }
                newState.waitingVisible = action.visible;
                newState.waitingMessage = action.message;
                if (action.waitingtype != null) {
                    newState.waitingType = action.waitingtype;
                } else {
                    newState.waitingType = WAITING_TYPE_MESSAGE;
                }
                return newState;
            }
        case types.CHANGE_LAYER_OPACITY:
            {
                newState = JSON.parse(JSON.stringify(state));
                newState.layers.forEach((layer) => {
                    if (action.key === layer.key) {
                        layer.opacity = action.opacity;
                    }
                });
                return newState;
            }
        case types.CHANGE_LAYER_ENABLED:
            {
                newState = JSON.parse(JSON.stringify(state));
                newState.layers.forEach((layer) => {
                    if (action.key === layer.key) {
                        layer.enabled = !layer.enabled;
                    }
                });
                return newState;
            }
        default:
            return state;

    }
}



///SIMPLEACTIONCREATORS
function toggleInfoElements() {
    return {
        type: types.TOGGLE_INFO_ELEMENTS
    };
}

function toggleChartsElements() {
    return {
        type: types.TOGGLE_CHART_ELEMENTS
    };
}

function toggleKanalElements() {
    return {
        type: types.TOGGLE_KANAL_ELEMENTS
    };
}

function toggleFilterElements() {
    return {
        type: types.TOGGLE_FILTER_ELEMENT
    };
}

function toggleDetailsElements() {
    return {
        type: types.TOGGLE_DETAIL_ELEMENTS
    };
}

function showSettings(visible) {
    return {
        type: types.SHOW_SETTINGS,
        visible
    };
}

function setKassenzeichenSearchInProgress(progress) {
    return {
        type: types.SET_KASSENZEICHEN_SEARCH_IN_PROGRESS,
        progress
    };
}
function setKassenzeichenTextSearchVisible(visible) {
    return {
        type: types.SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE,
        visible
    };
}

function setKassenzeichenToSearchFor(kassenzeichen) {
    return {
        type: types.SET_KASSENZEICHEN_TOSEARCH_FOR,
        kassenzeichen
    };
}

function showWaiting(visible, message, waitingtype) {
    return {
        type: types.SHOW_WAITING,
        visible,
        message,
        waitingtype
    };
}

function showInfo(message) {
    return {
        type: types.SHOW_WAITING,
        visible: true,
        message,
        waitingtype: WAITING_TYPE_INFO
    };
}

function showError(message) {
    return {
        type: types.SHOW_WAITING,
        visible: true,
        message,
        waitingtype: WAITING_TYPE_ERROR
    };
}


function changeLayerOpacitySetting(key, opacity) {
    return {
        type: types.CHANGE_LAYER_OPACITY,
        key,
        opacity
    };
}
function changeLayerEnabledSetting(key, enabled) {
    return {
        type: types.CHANGE_LAYER_ENABLED,
        key,
        enabled
    };
}

function screenResize(height, width) {
    return {
        type: types.SCREEN_RESIZE,
        width: width,
        height: height,
    };
}

//COMPLEXACTIONS


//EXPORT ACTIONS

export const actions = {
    toggleInfoElements,
    toggleChartsElements,
    toggleKanalElements,
    toggleFilterElements,
    toggleDetailsElements,
    showSettings,
    setKassenzeichenSearchInProgress,
    setKassenzeichenTextSearchVisible,
    setKassenzeichenToSearchFor,
    showWaiting,
    showInfo,
    showError,
    changeLayerOpacitySetting,
    changeLayerEnabledSetting,
    screenResize,
};
