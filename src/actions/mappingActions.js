import * as actionTypes from '../constants/actionTypes';

export function showKassenzeichenObject(kassenzeichenObject) {
  return {
    type: actionTypes.SHOW_KASSENZEICHEN,
    kassenzeichenObject
  };

}
export function fitBounds() {
  return {
    type: actionTypes.FIT_BOUNDS
  };
}
