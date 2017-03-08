import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';
import * as mappingActions from './mappingActions';
import 'whatwg-fetch';
import {
  SERVICE,
  DOMAIN
} from '../constants/cids';

export function searchByKassenzeichenId(kassenzeichenId) {
  return function (dispatch, getState) {
    dispatch(uiStateActions.showWaiting(true, "Kassenzeichen laden ..."));
    const state = getState();
    let username = state.uiState.user;
    let pass = state.uiState.password;
    fetch(SERVICE + '/VERDIS_GRUNDIS.KASSENZEICHEN/' + kassenzeichenId + '?role=all&omitNullValues=true&deduplicate=false', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
        'Content-Type': 'application/json'
      }
    }).then(function (response) {


      if (response.status >= 200 && response.status < 300) {
        response.json().then(function (kassenzeichenData) {
          dispatch(uiStateActions.showWaiting(false));
          dispatch(setKassenzeichenObject(kassenzeichenData));
          dispatch(mappingActions.showKassenzeichenObject(kassenzeichenData));

        });
      } else if (response.status === 401) {
        dispatch(uiStateActions.showWaiting(false));
        dispatch(uiStateActions.invalidateLogin(username, pass, false));
      }
    });
  };
}

export function searchByKassenzeichen(kassenzeichen) {
  return function (dispatch, getState) {
    dispatch(uiStateActions.showWaiting(true, "Kassenzeichen suchen ..."));
    const query = {
      "list": [{
        "key": "searchString",
        "value": kassenzeichen + ""
      }]
    };
    const state = getState();
    let username = state.uiState.user;
    let pass = state.uiState.password;

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
          if (queryResult.$collection.length == 1) {
            dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID));
          } else if (queryResult.$collection.length < 1) {
            dispatch(uiStateActions.showError("Es konnte kein Kassenzeichen " + kassenzeichen + " gefunden werden."));
          } else {
            dispatch(uiStateActions.showError("Kassenzeichen " + kassenzeichen + " lieferte keinen eindeutigen Treffer."));
          }
        });
      } else if (response.status == 401) {
        dispatch(uiStateActions.showWaiting(false));
        dispatch(uiStateActions.invalidateLogin(username, pass, false));
      } else {
        //Errorhandling
        dispatch(uiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. ( ErrorCode: " + response.status + ")"));
      }

    }).catch(function (err) {
      dispatch(uiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. (" + err + ")"));
    });

  };
}


export function searchByPoint(x, y) {
  return function (dispatch, getState) {
    dispatch(uiStateActions.showWaiting(true, "Kassenzeichen suchen ..."));
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
    let username = state.uiState.user;
    let pass = state.uiState.password;
    console.log(JSON.stringify(query))
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
          if (queryResult.$collection.length == 1) {
            dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID));
          } else if (queryResult.$collection.length < 1) {
            dispatch(uiStateActions.showInfo("Hier konnte kein Kassenzeichen gefunden werden."));
            setTimeout(() => {
              dispatch(uiStateActions.showWaiting(false));
            }, 1000);
          } else {
            dispatch(uiStateActions.showInfo("Suche lieferte keinen eindeutigen Treffer."));
             setTimeout(() => {
              dispatch(uiStateActions.showWaiting(false));
            }, 1000);
          }
        });
      } else if (response.status == 401) {
        dispatch(uiStateActions.showWaiting(false));
        dispatch(uiStateActions.invalidateLogin(username, pass, false));
      } else {
        //Errorhandling
        dispatch(uiStateActions.showError("Bei der Suche an dem Punkt " + x + " ," + y + " ist ein Fehler aufgetreten. ( ErrorCode: " + response.status + ")"));
      }

    }).catch(function (err) {
      dispatch(uiStateActions.showError("Bei der Suche an dem Punkt " + x + " ," + y + " ist ein Fehler aufgetreten. (" + err + ")"));
    });

  };
}

export function setKassenzeichenObject(kassenzeichenObject) {
  return {
    type: actionTypes.SET_KASSENZEICHEN,
    kassenzeichenObject
  };

}
