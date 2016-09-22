import * as types from '../constants/actionTypes';

export function searchByKassenzeichen(kassenzeichen) {
    return {
        type: types.SEARCH_BY_KASSENZEICHEN,
        kassenzeichen
    };
}