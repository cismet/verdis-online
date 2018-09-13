import PropTypes from 'prop-types';
import React from 'react';
//import { render } from 'react-dom';
import { connect } from "react-redux";
import 'proj4leaflet';
//import { Ortho2014, StadtgrundKarteABK, Osm } from './Layers';
import { Layers } from '../components/Layers';
import proj4 from 'proj4';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as MappingActions } from '../redux/modules/mapping';
import { bindActionCreators } from 'redux';

import { RoutedMap, MappingConstants, FeatureCollectionDisplay } from '../components/react-cismap';
import { routerActions as RoutingActions } from 'react-router-redux';
import { modifyQueryPart } from '../utils/routingHelper';

import { getMarkerStyleFromFeatureConsideringSelection,flaechenLabeler } from '../utils/kassenzeichenMappingTools';

import L from 'leaflet';


const position = [51.272399, 7.199712];
function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    kassenzeichen: state.kassenzeichen,
    mapping: state.mapping,
    routing: state.routing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
    mappingActions: bindActionCreators(MappingActions, dispatch),
    routingActions: bindActionCreators(RoutingActions  , dispatch),

  };
}
export class VerdisMap_ extends React.Component {
    constructor(props) {
        super(props);
        this.mapDblClick = this.mapDblClick.bind(this);
        this.featureClick = this.featureClick.bind(this);
        this.fitBounds = this.fitBounds.bind(this);
    }

    fitBounds() {
        this.props.mappingActions.fitAll();
    }

    mapDblClick(event) {
        if (this.props.authMode===APP_MODES.USER_PW) {
            const skipFitBounds=true;//event.originalEvent.shiftKey; 
            const latlon = event.latlng;
            const pos=(proj4(MappingConstants.proj4crs25832def, [latlon.lng, latlon.lat]));
            this.props.kassenzeichenActions.searchByPoint(pos[0],pos[1],!skipFitBounds);
        }
    }

    featureClick(event,feature,layer) {
        L.DomEvent.stopPropagation(event.originalEvent);
        event.originalEvent.preventDefault();
        
        this.props.featureClickHandler(event,feature,layer);
    }
    render() {
        const mapStyle = {
            height: this.props.height
        };


    let urlSearchParams = new URLSearchParams(this.props.routing.location.search);
     


    // <Ortho2014 /><StadtgrundKarteABK />
    // <OSM />
    return (
      <RoutedMap 
            key={"leafletRoutedMap"} 
            referenceSystem= {MappingConstants.crs25832}
            referenceSystemDefinition={MappingConstants.proj4crs25832def}
            ref={leafletMap => {this.leafletRoutedMap = leafletMap;}}
            layers="" 
            style={mapStyle} 
            center={position}  
            zoom={14} 
            ondblclick={this.mapDblClick} 
            doubleClickZoom={false} 
            locationChangedHandler={(location)=>{
                this.props.routingActions.push(
                    this.props.routing.location.pathname
                    + modifyQueryPart(this.props.routing.location.search, location));
            }}
            autoFitConfiguration={{
                autoFitBounds: this.props.mapping.autoFitBounds,
                autoFitMode: this.props.mapping.autoFitMode,
                autoFitBoundsTarget: this.props.mapping.autoFitBoundsTarget
            }}
            autoFitProcessedHandler={()=>this.props.mappingActions.setAutoFit(false)}
            urlSearchparams={urlSearchParams}
            boundingBoxChangedHandler={(bbox)=>this.props.mappingActions.mappingBoundsChanged(bbox)}
            >
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
       
        <FeatureCollectionDisplay
            key={
              JSON.stringify(this.props.mapping.featureCollection) + ""
            //   this.props.featureKeySuffixCreator() +
            //   "clustered:" +
            //   this.props.clustered +
            //   ".customPostfix:" +
            //   this.props.mapping.featureCollectionKeyPostfix
            }
            featureCollection={this.props.mapping.featureCollection}
            boundingBox={this.props.mapping.boundingBox}
            clusteringEnabled={false}
            style={this.props.featureCollectionStyle} 
            // labeler={flaechenLabeler}
            hoverer={this.props.hoverer}
            featureClickHandler={this.featureClick}
            mapRef={this.leafletRoutedMap}
            showMarkerCollection={true}
            markerStyle={getMarkerStyleFromFeatureConsideringSelection}
          />
          
      </RoutedMap>
    );
  }
}

//{m => { this.leafletRoutedMap = m; }}


const VerdisMap = connect(mapStateToProps, mapDispatchToProps,null,{ withRef: true })(VerdisMap_);

VerdisMap_.propTypes = {
  uiState: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  height: PropTypes.number,
  kassenzeichenActions: PropTypes.object,
  mappingActions: PropTypes.object.isRequired,
  featureClickHandler: PropTypes.func,
  featureCollectionStyle: PropTypes.func,
  authMode: PropTypes.string,
};


VerdisMap_.defaultProps = {
    authMode: APP_MODES.USER_PW
};

export default VerdisMap;