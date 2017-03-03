import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';
import * as mappingActions from './mappingActions';
import { SERVICE,DOMAIN } from '../constants/cids';

export function searchByKassenzeichenId(kassenzeichenId) {
  return function (dispatch, getState) {
    dispatch(uiStateActions.showWaiting(true));
    const state = getState();
    let username=state.uiState.user;
    let pass=state.uiState.password;
    fetch(SERVICE+'/VERDIS_GRUNDIS.KASSENZEICHEN/'+kassenzeichenId+'?role=all&omitNullValues=true&deduplicate=false', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic '+btoa(username+'@'+DOMAIN+':'+pass),
        'Content-Type': 'application/json',
      }}).then(function (response){


        if (response.status >= 200 && response.status <300) {
          response.json().then(function(kassenzeichenData) {
            dispatch(uiStateActions.showWaiting(false));
            dispatch(setKassenzeichenObject(kassenzeichenData));
            dispatch(mappingActions.showKassenzeichenObject(kassenzeichenData));

          });
        }
        else if (response.status == 401){
          dispatch(uiStateActions.showWaiting(false));
          dispatch(uiStateActions.setLoginInformation(username, pass,false));
        }
      });
  };
}

export function setKassenzeichenObject(kassenzeichenObject) {
  return {
      type: actionTypes.SET_KASSENZEICHEN,
      kassenzeichenObject
  };

}
