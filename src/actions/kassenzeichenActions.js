import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';
import {MOCKDATA} from '../store/mockdata/mock';


export function searchByKassenzeichen(kassenzeichen) {
  return function (dispatch) {
    dispatch(uiStateActions.showWaiting(true));
    setTimeout(() => {
        dispatch(uiStateActions.showWaiting(false));
        dispatch(setKassenzeichenObject(MOCKDATA.get(kassenzeichen)));
      }, 1000);

  };
}


export function setKassenzeichenObject(kassenzeichenObject) {
  return {
      type: actionTypes.SET_KASSENZEICHEN,
      kassenzeichenObject
  };

}
