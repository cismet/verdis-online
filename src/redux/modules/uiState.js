import objectAssign from 'object-assign';

import {
	WAITING_TYPE_MESSAGE,
	WAITING_TYPE_ERROR,
	WAITING_TYPE_INFO,
	appModes as APP_MODES
} from '../../constants/uiConstants';

///TYPES
export const types = {
	TOGGLE_INFO_ELEMENTS: 'UI_STATE/TOGGLE_INFO_ELEMENTS',
	TOGGLE_CHART_ELEMENTS: 'UI_STATE/TOGGLE_CHART_ELEMENTS',
	TOGGLE_KANAL_ELEMENTS: 'UI_STATE/TOGGLE_KANAL_ELEMENTS',
	TOGGLE_FILTER_ELEMENT: 'UI_STATE/TOGGLE_FILTER_ELEMENT',
	TOGGLE_DETAIL_ELEMENTS: 'UI_STATE/TOGGLE_DETAIL_ELEMENTS',
	TOGGLE_CONTACT_ELEMENT: 'UI_STATE/TOGGLE_CONTACT_ELEMENT',
	CHANGE_LAYER_OPACITY: 'UI_STATE/CHANGE_LAYER_OPACITY',
	CHANGE_LAYER_ENABLED: 'UI_STATE/CHANGE_LAYER_ENABLED',
	SHOW_SETTINGS: 'UI_STATE/SHOW_SETTINGS',
	SHOW_CHANGE_REQUESTS: 'UI_STATE/SHOW_CHANGE_REQUESTS',
	SHOW_WAITING: 'UI_STATE/SHOW_WAITING',
	SET_KASSENZEICHEN_SEARCH_IN_PROGRESS: 'UI_STATE/SET_KASSENZEICHEN_SEARCH_IN_PROGRESS',
	SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE: 'UI_STATE/SET_KASSENZEICHEN_TEXTSEARCH_VISIBLE',
	SET_KASSENZEICHEN_TOSEARCH_FOR: 'UI_STATE/SET_KASSENZEICHEN_TOSEARCH_FOR',
	SCREEN_RESIZE: 'UI_STATE/SCREEN_RESIZE',
	SET_MODE: 'UI_STATE/SET_MODE',
	SET_D3_AVAILABILITY: 'UI_STATE/SET_D3_AVAILABILITY',
	SET_STAC_INPUT: 'UI_STATE/SET_STAC_INPUT',
	SET_FEB_BLOB: 'UI_STATE/SET_FEB_BLOB',
	SET_WAIT4FEB: 'UI_STATE/SET_WAIT4FEB',
	SET_APPLICATION_MENU_ACTIVE_KEY: 'UISTATE/SET_APPLICATION_MENU_ACTIVE_KEY'
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
	changeRequestsEditMode: true,

	applicationMenuVisible: false,
	applicationMenuActiveKey: 'none',

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
			key: 'ABK in Graustufen',
			opacity: 0.5,
			enabled: true
		},
		{
			key: 'ABK in Farbe',
			opacity: 0.5,
			enabled: false
		},
		{
			key: 'Luftbilder (NRW)',
			opacity: 0.5,
			enabled: false
		}
	],

	stacInput: '',

	febBlob: null,
	waitForFEB: false
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
			newState.layers.forEach((layer) => {
				if (action.key === layer.key) {
					layer.opacity = action.opacity;
				}
			});
			return newState;
		}
		case types.CHANGE_LAYER_ENABLED: {
			newState = JSON.parse(JSON.stringify(state));
			newState.layers.forEach((layer) => {
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
		height: height
	};
}
function setMode(mode) {
	return {
		type: types.SET_MODE,
		mode: mode
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

//COMPLEXACTIONS

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
	setKassenzeichenSearchInProgress,
	setKassenzeichenTextSearchVisible,
	setKassenzeichenToSearchFor,
	showWaiting,
	showInfo,
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
	setApplicationMenuActiveKey
};
