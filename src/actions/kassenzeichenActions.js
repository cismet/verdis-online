import * as actionTypes from '../constants/actionTypes';

export function searchByKassenzeichen(kassenzeichen) {
    return {
        type: actionTypes.SEARCH_BY_KASSENZEICHEN,
        kassenzeichen
    };
}