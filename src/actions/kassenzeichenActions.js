import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';
import * as mappingActions from './mappingActions';


export function searchByKassenzeichenId(kassenzeichenId) {
  return function (dispatch) {
    dispatch(uiStateActions.showWaiting(true));

    let username="SteinbacherD102@VERDIS_GRUNDIS";
    let pass="leo";
    fetch('http://localhost:8890/VERDIS_GRUNDIS.KASSENZEICHEN/'+kassenzeichenId+'?role=all&omitNullValues=true&deduplicate=false', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic '+btoa(username+':'+pass),
        'Content-Type': 'application/json',
      }}).then(function (response){
        response.json().then(function(kassenzeichenData) {
          dispatch(uiStateActions.showWaiting(false));
          dispatch(setKassenzeichenObject(kassenzeichenData));
          dispatch(mappingActions.showKassenzeichenObject(kassenzeichenData));

        });
      });
  };
}

export function setKassenzeichenObject(kassenzeichenObject) {
  return {
      type: actionTypes.SET_KASSENZEICHEN,
      kassenzeichenObject
  };

}
