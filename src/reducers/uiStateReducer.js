import {TOGGLE_INFO_ELEMENTS, TOGGLE_CHART_ELEMENTS, TOGGLE_KANAL_ELEMENTS, TOGGLE_FILTER_ELEMENT, TOGGLE_DETAIL_ELEMENTS, SHOW_SETTINGS,CHANGE_LAYER_OPACITY,CHANGE_LAYER_ENABLED } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function uiStateReducer(state = initialState.uiState, action) {
    let newState;
    switch (action.type) {
        case TOGGLE_INFO_ELEMENTS: {
            newState=objectAssign({},state);
            newState.infoElementsEnabled=!state.infoElementsEnabled;
            return newState;
        }
        case TOGGLE_CHART_ELEMENTS: {
             newState=objectAssign({},state);
             newState.chartElementsEnabled=!state.chartElementsEnabled;

            return newState;
        }
       case TOGGLE_KANAL_ELEMENTS: {
             newState=objectAssign({},state);
             newState.kanalElementsEnabled=!state.kanalElementsEnabled;

            return newState;
        }
       case TOGGLE_FILTER_ELEMENT: {
             newState=objectAssign({},state);
             newState.filterElementEnabled=!state.filterElementEnabled;
            return newState;
        }
       case TOGGLE_DETAIL_ELEMENTS: {
             newState=objectAssign({},state);
             newState.detailElementsEnabled=!state.detailElementsEnabled;
            return newState;
        }
       case SHOW_SETTINGS: {
             newState=objectAssign({},state);
             newState.settingsVisible=action.visible;
            return newState;
        }
       case CHANGE_LAYER_OPACITY: {
             newState=objectAssign({},state);
            newState.layers.map((layer)=>{
                 if (action.key===layer.key){
                    layer.opacity=action.opacity;
                 }
             });
            return newState;
        }
     case CHANGE_LAYER_ENABLED: {
             newState=objectAssign({},state);
             newState.layers.map((layer)=>{
                 if (action.key===layer.key){
                    layer.enabled=!layer.enabled;
                 }
             });
            return newState;
        }
        default:
            return state;

    }
}