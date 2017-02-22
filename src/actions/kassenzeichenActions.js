import * as actionTypes from '../constants/actionTypes';
import * as uiStateActions from './uiStateActions';

export function searchByKassenzeichen(kassenzeichen) {
  return function (dispatch) {
    dispatch(uiStateActions.showWaiting(true));
    setTimeout(() => {
        dispatch(uiStateActions.showWaiting(false));
        dispatch(mockSearchByKassenzeichen(kassenzeichen));
      }, 1000);

  };
}


export function mockSearchByKassenzeichen(kassenzeichen) {
    return {
        type: actionTypes.SEARCH_BY_KASSENZEICHEN,
        kassenzeichen
    };
}
