import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import L from 'leaflet';
import proj4 from 'proj4';
import 'proj4leaflet';
import { Ortho2014, StadtgrundKarteABK, OSM } from './Layers';
import ProjGeoJson from './ProjGeoJson';
 import {
     getGeoJsonFromCidsGeom, getGeoJsonFromCidsObject
 } from '../utils/kassenzeichenGeoJsonTools';
 import {MOCKDATA} from '../store/mockdata/mock';

//mport  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    ui: state.browserUI
  };
}
export class VerdisMap_ extends React.Component {
  render() {
    let h;
    if (this.props.ui.height) {
      h = this.props.ui.height - 55;
    }
    else {
      h = 50;
    }

    const mapStyle = {
      width: "100%",
      height: h
    };
   
    //crs={L.CRS.EPSG4326}
    //crs={L.CRS.EPSG900913} //default
   
    //own projection
    const proj4rs25832def = '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs';
    const origin = proj4( proj4rs25832def,
        // Upper left corner of the tile orign based on the WMTSCapabilities layer BBox
        [ 0.105946948013, 56.8478734515 ]
        );
    
    // Set resolutions
    const resolutions = [ 17471320.7509, 8735660.37545, 4367830.18772, 2183915.09386, 1091957.54693, 545978.773466, 272989.386733, 136494.693366, 68247.3466832, 34123.6733416, 17061.8366708, 8530.9183354, 4265.4591677, 2132.72958385,1066.364792,533.182396, 266.591198, 133.295599,  66.6477995, 33.32389975];
    const rs25832 = new L.Proj.CRS(
        'EPSG:25832',
        proj4rs25832def, 
        {
            origin: [ origin[0], origin[1] ],
            resolutions: resolutions.map(function (value) {
                return value * 0.00028;
            })
        }
    );
const f = {
    "type": "Feature",
    "properties": {
        "name": "Beamtenlaufbahn",
        "popupContent": "This is where the clerks go wild!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [374418.99,5681667.11]
    },
    'crs': {
    'type': 'name',
    'properties': {
        'name': 'urn:ogc:def:crs:EPSG::25832'
      }
    }
  
};
const f2 = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [ 7.199927, 51.272208 ]
    },
    'crs': {
    'type': 'name',
    'properties': {
        'name': 'urn:ogc:def:crs:EPSG::4326'
      }
    }
  
};

const flaechenStyle = (feature) => {     
    let color='#ff0000';
    switch (feature.properties.art_abk) {
            case 'DF': color="#a24c29";
            break;
            case 'GDF': color="#6a7a17";
            break;
            case 'VF': color="#788180";
            break;
            case 'VFS': color="#8a8684";
            break;
            case 'VSÖ': color="#7e5b47";
            break;
            case 'VFÖ': color="#9f9b6c";
            break;
            case 'VV': color="#ff0000";
            break;
            default: color="#ff0000";
        } 
    
    const style = {
        "color": "#000000",
        "weight": 1,
        "opacity": 1.0,
        "fillColor": color,
        "fillOpacity": 0.6
    };

    return style; 
};

const fcE2 = getGeoJsonFromCidsObject(MOCKDATA.get(60670411).flaechen,'flaecheninfo.geometrie',(flaeche)=>{
    return {
        'idx': flaeche.id,
        'art_abk': flaeche.flaecheninfo.flaechenart.art_abkuerzung,
        'flaechenart': flaeche.flaecheninfo.flaechenart.art,
        'anschlussgrad': flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung,
        'groesse': flaeche.flaecheninfo.groesse_aus_grafik,
        'groesse_korrektur': flaeche.flaecheninfo.groesse_korrektur
    };
});


// <Ortho2014 /><StadtgrundKarteABK />
// <OSM />
    return (
      <Map crs={rs25832} style={mapStyle} center={position} zoom={14}>    
      <Ortho2014 /><StadtgrundKarteABK />
        <ProjGeoJson data={fcE2} style={flaechenStyle} />
      </Map>
    );
  }
}
const VerdisMap = connect(mapStateToProps)(VerdisMap_);


VerdisMap_.propTypes = {
  ui: PropTypes.object
};

export default VerdisMap;
