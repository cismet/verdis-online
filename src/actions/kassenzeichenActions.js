import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';


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

        });
      });
  };
}

// function getKassenzeichenFromService(id) {
//   let username="SteinbacherD102@VERDIS_GRUNDIS";
//   let pass="vds102";
//   return fetch('http://localhost:8892/VERDIS_GRUNDIS.KASSENZEICHEN/'+id+'?role=all&omitNullValues=true&deduplicate=false', {
//     headers: {
//       'Authorization': 'Basic '+btoa(username+':'+pass),
//       'Content-Type': 'application/json',
//     }}).then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//
//
//   }

export function setKassenzeichenObject(kassenzeichenObject) {
  return {
      type: actionTypes.SET_KASSENZEICHEN,
      kassenzeichenObject
  };

}
