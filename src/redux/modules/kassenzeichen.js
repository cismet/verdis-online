import objectAssign from 'object-assign';
import {
    SERVICE,
    DOMAIN
} from '../../constants/cids';

import { actions as UiStateActions } from './uiState';
import { actions as AuthActions } from './auth';
import { actions as MappingActions } from './mapping';
import { routerActions as RoutingActions } from 'react-router-redux';
import {
    getFlaechenFeatureCollection
} from '../../utils/kassenzeichenMappingTools';
import {
    changeKassenzeichenInLocation
} from '../../utils/routingHelper';




///TYPES
export const types = {
    SET_KASSENZEICHEN: 'KASSENZEICHEN/SET_KASSENZEICHEN'
}


///INITIAL STATE
const initialState = {
    id: -1
};



///REDUCER
export default function kassenzeichenReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case types.SET_KASSENZEICHEN:
            {
                newState = objectAssign({}, state);
                let test = action.kassenzeichenObject;
                if (test) {
                    newState = test;
                }
                return newState;
            }
        default:
            return state;
    }
}



///SIMPLEACTIONCREATORS
function setKassenzeichenObject(kassenzeichenObject) {
    return {
        type: types.SET_KASSENZEICHEN,
        kassenzeichenObject
    };

}


//ACTIONS
function searchByKassenzeichenId(kassenzeichenId, fitBounds) {
    console.log("searchByKassenzeichenId.fitBounds"+fitBounds)
    return function (dispatch, getState) {
        dispatch(UiStateActions.showWaiting(true, "Kassenzeichen laden ..."));
        const state = getState();
        let username = state.auth.user;
        let pass = state.auth.password;
        fetch(SERVICE + '/VERDIS_GRUNDIS.KASSENZEICHEN/' + kassenzeichenId + '?role=all&omitNullValues=true&deduplicate=false', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
                'Content-Type': 'application/json'
            }
        }).then(function (response) {


            if (response.status >= 200 && response.status < 300) {
                response.json().then(function (kassenzeichenData) {
                    dispatch(UiStateActions.showWaiting(false));
                    dispatch(setKassenzeichenObject(kassenzeichenData));
                    dispatch(RoutingActions.push(changeKassenzeichenInLocation(state.routing.location,kassenzeichenData.kassenzeichennummer8)));
                    dispatch(MappingActions.setFeatureCollection(getFlaechenFeatureCollection(kassenzeichenData)));
                    if (fitBounds) {
                        dispatch(MappingActions.fitAll());
                    }
                });
            } else if (response.status === 401) {
                dispatch(UiStateActions.showWaiting(false));
                dispatch(AuthActions.invalidateLogin(username, pass, false));
            }
        });
    };
}

function searchByKassenzeichen(kassenzeichen, fitBounds) {
    console.log("searchByKassenzeichen.fitBounds"+fitBounds)
    
    return function (dispatch, getState) {
        dispatch(UiStateActions.showWaiting(true, "Kassenzeichen suchen ..."));
        const query = {
            "list": [{
                "key": "searchString",
                "value": kassenzeichen + ""
            }]
        };
        const state = getState();
        let username = state.auth.user;
        let pass = state.auth.password;

        fetch(SERVICE + '/searches/VERDIS_GRUNDIS.de.cismet.verdis.server.search.KassenzeichenSearchStatement/results?role=all&limit=100&offset=0', {
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(function (queryResult) {
                    if (queryResult.$collection.length === 1) {
                        dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID, fitBounds));
                    } else if (queryResult.$collection.length < 1) {
                        dispatch(UiStateActions.showError("Es konnte kein Kassenzeichen " + kassenzeichen + " gefunden werden."));
                    } else {
                        dispatch(UiStateActions.showError("Kassenzeichen " + kassenzeichen + " lieferte keinen eindeutigen Treffer."));
                    }
                });
            } else if (response.status === 401) {
                dispatch(UiStateActions.showWaiting(false));
                dispatch(AuthActions.invalidateLogin(username, pass, false));
            } else {
                //Errorhandling
                dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. ( ErrorCode: " + response.status + ")"));
            }

        }).catch(function (err) {
            dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. (" + err + ")"));
        });

    };
}


function searchByPoint(x, y, fitBounds) {
    return function (dispatch, getState) {
        dispatch(UiStateActions.showWaiting(true, "Kassenzeichen suchen ..."));
        const query = {
            "list": [{
                    "key": "wktString",
                    "value": "POINT (" + x + " " + y + ");"
                },
                {
                    "key": "flaecheFilter",
                    "value": true
                }
            ]
        };
        const state = getState();
        let username = state.auth.user;
        let pass = state.auth.password;
        fetch(SERVICE + '/searches/VERDIS_GRUNDIS.de.cismet.verdis.server.search.KassenzeichenNodeByWKTSearch/results?role=all&limit=100&offset=0', {
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(function (queryResult) {
                    if (queryResult.$collection.length === 1) {
                        dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID, fitBounds));
                    } else if (queryResult.$collection.length < 1) {
                        dispatch(UiStateActions.showInfo("Hier konnte kein Kassenzeichen gefunden werden."));
                        setTimeout(() => {
                            dispatch(UiStateActions.showWaiting(false));
                        }, 1000);
                    } else {
                        dispatch(UiStateActions.showInfo("Suche lieferte keinen eindeutigen Treffer."));
                        setTimeout(() => {
                            dispatch(UiStateActions.showWaiting(false));
                        }, 1000);
                    }
                });
            } else if (response.status === 401) {
                dispatch(UiStateActions.showWaiting(false));
                dispatch(AuthActions.invalidateLogin(username, pass, false));
            } else {
                //Errorhandling
                dispatch(UiStateActions.showError("Bei der Suche an dem Punkt " + x + " ," + y + " ist ein Fehler aufgetreten. ( ErrorCode: " + response.status + ")"));
            }

        }).catch(function (err) {
            dispatch(UiStateActions.showError("Bei der Suche an dem Punkt " + x + " ," + y + " ist ein Fehler aufgetreten. (" + err + ")"));
        });

    };
}

export const actions = {
    setKassenzeichenObject,
    searchByKassenzeichenId,
    searchByKassenzeichen,
    searchByPoint
};
