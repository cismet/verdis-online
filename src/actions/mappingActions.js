import * as actionTypes from '../constants/actionTypes';

export function showKassenzeichenObject(kassenzeichenObject) {
  return {
      type: actionTypes.SHOW_KASSENZEICHEN,
      kassenzeichenObject
  };

}
