import {
  SHOW_KASSENZEICHEN
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {
  getFlaechenFeatureCollection
} from '../utils/kassenzeichenMappingTools';
import L from 'leaflet';
import 'proj4leaflet';



// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function mappingReducer(state = initialState.mapping, action) {
  let newState;
  switch (action.type) {
    case SHOW_KASSENZEICHEN:
      {
        newState = objectAssign({}, state);
        if (action.kassenzeichenObject.id !== -1) {
          const fc = getFlaechenFeatureCollection(action.kassenzeichenObject);
          const projectedFc = L.Proj.geoJson(fc);
          const b = projectedFc.getBounds();
          newState.featureCollection = fc;
          newState.bounds = b;
        } else {
          newState.featureCollection = [];
          newState.bounds = null;
        }
        return newState;

      }
    default:
      return state;
  }
}
