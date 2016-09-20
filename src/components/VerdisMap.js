import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import L from 'leaflet';
import proj4 from 'proj4';
import 'proj4leaflet';
import { Ortho2014, StadtgrundKarteABK  } from './Layers';
import ProjGeoJson from './ProjGeoJson';

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
const myStyle = {
    "color": "#000000",
    "weight": 1,
    "opacity": 1.0,
    "fillColor": "#ff0000",
    "fillOpacity": 0.9
};
const fc2 = {"features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[374374.44496824965,5681668.141103344],[374373.56363822147,5681670.3982774764],[374370.3864017278,5681678.5386607442],[374369.84194113314,5681679.9327761475],[374368.75861217082,5681682.707541707],[374364.58806118742,5681693.39535087],[374357.34989813343,5681711.9304025546],[374362.02178449556,5681722.2671275716],[374367.85203286633,5681724.5371555928],[374370.60564308241,5681725.610275846],[374398.67506117374,5681736.5415396178],[374419.24566970393,5681744.552331944],[374426.24879226089,5681741.4065584457],[374435.03925989941,5681718.4447957855],[374432.84919582307,5681713.375438069],[374431.37646586448,5681717.1660990082],[374427.15948894992,5681728.0507025123],[374423.44360609353,5681737.6362369135],[374416.3682115525,5681740.7288646149],[374408.7560755983,5681737.75935382],[374367.79229640588,5681721.8012160538],[374363.24686862528,5681711.49434835],[374369.57695306092,5681695.2453957889],[374378.45250927284,5681672.5008796752],[374388.79851390421,5681667.87650333],[374381.56089483574,5681665.1736236112],[374376.58572147787,5681667.249051013],[374374.44496824965,5681668.141103344]]]},
    'crs': {
    'type': 'name',
    'properties': {
        'name': 'urn:ogc:def:crs:EPSG::25832'
      }
    },"properties":{}}],"type":"FeatureCollection"}

    return (
      <Map crs={rs25832} style={mapStyle} center={position} zoom={14}>    
       <Ortho2014 />
       <StadtgrundKarteABK />
       <ProjGeoJson data={fc2} style={myStyle} />
      </Map>
    );
  }
}
const VerdisMap = connect(mapStateToProps)(VerdisMap_);


VerdisMap_.propTypes = {
  ui: PropTypes.object
};

export default VerdisMap;
