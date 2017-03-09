import * as actionTypes from '../constants/actionTypes';


export function showKassenzeichenObject(kassenzeichenObject,skipFitBounds) {
  return function (dispatch) {
      dispatch(internalShowKassenzeichenObject(kassenzeichenObject,skipFitBounds));
      dispatch(setBoundsFittingEnabled(false));
  }
}

export function internalShowKassenzeichenObject(kassenzeichenObject,skipFitBounds) {
  return {
    type: actionTypes.SHOW_KASSENZEICHEN,
    kassenzeichenObject,
    boundsFittingEnabled: !skipFitBounds
  };
}

export function fitBounds() {
 return function (dispatch, getState) {
    const state = getState();
    dispatch(showKassenzeichenObject(state.kassenzeichen,false));
  };
}

export function setBoundsFittingEnabled(boundsFittingEnabled) {
  return {
    type: actionTypes.FIT_BOUNDS,
    boundsFittingEnabled
  };
}
