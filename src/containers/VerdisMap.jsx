import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map } from 'react-leaflet';
import { connect } from "react-redux";
import 'proj4leaflet';
//import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import { Layers } from '../components/Layers';
import ProjGeoJson from '../components/ProjGeoJson';
import { flaechenStyle } from '../utils/kassenzeichenMappingTools';
import { crs25832, proj4crs25832def } from '../constants/gis';
import proj4 from 'proj4';
import * as KassenzeichenActions from '../actions/kassenzeichenActions';
import { bindActionCreators } from 'redux';


//import  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    kassenzeichen: state.kassenzeichen,
    mapping: state.mapping
  };
}

function mapDispatchToProps(dispatch) {
  return {
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),

  };
}
export class VerdisMap_ extends React.Component {
  constructor(props) {
    super(props);
    this.mapClick = this.mapClick.bind(this);

  }

  componentDidUpdate() {
    if ((typeof (this.refs.leafletMap) != 'undefined' && this.refs.leafletMap != null) && this.props.mapping.bounds != null) {
      if (this.props.mapping.boundsFittingEnabled) {
                console.log("++++++++++++++++++++++++++++++++++++++ fitBounds()")

        this.refs.leafletMap.leafletElement.fitBounds(this.props.mapping.bounds);
      }
      else {
        console.log("--------------------------------------- skip fitBounds()")
      }
    }
  }

  mapClick(event) {
    const skipFitBounds=event.originalEvent.shiftKey;
    const latlon = event.latlng;
    const pos=(proj4(proj4crs25832def, [latlon.lng, latlon.lat]));
    this.props.kassenzeichenActions.searchByPoint(pos[0],pos[1],skipFitBounds);
  }

  render() {
    const mapStyle = {
      height: this.props.height
    };

    // <Ortho2014 /><StadtgrundKarteABK />
    // <OSM />
    return (
      <Map ref="leafletMap" key={JSON.stringify(this.props.uiState.layers)} crs={crs25832} style={mapStyle} center={position} zoom={14} ondblclick={this.mapClick} doubleClickZoom={false} >
        {this.props.uiState.layers.map((layer) => {
          if (layer.enabled) {
            return (
              Layers.get(layer.key)(layer.opacity)
            );
          }
        })}
        <ProjGeoJson key={JSON.stringify(this.props.mapping)} mappingProps={this.props.mapping} style={flaechenStyle} />
      </Map>
    );
  }
}

//{m => { this.leafletMap = m; }}


const VerdisMap = connect(mapStateToProps, mapDispatchToProps)(VerdisMap_);

VerdisMap_.propTypes = {
  uiState: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  height: PropTypes.number,
  kassenzeichenActions: PropTypes.object,

};

export default VerdisMap;
