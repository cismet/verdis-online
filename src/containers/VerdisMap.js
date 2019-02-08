import PropTypes from 'prop-types';
import React from 'react';
import { connect } from "react-redux";
import 'proj4leaflet';
import proj4 from 'proj4';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as MappingActions } from '../redux/modules/mapping';
import { bindActionCreators } from 'redux'
import { RoutedMap, MappingConstants, FeatureCollectionDisplay } from 'react-cismap';
import { routerActions as RoutingActions } from 'react-router-redux';
import { modifyQueryPart } from '../utils/routingHelper';

import { getMarkerStyleFromFeatureConsideringSelection } from '../utils/kassenzeichenMappingTools';
import {Alert} from 'react-bootstrap';

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

    return (
      <RoutedMap 
            key={"leafletRoutedMap"} 
            referenceSystem= {MappingConstants.crs25832}
            referenceSystemDefinition={MappingConstants.proj4crs25832def}
            ref={leafletMap => {this.leafletRoutedMap = leafletMap;}}
            layers="" 
            style={mapStyle} 
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
            urlSearchParams={urlSearchParams}
            boundingBoxChangedHandler={(bbox)=>this.props.mappingActions.mappingBoundsChanged(bbox)}
            backgroundlayers={this.props.backgroundlayers || this.props.mapping.backgrounds[ this.props.mapping.selectedBackgroundIndex].layerkey}
            >

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
            showMarkerCollection={urlSearchParams.get('zoom')>=15}
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
  backgroundlayers: PropTypes.string, 
};


VerdisMap_.defaultProps = {
    authMode: APP_MODES.USER_PW
};

export default VerdisMap;