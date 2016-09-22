import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import 'proj4leaflet';
import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import ProjGeoJson from './ProjGeoJson';
 import {
     getFlaechenFeatureCollection, flaechenStyle
 } from '../utils/kassenzeichenMappingTools';
import { crs25832 } from '../constants/gis';

//mport  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    ui: state.browserUI,
    kassenzeichen: state.kassenzeichen  
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
  ui: PropTypes.object,
  kassenzeichen: PropTypes.object
};

export default VerdisMap;
