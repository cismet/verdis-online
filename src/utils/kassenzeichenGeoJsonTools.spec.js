 import {
     getGeoJsonFromCidsGeom, getGeoJsonFromCidsObject
 } from './kassenzeichenGeoJsonTools';
 import {MOCKDATA} from '../store/mockdata/mock';
 import {
     expect
 } from 'chai';



 //console.log(JSON.stringify(MOCKDATA.get(60432515),null,4));


describe('cidsGeometry to GeoJson Conversion Test of', () => {
     it('Point', () => {
         const gj = getGeoJsonFromCidsGeom(CIDS_GEOM_POINT, ADDITIONAL_INFO);
         let expectedGj = GEO_JSON_POINT;
         //logJson(gj);
         expectedGj.properties = ADDITIONAL_INFO;
         expect(gj).to.deep.equal(expectedGj);
     });
     it('Line', () => {
         const gj = getGeoJsonFromCidsGeom(CIDS_GEOM_LINESTRING, ADDITIONAL_INFO);
         let expectedGj = GEO_JSON_LINESTRING;
         expectedGj.properties = ADDITIONAL_INFO;
         expect(gj).to.deep.equal(expectedGj);
     });
     it('Polygon', () => {
         const gj = getGeoJsonFromCidsGeom(CIDS_GEOM_POLYGON, ADDITIONAL_INFO);
         let expectedGj = GEO_JSON_POLYGON;
         expectedGj.properties = ADDITIONAL_INFO;
         expect(gj).to.deep.equal(expectedGj);
     });
 });



// internal tools

function logJson(json){
    console.log(JSON.stringify(json,null,4));
}

// testdata -------------------------------------


 const CIDS_GEOM_POINT = {
     "$self": "/VERDIS_GRUNDIS.GEOM/645327",
     "geo_field": "SRID=25832;POINT (374434.773388274 5681708.410269481)",
     "id": 645327
 };
 const CIDS_GEOM_LINESTRING = {
     "$self": "/VERDIS_GRUNDIS.GEOM/867028",
     "geo_field": "SRID=25832;LINESTRING (374355.4369945103 5681690.026377187, 374364.8381782347 5681693.535560023, 374382.6739999043 5681700.158999544, 374389.5795672635 5681702.765802995)",
     "id": 867028
 };
 const CIDS_GEOM_POLYGON = {
     "$self": "/VERDIS_GRUNDIS.GEOM/645327",
     "geo_field": "SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374434.773388274 5681708.410269481))",
     "id": 645327
 };

 const ADDITIONAL_INFO = {
     'name': 'Thorsten',
     'age': 42
 };

 const GEO_JSON_POINT = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            374434.773388274,
            5681708.410269481
        ],
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:EPSG::25832"
            }
        }
    }
}
 const GEO_JSON_POLYGON = {
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    374434.773388274,
                    5681708.410269481
                ],
                [
                    374422.9765875824,
                    5681681.326124268
                ],
                [
                    374416.4917460494,
                    5681678.77451399
                ],
                [
                    374434.773388274,
                    5681708.410269481
                ]
            ]
        ],
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:EPSG::25832"
            }
        }
    }
 };

 const GEO_JSON_LINESTRING = {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [
                374355.4369945103,
                5681690.026377187
            ],
            [
                374364.8381782347,
                5681693.535560023
            ],
            [
                374382.6739999043,
                5681700.158999544
            ],
            [
                374389.5795672635,
                5681702.765802995
            ]
        ],
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:EPSG::25832"
            }
        }
    }
 };

 



 // console.log(JSON.stringify(gj,null,4));

 // it('length of collections', () => {
 //     expect(getFlaechenFeatureCollection(MOCKDATA.get(60432515)).features.size).to.equal(99);
 // });