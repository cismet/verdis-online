import parse from 'wellknown';
import {
  typeCheck
} from 'type-check';
import {
  GEOM_FIELD
} from '../constants/cids';


export function getGeoJsonFeatureFromCidsObject(input, selector, propCreator = () => {}) {
  // console.log("input Check for Array:"+typeCheck('[Object]',input));
  // console.log("input Check for Array:"+typeCheck('Object',input));
  // console.log("selector Check for Selector:"+typeCheck('String',selector));
  // console.log("propCreator Check for Array:"+typeCheck('Function',propCreator));
  if (typeCheck('[Object]', input)) {
    let collection = [];
    input.forEach(function (cidsObject) {
      collection.push(getGeoJsonFeatureFromCidsGeom(deepAccessUsingString(cidsObject, selector), propCreator(cidsObject)));
    });
    return collection;
  } else if (typeCheck('Object', input)) {
    return getGeoJsonFeatureFromCidsGeom(deepAccessUsingString(input, selector), propCreator(input));
  } else {
    throw new Error("getGeoJsonFromCidsObject has to be called either with an cidsObject or an Array of cidsObjects");
  }
}

export function getGeoJsonFeatureFromCidsGeom(geom, properties) {
  let gj_geometry = parse(geom[GEOM_FIELD]);
  //need to move the crs object to the top level as requested in the standard (and leaflet)
  let crs = gj_geometry.crs;
  delete gj_geometry.crs;
  return {
    "type": "Feature",
    "geometry": gj_geometry,
    "crs": crs,
    "properties": properties
  };
}

function deepAccessUsingString(obj, key) {
  return key.split('.').reduce((nestedObject, key) => {
    if (nestedObject && key in nestedObject) {
      return nestedObject[key];
    }
    return undefined;
  }, obj);
}

export default {};
