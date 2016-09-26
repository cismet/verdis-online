import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import 'proj4leaflet';
//import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import {  Osm } from '../components/Layers';
import ProjGeoJson from '../components/ProjGeoJson';
 import {
     getFlaechenFeatureCollection, flaechenStyle
 } from '../utils/kassenzeichenMappingTools';
import { crs25832 } from '../constants/gis';

//mport  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    kassenzeichen: state.kassenzeichen  
  };
}
export class VerdisMap_ extends React.Component {
  render() {
    const mapStyle = {
      height: this.props.height
    };


    let featureCollection;
    if (this.props.kassenzeichen.id!==-1) {
        featureCollection = getFlaechenFeatureCollection(this.props.kassenzeichen);
    }
    else {
        featureCollection=[];
    }

// <Ortho2014 /><StadtgrundKarteABK />
// <OSM />
    return (
      <Map crs={crs25832} style={mapStyle} center={position} zoom={14}>    
      <Osm />
        <ProjGeoJson key={this.props.kassenzeichen.id} data={featureCollection} style={flaechenStyle} />
      </Map>
    );
  }
}
const VerdisMap = connect(mapStateToProps)(VerdisMap_);

VerdisMap_.propTypes = {
  kassenzeichen: PropTypes.object
};

export default VerdisMap;
