import objectAssign from "object-assign";

import {
    WAITING_TYPE_MESSAGE,
    WAITING_TYPE_ERROR,
    WAITING_TYPE_INFO,
    appModes as APP_MODES
} from "../../constants/uiConstants";

///TYPES
export const types = {
    TOGGLE_INFO_ELEMENTS: "UI_STATE/TOGGLE_INFO_ELEMENTS",
    TOGGLE_CHART_ELEMENTS: "UI_STATE/TOGGLE_CHART_ELEMENTS",
    TOGGLE_KANAL_ELEMENTS: "UI_STATE/TOGGLE_KANAL_ELEMENTS",
    TOGGLE_FILTER_ELEMENT: "UI_STATE/TOGGLE_FILTER_ELEMENT",
    TOGGLE_DETAIL_ELEMENTS: "UI_STATE/TOGGLE_DETAIL_ELEMENTS",
    TOGGLE_CONTACT_ELEMENT: "UI_STATE/TOGGLE_CONTACT_ELEMENT",
    CHANGE_LAYER_OPACITY: "UI_STATE/CHANGE_LAYER_OPACITY",
    CHANGE_LAYER_ENABLED: "UI_STATE/CHANGE_LAYER_ENABLED",
    SHOW_SETTINGS: "UI_STATE/SHOW_SETTINGS",
    SHOW_CHANGE_REQUESTS: "UI_STATE/SHOW_CHANGE_REQUESTS",
    SHOW_CHANGE_REQUESTS_EDIT_UI: "UI_STATE/SHOW_CHANGE_REQUESTS_EDIT_UI",
    SET_CHANGE_REQUESTS_EDIT_MODE: "SET_CHANGE_REQUESTS_EDIT_MODE",
    SET_CHANGE_REQUESTS_EDIT_UI_FLAECHE_AND_CR:
        "UI_STATE/SET_CHANGE_REQUESTS_EDIT_UI_FLAECHE_AND_CR",

    SHOW_WAITING: "UI_STATE/SHOW_WAITING",
    SET_KASSENZEICHEN_SEARCH_IN_PROGRESS: "UI_STATE/SET_KASSENZEICHEN_SEARCH_IN_PROGRESS",
    SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE: "UI_STATE/SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE",
    SET_KASSENZEICHEN_TOSEARCH_FOR: "UI_STATE/SET_KASSENZEICHEN_TOSEARCH_FOR",
    SCREEN_RESIZE: "UI_STATE/SCREEN_RESIZE",
    SET_MODE: "UI_STATE/SET_MODE",
    SET_D3_AVAILABILITY: "UI_STATE/SET_D3_AVAILABILITY",
    SET_STAC_INPUT: "UI_STATE/SET_STAC_INPUT",
    SET_FEB_BLOB: "UI_STATE/SET_FEB_BLOB",
    SET_WAIT4FEB: "UI_STATE/SET_WAIT4FEB",
    SET_APPLICATION_MENU_ACTIVE_KEY: "UISTATE/SET_APPLICATION_MENU_ACTIVE_KEY",
    SET_CLOUD_STORAGE_STATUS: "UISTATE/SET_CLOUD_STORAGE_STATUS",

    SHOW_CHANGE_REQUESTS_ANNOTATION_EDIT_UI: "UI_STATE/SHOW_CHANGE_REQUESTS_ANNOTATION_EDIT_UI",
    SET_CHANGE_REQUESTS_ANNOTATION_EDIT_UI_ANNOTATION_AND_CR:
        "UI_STATE/SET_CHANGE_REQUESTS_ANNOTATION_EDIT_UI_ANNOTATION_AND_CR",
    SET_ERROR: "UI_STATE/SET_ERROR",
    SET_ERROR_MESSAGES: "UI_STATE/SET_ERROR_MESSAGES",
    SET_CONF_DATA: "UI_STATE/SET_CONF_DATA",
    SET_HINT_VISIBLE: "UI_STATE/SET_HINT_VISIBLE"
};

export const CLOUDSTORAGESTATES = {
    CLOUD_STORAGE_UP: "CLOUD_STORAGE_UP",
    CLOUD_STORAGE_DOWN: "CLOUD_STORAGE_DOWN",
    CLOUD_STORAGE_ERROR: "CLOUD_STORAGE_ERROR"
};

///INITIAL STATE
const initialState = {
    width: -1,
    height: -1,
    mainMode: APP_MODES.VERSIEGELTE_FLAECHEN,
    mode: APP_MODES.VERSIEGELTE_FLAECHEN,
    infoElementsEnabled: true,
    chartElementsEnabled: true,
    kanalElementsEnabled: false,
    filterElementEnabled: false,
    detailElementsEnabled: true,
    contactElementEnabled: true,

    settingsVisible: false,
    changeRequestsMenuVisible: false,
    changeRequestsEditMode: false,
    changeRequestDisplayMode: "cr",

    changeRequestEditViewVisible: false,
    changeRequestEditViewFlaeche: {},
    changeRequestEditViewCR: {},

    changeRequestAnnotationEditViewVisible: false,
    changeRequestAnnotationEditViewAnnotation: {},
    changeRequestAnnotationEditViewCR: {},

    applicationMenuVisible: false,
    applicationMenuActiveKey: "none",

    searchForKassenzeichenVisible: false,

    waitingVisible: false,
    waitingMessage: null,
    waitingType: WAITING_TYPE_MESSAGE,
    waitingUIAnimation: true,

    d3Available: false,

    searchInProgress: false,
    kassenzeichenToSearchFor: null,
    layers: [
        {
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
    ],

    stacInput: "",

    febBlob: null,
    waitForFEB: false,

    cloudStorageStatus: undefined, //CLOUDSTORAGESTATES.CLOUD_STORAGE_UP,
    cloudStorageStatusMessages: [],
    catchedError: undefined,
    catchedErrorCause: undefined,
    localErrorMessages: [],
    confData: undefined,
    hintVisible: true
};

///REDUCER
export default function uiStateReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case types.SCREEN_RESIZE: {
            newState = objectAssign({}, state);
            newState.width = action.width;
            newState.height = action.height;
            return newState;
        }
        case types.SET_ERROR: {
            newState = objectAssign({}, state);
            newState.catchedError = action.catchedError;
            newState.catchedErrorCause = action.catchedErrorCause;
            return newState;
        }
        case types.TOGGLE_INFO_ELEMENTS: {
            newState = objectAssign({}, state);
            newState.infoElementsEnabled = !state.infoElementsEnabled;
            return newState;
        }
        case types.TOGGLE_CHART_ELEMENTS: {
            newState = objectAssign({}, state);
            newState.chartElementsEnabled = !state.chartElementsEnabled;

            return newState;
        }
        case types.TOGGLE_KANAL_ELEMENTS: {
            newState = objectAssign({}, state);
            newState.kanalElementsEnabled = !state.kanalElementsEnabled;

            return newState;
        }
        case types.TOGGLE_FILTER_ELEMENT: {
            newState = objectAssign({}, state);
            newState.filterElementEnabled = !state.filterElementEnabled;
            return newState;
        }
        case types.TOGGLE_DETAIL_ELEMENTS: {
            newState = objectAssign({}, state);
            newState.detailElementsEnabled = !state.detailElementsEnabled;
            return newState;
        }
        case types.TOGGLE_CONTACT_ELEMENT: {
            newState = objectAssign({}, state);
            newState.contactElementEnabled = !state.contactElementEnabled;
            return newState;
        }
        case types.SHOW_SETTINGS: {
            newState = objectAssign({}, state);
            newState.settingsVisible = action.visible;
            newState.applicationMenuVisible = action.visible;
            return newState;
        }
        case types.SHOW_CHANGE_REQUESTS: {
            newState = objectAssign({}, state);
            newState.changeRequestsMenuVisible = action.visible;
            return newState;
        }

        case types.SHOW_CHANGE_REQUESTS_EDIT_UI: {
            newState = objectAssign({}, state);
            newState.changeRequestEditViewVisible = action.visible;
            return newState;
        }
        case types.SET_CHANGE_REQUESTS_EDIT_UI_FLAECHE_AND_CR: {
            newState = objectAssign({}, state);
            newState.changeRequestEditViewFlaeche = action.flaeche;
            newState.changeRequestEditViewCR = action.cr;
            return newState;
        }
        case types.SHOW_CHANGE_REQUESTS_ANNOTATION_EDIT_UI: {
            newState = objectAssign({}, state);
            newState.changeRequestAnnotationEditViewVisible = action.visible;
            return newState;
        }
        case types.SET_CHANGE_REQUESTS_ANNOTATION_EDIT_UI_ANNOTATION_AND_CR: {
            newState = objectAssign({}, state);
            newState.changeRequestAnnotationEditViewAnnotation = action.annotation;
            newState.changeRequestAnnotationEditViewCR = action.cr;
            return newState;
        }
        case types.SET_CHANGE_REQUESTS_EDIT_MODE: {
            newState = objectAssign({}, state);
            newState.changeRequestsEditMode = action.inEditMode;
            return newState;
        }
        case types.SET_KASSENZEICHEN_SEARCH_IN_PROGRESS: {
            newState = objectAssign({}, state);
            newState.searchInProgress = action.progress;
            return newState;
        }
        case types.SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE: {
            newState = objectAssign({}, state);
            newState.searchForKassenzeichenVisible = action.visible;
            return newState;
        }
        case types.SET_KASSENZEICHEN_TOSEARCH_FOR: {
            newState = objectAssign({}, state);
            newState.kassenzeichenToSearchFor = action.kassenzeichen;
            return newState;
        }
        case types.SHOW_WAITING: {
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
        case types.CHANGE_LAYER_OPACITY: {
            newState = JSON.parse(JSON.stringify(state));
            newState.layers.forEach(layer => {
                if (action.key === layer.key) {
                    layer.opacity = action.opacity;
                }
            });
            return newState;
        }
        case types.CHANGE_LAYER_ENABLED: {
            newState = JSON.parse(JSON.stringify(state));
            newState.layers.forEach(layer => {
                if (action.key === layer.key) {
                    layer.enabled = !layer.enabled;
                }
            });
            return newState;
        }
        case types.SET_MODE: {
            newState = objectAssign({}, state);
            newState.mode = action.mode;
            return newState;
        }
        case types.SET_D3_AVAILABILITY: {
            newState = objectAssign({}, state);
            newState.d3Available = action.available;
            return newState;
        }
        case types.SET_STAC_INPUT: {
            newState = objectAssign({}, state);
            newState.stacInput = action.input;
            return newState;
        }
        case types.SET_FEB_BLOB: {
            newState = objectAssign({}, state);
            newState.febBlob = action.febBlob;
            return newState;
        }
        case types.SET_WAIT4FEB: {
            newState = objectAssign({}, state);
            newState.waitForFEB = action.waitForFEB;
            return newState;
        }
        case types.SET_APPLICATION_MENU_ACTIVE_KEY: {
            newState = objectAssign({}, state);
            newState.applicationMenuActiveKey = action.key;
            return newState;
        }
        case types.SET_CLOUD_STORAGE_STATUS: {
            newState = objectAssign({}, state);
            newState.cloudStorageStatus = action.status;
            if (action.message !== undefined) {
                newState.cloudStorageStatusMessages.push(action.message);
            }
            return newState;
        }
        case types.SET_ERROR_MESSAGES: {
            newState = objectAssign({}, state);
            newState.localErrorMessages = action.errorMessages;
            return newState;
        }
        case types.SET_CONF_DATA: {
            newState = objectAssign({}, state);
            newState.confData = action.confData;
            return newState;
        }
        case types.SET_HINT_VISIBLE: {
            newState = objectAssign({}, state);
            newState.hintVisible = action.visible;
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

function toggleContactElement() {
    return {
        type: types.TOGGLE_CONTACT_ELEMENT
    };
}
function showApplicationMenu(visible) {
    return {
        type: types.SHOW_SETTINGS,
        visible
    };
}

function showSettings(visible) {
    return {
        type: types.SHOW_SETTINGS,
        visible
    };
}

function showChangeRequestsMenu(visible) {
    return {
        type: types.SHOW_CHANGE_REQUESTS,
        visible
    };
}
function showChangeRequestsEditView(visible) {
    return {
        type: types.SHOW_CHANGE_REQUESTS_EDIT_UI,
        visible
    };
}
function setChangeRequestsEditViewFlaecheAndCR(flaeche, cr) {
    return {
        type: types.SET_CHANGE_REQUESTS_EDIT_UI_FLAECHE_AND_CR,
        flaeche,
        cr
    };
}
function showChangeRequestsAnnotationEditView(visible) {
    return {
        type: types.SHOW_CHANGE_REQUESTS_ANNOTATION_EDIT_UI,
        visible
    };
}
function setChangeRequestsAnnotationEditViewAnnotationAndCR(annotation, cr) {
    return {
        type: types.SET_CHANGE_REQUESTS_ANNOTATION_EDIT_UI_ANNOTATION_AND_CR,
        annotation,
        cr
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
function hideInfo() {
    return {
        type: types.SHOW_WAITING,
        visible: false
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
        height: height
    };
}
function setMode(mode) {
    return {
        type: types.SET_MODE,
        mode: mode
    };
}
function setError(catchedError, catchedErrorCause) {
    return {
        type: types.SET_ERROR,
        catchedError,
        catchedErrorCause
    };
}
function setD3Availability(available) {
    return {
        type: types.SET_D3_AVAILABILITY,
        available: available
    };
}
function setStacInput(input) {
    return {
        type: types.SET_STAC_INPUT,
        input
    };
}
function setFebBlob(febBlob) {
    return {
        type: types.SET_FEB_BLOB,
        febBlob
    };
}

function setWaitForFEB(waitForFEB) {
    return {
        type: types.SET_WAIT4FEB,
        waitForFEB
    };
}

function setApplicationMenuActiveKey(key) {
    return {
        type: types.SET_APPLICATION_MENU_ACTIVE_KEY,
        key
    };
}

function setChangeRequestInEditMode(inEditMode) {
    return {
        type: types.SET_CHANGE_REQUESTS_EDIT_MODE,
        inEditMode
    };
}

function setCloudStorageStatus(status, msg) {
    return {
        type: types.SET_CLOUD_STORAGE_STATUS,
        status,
        msg
    };
}
function setErrorMessages(errorMessages) {
    return {
        type: types.SET_ERROR_MESSAGES,
        errorMessages
    };
}
function setHintVisible(visible) {
    return {
        type: types.SET_HINT_VISIBLE,
        visible
    };
}

//COMPLEXACTIONS
function addLocalErrorMessage(message) {
    return function(dispatch, getState) {
        const state = getState();
        const errorMessages = JSON.parse(JSON.stringify(state.uiState.localErrorMessages));
        errorMessages.push(message);
        dispatch(setErrorMessages(errorMessages));
    };
}
function showCREditUI(flaeche, cr) {
    return function(dispatch, getState) {
        dispatch(setChangeRequestsEditViewFlaecheAndCR(flaeche, cr));
        dispatch(showChangeRequestsEditView(true));
    };
}
function showCRAnnotationEditUI(annotation, cr) {
    return function(dispatch, getState) {
        dispatch(setChangeRequestsAnnotationEditViewAnnotationAndCR(annotation, cr));
        dispatch(showChangeRequestsAnnotationEditView(true));
    };
}

//EXPORT ACTIONS

export const actions = {
    toggleInfoElements,
    toggleChartsElements,
    toggleKanalElements,
    toggleFilterElements,
    toggleDetailsElements,
    toggleContactElement,
    showSettings,
    showChangeRequestsMenu,
    showChangeRequestsEditView,
    setChangeRequestsEditViewFlaecheAndCR,
    setKassenzeichenSearchInProgress,
    setKassenzeichenTextSearchVisible,
    setKassenzeichenToSearchFor,
    showWaiting,
    showInfo,
    hideInfo,
    showError,
    changeLayerOpacitySetting,
    changeLayerEnabledSetting,
    screenResize,
    setMode,
    setD3Availability,
    setStacInput,
    setFebBlob,
    setWaitForFEB,
    showApplicationMenu,
    setApplicationMenuActiveKey,
    showCREditUI,
    setChangeRequestInEditMode,
    setCloudStorageStatus,
    showChangeRequestsAnnotationEditView,
    setChangeRequestsAnnotationEditViewAnnotationAndCR,
    showCRAnnotationEditUI,
    setError,
    setErrorMessages,
    addLocalErrorMessage,
    setHintVisible
};
