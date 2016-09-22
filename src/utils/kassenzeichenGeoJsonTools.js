import parse from 'wellknown';
import { typeCheck } from 'type-check';

export function getFlaechenFeatureCollection(kassenzeichen) {

}


export function getKassenzeichenInfoFeature(kassenzeichen) {

}

export function getFlaecheFeature(kassenzeichen) {

}

export function getGeoJsonFromCidsGeom(geom, properties) {
    const DOMAIN = "VERDIS_GRUNDIS";
    const GEOM_CLASS = "GEOM";
    const GEOM_FIELD = "geo_field";
    let gj_geometry = parse(geom[GEOM_FIELD]);
    return {
        "type": "Feature",
        "geometry": gj_geometry,
        "crs": gj_geometry.crs,
        "properties": properties
    }
}

export function getGeoJsonFromCidsObject(input, selector, propCreator){
    console.log("input Check for Array:"+typeCheck('[Object]',input));
    console.log("input Check for Array:"+typeCheck('Object',input));
    console.log("selector Check for Selector:"+typeCheck('String',selector));
    console.log("propCreator Check for Array:"+typeCheck('Function',propCreator));
    if (typeCheck('[Object]',input)) {
        let collection=[];
        input.forEach(function(cidsObject) {
            collection.push(getGeoJsonFromCidsGeom(deepAccessUsingString(cidsObject,selector),propCreator(cidsObject)));
        });        
        return collection;
    }
    else if (typeCheck('Object',input)) {
        return getGeoJsonFromCidsGeom(deepAccessUsingString(input,selector),propCreator(input));
    }
    else {
        throw "getGeoJsonFromCidsObject has to be called either with an cidsObject or an Array of cidsObjects";
    }
}

function deepAccessUsingString(obj, key){
  return key.split('.').reduce((nestedObject, key) => {
    if(nestedObject && key in nestedObject) {
      return nestedObject[key];
    }
    return undefined;
  }, obj);
}


export default {
    getFlaechenFeatureCollection,
    getFlaecheFeature,
    getKassenzeichenInfoFeature,
};