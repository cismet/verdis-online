import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import 'proj4leaflet';
//import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import {  Layers } from '../components/Layers';
import ProjGeoJson from '../components/ProjGeoJson';
 import {
     getFlaechenFeatureCollection, flaechenStyle
 } from '../utils/kassenzeichenMappingTools';
import { crs25832 } from '../constants/gis';

//mport  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    uiState:state.uiState,
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
      
      <Map key={JSON.stringify(this.props.uiState.layers)} crs={crs25832} style={mapStyle} center={position} zoom={14}>    
        { this.props.uiState.layers.map((layer)=>{
          if (layer.enabled) {
            return (
              Layers.get(layer.key)(layer.opacity)
            );
          }
        })}

     
        <ProjGeoJson key={this.props.kassenzeichen.id} data={featureCollection} style={flaechenStyle} />
      </Map>
    );
  }
}
const VerdisMap = connect(mapStateToProps)(VerdisMap_);

VerdisMap_.propTypes = {
  uiState: PropTypes.object,
  kassenzeichen: PropTypes.object
};

export default VerdisMap;
