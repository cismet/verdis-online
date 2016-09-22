import  parse   from 'wellknown';

export function getFlaechenFeatureCollection(kassenzeichen) {

}


export function getFlaecheFeature(kassenzeichen) {

}

export function getGeoJsonFromCidsGeom(geom, properties) {
    const DOMAIN="VERDIS_GRUNDIS";
    const GEOM_CLASS="GEOM";
    const GEOM_FIELD="geo_field";
    let gj= parse(geom.geo_field);
    gj.properties=properties;
    return gj;
}


export function getKassenzeichenInfoFeature(kassenzeichen){

}




export default { getFlaechenFeatureCollection, getFlaecheFeature, getKassenzeichenInfoFeature };