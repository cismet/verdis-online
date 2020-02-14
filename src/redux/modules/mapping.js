import objectAssign from 'object-assign';

import L from 'leaflet';

///TYPES
export const types = {
	SHOW_KASSENZEICHEN: 'MAPPING/SHOW_KASSENZEICHEN',
	FIT_BOUNDS: 'MAPPING/FIT_BOUNDS',

	MAP_BOUNDING_BOX_CHANGED: 'MAPPING/MAP_BOUNDING_BOX_CHANGED',
	FEATURE_COLLECTION_CHANGED: 'MAPPING/FEATURE_COLLECTION_CHANGED',
	FEATURE_SELECTION_INDEX_CHANGED: 'MAPPING/FEATURE_SELECTION_INDEX_CHANGED',
	SET_AUTO_FIT: 'MAPPING/SET_AUTO_FIT',
	GAZETTEER_HIT: 'MAPPING/GAZETTEER_HIT',
	SET_BACKGROUND_INDEX: 'MAPPING/SET_BACKGROUND_INDEX'
};
export const constants = {
	AUTO_FIT_MODE_STRICT: 'MAPPING/AUTO_FIT_MODE_STRICT',
	AUTO_FIT_MODE_NO_ZOOM_IN: 'MAPPING/AUTO_FIT_MODE_NO_ZOOM_IN'
};

///INITIAL STATE
// const initialState = {
//     featureCollection: [],
//     bounds: null,
//     boundsFittingEnabled: false
// };

const initialState = {
	featureCollection: [],
	selectedIndex: null,
	boundingBox: null,
	autoFitBoundsTarget: null,
	autoFitBounds: false,
	searchInProgress: false,
	gazetteerHit: null,

	selectedBackgroundIndex: 2,

	backgrounds: [
		{
			layerkey: 'bplan_abkg@30|wupp-plan-live@20',
			src: '/images/mapPreviewABK.png',
			title: 'Top. Karte'
		},
		{
			layerkey: 'trueOrtho2018@50|rvrSchrift@100|wupp-plan-live@20',
			src: '/images/mapPreviewOrtho.png',
			title: 'Luftbildkarte'
		},
		{
			layerkey: 'wupp-plan-live@40',
			src: '/images/mapPreviewCitymap.png',
			title: 'Stadtplan'
		}
	]
};

///REDUCER

// export default function mappingReducer(state = initialState, action) {
//     let newState;
//     switch (action.type) {
//         case types.SHOW_KASSENZEICHEN:
//             {
//                 newState = objectAssign({}, state);
//                 if (action.kassenzeichenObject.id !== -1) {
//                     const fc = getFlaechenFeatureCollection(action.kassenzeichenObject);
//                     const projectedFc = L.Proj.geoJson(fc);
//                     const b = projectedFc.getBounds();
//                     newState.featureCollection = fc;
//                     newState.bounds = b;
//                     newState.boundsFittingEnabled = action.boundsFittingEnabled;
//                 } else {
//                     newState.featureCollection = [];
//                     newState.bounds = null;
//                 }
//                 return newState;
//             }
//         case types.FIT_BOUNDS:
//             {
//                 newState = objectAssign({}, state);
//                 newState.boundsFittingEnabled = action.boundsFittingEnabled;
//                 return newState;
//             }
//         default:
//             return state;
//     }
// }

export default function mappingReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case types.MAP_BOUNDING_BOX_CHANGED: {
			newState = objectAssign({}, state);
			newState.boundingBox = action.bbox;
			return newState;
		}
		case types.FEATURE_COLLECTION_CHANGED: {
			newState = objectAssign({}, state);
			newState.featureCollection = action.featureCollection;
			newState.selectedIndex = 0;
			return newState;
		}
		case types.FEATURE_SELECTION_INDEX_CHANGED: {
			newState = JSON.parse(JSON.stringify(state));
			for (let feature of newState.featureCollection) {
				feature.selected = false;
			}
			if (typeof action.index !== undefined && action.index !== null) {
				newState.featureCollection[action.index].selected = true;
			}
			newState.selectedIndex = action.index;
			return newState;
		}
		case types.SET_AUTO_FIT: {
			newState = objectAssign({}, state);
			newState.autoFitBounds = action.autofit;
			newState.autoFitMode = action.mode;
			newState.autoFitBoundsTarget = action.bounds;
			return newState;
		}

		case types.GAZETTEER_HIT: {
			newState = objectAssign({}, state);
			newState.gazetteerHit = action.hit;
			return newState;
		}
		case types.SET_BACKGROUND_INDEX: {
			newState = objectAssign({}, state);
			newState.selectedBackgroundIndex = action.selectedBackgroundIndex;
			return newState;
		}

		default:
			return state;
	}
}

///SIMPLEACTIONCREATORS

// function internalShowKassenzeichenObject(kassenzeichenObject, skipFitBounds) {
//     return {
//         type: types.SHOW_KASSENZEICHEN,
//         kassenzeichenObject,
//         boundsFittingEnabled: !skipFitBounds
//     };
// }

// function setBoundsFittingEnabled(boundsFittingEnabled) {
//     return {
//         type: types.FIT_BOUNDS,
//         boundsFittingEnabled
//     };
// }

function mappingBoundsChanged(bbox) {
	return {
		type: types.MAP_BOUNDING_BOX_CHANGED,
		bbox
	};
}

function setFeatureCollection(featureCollection) {
	return {
		type: types.FEATURE_COLLECTION_CHANGED,
		featureCollection
	};
}

function setSelectedFeatureIndex(index) {
	return {
		type: types.FEATURE_SELECTION_INDEX_CHANGED,
		index
	};
}

function setSelectedFeatureIndexWithSelector(selector) {
	return function(dispatch, getState) {
		const featureCollection = getState().mapping.featureCollection;
		for (let i = 0, l = featureCollection.length; i < l; i++) {
			if (selector(featureCollection[i])) {
				dispatch(setSelectedFeatureIndex(i));
				break;
			}
		}
	};
}

// export function setSearchProgressIndicator(inProgress) {
//     return {
//         type: types.SET_SEARCH_PROGRESS_INDICATOR,
//         inProgress
//     };
// }

function setAutoFit(autofit, bounds, mode) {
	return {
		type: types.SET_AUTO_FIT,
		autofit,
		bounds,
		mode
	};
}

function gazetteerHit(hit) {
	return {
		type: types.GAZETTEER_HIT,
		hit
	};
}

function setSelectedBackgroundIndex(selectedBackgroundIndex) {
	return {
		type: types.SET_BACKGROUND_INDEX,
		selectedBackgroundIndex
	};
}

//COMPLEXACTIONS

// function showKassenzeichenObject(kassenzeichenObject, skipFitBounds) {
//     return function (dispatch) {
//         dispatch(internalShowKassenzeichenObject(kassenzeichenObject, skipFitBounds));
//         dispatch(setBoundsFittingEnabled(false));
//     }
// }

// function fitBounds() {
//     return function (dispatch, getState) {
//         const state = getState();
//         dispatch(showKassenzeichenObject(state.kassenzeichen, false));
//     };
// }

function fitSelectedFeatureBounds(mode) {
	return function(dispatch, getState) {
		const currentState = getState();
		dispatch(
			fitFeatureBounds(
				currentState.mapping.featureCollection[currentState.mapping.selectedIndex],
				mode
			)
		);
	};
}

function fitFeatureBounds(feature, mode) {
	return function(dispatch) {
		const projectedF = L.Proj.geoJson(feature);
		const bounds = projectedF.getBounds();
		dispatch(setAutoFit(true, bounds, mode));
	};
}

function fitAll() {
	return function(dispatch, getState) {
		const currentState = getState();
		dispatch(fitFeatureCollection(currentState.mapping.featureCollection));
	};
}

function fitFeatureCollection(features) {
	return function(dispatch) {
		const projectedFC = L.Proj.geoJson(features);
		const bounds = projectedFC.getBounds();
		dispatch(setAutoFit(true, bounds, constants.AUTO_FIT_MODE_STRICT));
	};
}

//EXPORT ACTIONS

// internalShowKassenzeichenObject,
// setBoundsFittingEnabled,
// showKassenzeichenObject,
// fitBounds

export const actions = {
	mappingBoundsChanged,
	setFeatureCollection,
	setSelectedFeatureIndex,
	setSelectedFeatureIndexWithSelector,
	setAutoFit,
	gazetteerHit,
	fitSelectedFeatureBounds,
	fitFeatureBounds,
	fitAll,
	fitFeatureCollection,
	setSelectedBackgroundIndex
};
