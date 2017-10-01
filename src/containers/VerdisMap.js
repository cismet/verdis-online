import PropTypes from 'prop-types';
import React from 'react';
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
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as MappingActions, constants as MappingConstants  } from '../redux/modules/mapping';
import { bindActionCreators } from 'redux';
//import  CismapBaseMap  from './CismapBaseMap';
import RoutedMap from './RoutedMap';


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
    mappingActions: bindActionCreators(MappingActions, dispatch),

  };
}
export class VerdisMap_ extends React.Component {
  constructor(props) {
    super(props);
    this.mapClick = this.mapClick.bind(this);
    this.fitBounds = this.fitBounds.bind(this);

  }

//  componentDidUpdate() {
//     if ((typeof (this.refs.leafletRoutedMap) !== 'undefined' && this.refs.leafletRoutedMap !== null)) {
//       if (this.props.mapping.autoFitBounds) {
//         if (this.props.mapping.autoFitMode===MappingConstants.AUTO_FIT_MODE_NO_ZOOM_IN) {
//           if (!this.refs.leafletRoutedMap.leafletElement.getBounds().contains(this.props.mapping.autoFitBoundsTarget)) {
//             this.refs.leafletRoutedMap.leafletElement.fitBounds(this.props.mapping.autoFitBoundsTarget);         
//           }
//         }
//         else {
//           this.refs.leafletRoutedMap.leafletElement.fitBounds(this.props.mapping.autoFitBoundsTarget);        
//         }
//         this.props.mappingActions.setAutoFit(false);
//       }
//     }
//   }

  fitBounds() {
      this.props.mappingActions.fitAll();
  }

  mapClick(event) {
    const skipFitBounds=true;//event.originalEvent.shiftKey; 
    const latlon = event.latlng;
    const pos=(proj4(proj4crs25832def, [latlon.lng, latlon.lat]));
    this.props.kassenzeichenActions.searchByPoint(pos[0],pos[1],!skipFitBounds);
  }

  render() {
    const mapStyle = {
      height: this.props.height
    };

    // <Ortho2014 /><StadtgrundKarteABK />
    // <OSM />
    return (
      <RoutedMap ref="leafletRoutedMap" key={"leafletRoutedMap"}  layers="" crs={crs25832} style={mapStyle} center={position} zoom={14} ondblclick={this.mapClick} doubleClickZoom={false} >
        {this.props.uiState.layers.map((layer) => {
          if (layer.enabled) {
            return (
              Layers.get(layer.key)(layer.opacity)
            );
          }
          else {
            return (<div key={"empty_div_for_disabled_layer"+JSON.stringify(layer)}/>);
          }
        })}
        <ProjGeoJson key={JSON.stringify(this.props.mapping)} mappingProps={this.props.mapping} style={flaechenStyle} />
      </RoutedMap>
    );
  }
}

//{m => { this.leafletRoutedMap = m; }}


const VerdisMap = connect(mapStateToProps, mapDispatchToProps,null, {withRef:true})(VerdisMap_);

VerdisMap_.propTypes = {
  uiState: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  height: PropTypes.number,
  kassenzeichenActions: PropTypes.object,

};

export default VerdisMap;