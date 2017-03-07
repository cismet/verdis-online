import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import 'proj4leaflet';
//import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import { Layers } from '../components/Layers';
import ProjGeoJson from '../components/ProjGeoJson';
import { flaechenStyle } from '../utils/kassenzeichenMappingTools';
import { crs25832 } from '../constants/gis';

//mport  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    kassenzeichen: state.kassenzeichen,
    mapping: state.mapping
  };
}
export class VerdisMap_ extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    if ((typeof (this.refs.leafletMap) != 'undefined' && this.refs.leafletMap != null) && this.props.mapping.bounds != null) {
      this.refs.leafletMap.leafletElement.fitBounds(this.props.mapping.bounds);
    }
  }
  render() {
    const mapStyle = {
      height: this.props.height
    };

    // <Ortho2014 /><StadtgrundKarteABK />
    // <OSM />
    return (
      <Map ref="leafletMap" key={JSON.stringify(this.props.uiState.layers)} crs={crs25832} style={mapStyle} center={position} zoom={14} >
        {this.props.uiState.layers.map((layer) => {
          if (layer.enabled) {
            return (
              Layers.get(layer.key)(layer.opacity)
            );
          }
        })}
        <ProjGeoJson key={JSON.stringify(this.props.mapping.featureCollection)} mappingProps={this.props.mapping} style={flaechenStyle} />
      </Map>
    );
  }
}

//{m => { this.leafletMap = m; }}


const VerdisMap = connect(mapStateToProps)(VerdisMap_);

VerdisMap_.propTypes = {
  uiState: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  height: PropTypes.number
};

export default VerdisMap;