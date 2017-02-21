import * as actionTypes from '../constants/actionTypes';

/**
 * Action creators 
 * 
 * DRY (Don't Repeat Yourself) way of creating actions (not strictly necessary) 
 * 
 * @param {type} kassenzeichen
 * @return {searchByKassenzeichen.kassenzeichenActionsAnonym$0}
 */
export function searchByKassenzeichen(kassenzeichen) {
    /**
     * Actions
     * 
     * Command pattern with *type* and *payload*.
     */
    return {
        type: actionTypes.SEARCH_BY_KASSENZEICHEN,
        kassenzeichen
    };
}