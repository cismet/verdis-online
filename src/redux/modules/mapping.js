import objectAssign from 'object-assign';

import {
    getFlaechenFeatureCollection
} from '../../utils/kassenzeichenMappingTools';

import L from 'leaflet';
import 'proj4leaflet';



///TYPES
export const types = {
    SHOW_KASSENZEICHEN: 'MAPPING/SHOW_KASSENZEICHEN',
    FIT_BOUNDS: 'MAPPING/FIT_BOUNDS'

}


///INITIAL STATE
const initialState = {
    featureCollection: [],
    bounds: null,
    boundsFittingEnabled: false
};


///REDUCER

export default function mappingReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case types.SHOW_KASSENZEICHEN:
            {
                newState = objectAssign({}, state);
                if (action.kassenzeichenObject.id !== -1) {
                    const fc = getFlaechenFeatureCollection(action.kassenzeichenObject);
                    const projectedFc = L.Proj.geoJson(fc);
                    const b = projectedFc.getBounds();
                    newState.featureCollection = fc;
                    newState.bounds = b;
                    newState.boundsFittingEnabled = action.boundsFittingEnabled;
                } else {
                    newState.featureCollection = [];
                    newState.bounds = null;
                }
                return newState;
            }
        case types.FIT_BOUNDS:
            {
                newState = objectAssign({}, state);
                newState.boundsFittingEnabled = action.boundsFittingEnabled;
                return newState;
            }
        default:
            return state;
    }
}

///SIMPLEACTIONCREATORS

function internalShowKassenzeichenObject(kassenzeichenObject, skipFitBounds) {
    return {
        type: types.SHOW_KASSENZEICHEN,
        kassenzeichenObject,
        boundsFittingEnabled: !skipFitBounds
    };
}

function setBoundsFittingEnabled(boundsFittingEnabled) {
    return {
        type: types.FIT_BOUNDS,
        boundsFittingEnabled
    };
}

//COMPLEXACTIONS

function showKassenzeichenObject(kassenzeichenObject, skipFitBounds) {
    return function (dispatch) {
        dispatch(internalShowKassenzeichenObject(kassenzeichenObject, skipFitBounds));
        dispatch(setBoundsFittingEnabled(false));
    }
}


function fitBounds() {
    return function (dispatch, getState) {
        const state = getState();
        dispatch(showKassenzeichenObject(state.kassenzeichen, false));
    };
}
//EXPORT ACTIONS

export const actions = {
    internalShowKassenzeichenObject,
    setBoundsFittingEnabled,
    showKassenzeichenObject,
    fitBounds
};
