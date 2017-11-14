import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getQueryObject
} from '../utils/routingHelper';
import KassenzeichenPanel from '../components/KassenzeichenPanel';

import KassenzeichenGeomInfoPanel from '../components/KassenzeichenGeomInfoPanel';
import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { kassenzeichenGeometrienStyle,getKassenzeichenInfoFeatureCollection } from '../utils/kassenzeichenMappingTools';



function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    kassenzeichen: state.kassenzeichen,
    mapping: state.mapping,
    routing: state.routing,
    auth: state.auth
};
}

function mapDispatchToProps(dispatch) {
  return {
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
    uiStateActions: bindActionCreators(UiStateActions, dispatch),
    mappingActions: bindActionCreators(MappingActions, dispatch),
    
  };
}

//eslint-disable-next-line
let kasszGeomPanelRefs={};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class Info_ extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
      this.kasszGeomPanelClick = this.kasszGeomPanelClick.bind(this);
      this.checkRouteAndSearch = this.checkRouteAndSearch.bind(this);
      this.isGeomSelected = this.isGeomSelected.bind(this);
      this.kasszGeomMapClick = this.kasszGeomMapClick.bind(this);   
      this.kassenzGeomPanelRefs={};   
    }

           
    
    componentWillMount() {
        this.checkRouteAndSearch();
    }
    componentDidUpdate() {
        this.checkRouteAndSearch();
    }


    checkRouteAndSearch() {
        
        if (this.props.uiState.mode!==APP_MODES.INFO) {
            this.props.uiStateActions.setMode(APP_MODES.INFO);
            if (this.props.kassenzeichen.id!==-1) {
                this.props.mappingActions.setFeatureCollection(getKassenzeichenInfoFeatureCollection(this.props.kassenzeichen));
                this.props.mappingActions.setSelectedFeatureIndex(null);
            }            
        }
        
        if (this.props.uiState.searchForKassenzeichenVisible === false && this.props.uiState.searchInProgress === false) {
            if (typeof this.props.match.params.kassenzeichen !== "undefined" && parseInt(this.props.match.params.kassenzeichen,10) !== parseInt(this.props.kassenzeichen.kassenzeichennummer8,10) ) {
                if (this.props.auth.user !== null) {

                    let queryO = getQueryObject(this.props.routing.location.search);

                    if (typeof queryO.lat === "undefined" ||
                        typeof queryO.lng === "undefined" ||
                        typeof queryO.zoom === "undefined") {

                        this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen, true);
                    }
                    else {
                        this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen, false);
                    }
                }
                else {
                    this.props.uiStateActions.setKassenzeichenToSearchFor(this.props.match.params.kassenzeichen);
                }

            } else {
                //console.log("SKIP");
            }
        }
    }

    kassenZeichenPanelClick() {
        this.refs.verdismap.getWrappedInstance().fitBounds();
    }

    kasszGeomPanelClick(geom) {
       this.props.mappingActions.setSelectedFeatureIndexWithSelector((feature)=>{
            return (feature.properties.id===geom.id);
        });     
         this.kasszGeomPanelRefs[geom.id].scrollToVisible();
    }

    kasszGeomMapClick(event,feature,layer) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector((testfeature)=>{
            return (testfeature.properties.id===feature.properties.id);
        });
        this.kasszGeomPanelRefs[feature.properties.id].scrollToVisible();
    }

    

    isGeomSelected(geom) {
        return (typeof this.props.mapping.featureCollection !== "undefined" 
            && this.props.mapping.featureCollection.length > 0 
            && typeof this.props.mapping.selectedIndex !== "undefined" 
            && this.props.mapping.featureCollection.length > this.props.mapping.selectedIndex 
            && typeof this.props.mapping.featureCollection[this.props.mapping.selectedIndex] !== "undefined" 
            && this.props.mapping.featureCollection[this.props.mapping.selectedIndex].properties.id === geom.id);
    }

  render() {
    let mapHeight;
    if (this.props.uiState.height) {
      mapHeight = this.props.uiState.height - 55;
    }
    else {
      mapHeight = 50;
    }

    const detailsStyle = {
      'backgroundColor': '#EEE',
      'padding': '5px 5px 5px 5px',
      'overflow': 'auto',
    };

    let kassenzGeoms = [];
    let kassenzGeomDetailComps = [];

    //sort the geoms by name
    if (this.props.kassenzeichen.kassenzeichen_geometrien && this.props.uiState.detailElementsEnabled) {
        kassenzGeoms = this.props.kassenzeichen.kassenzeichen_geometrien.sort((ga, gb) => {
          if (ga.name < gb.name) {
            return -1;
          }
          else {
            return 1;
          }
        
      });
    }

    let kassenzeichenPanel;

    if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
      kassenzeichenPanel = <KassenzeichenPanel onClick={this.kassenZeichenPanelClick} kassenzeichen={this.props.kassenzeichen} />;
    }
  

    let nothingEnabled = !this.props.uiState.infoElementsEnabled &&
      !this.props.uiState.chartElementsEnabled &&
      !this.props.uiState.kanalElementsEnabled &&
      !this.props.uiState.filterElementEnabled &&
      !this.props.uiState.detailElementsEnabled;

    if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
      return (
        <div>
          <VerdisMap ref="verdismap" height={mapHeight} featureClickHandler={this.kasszGeomnMapClick}/>
        </div>
      );
    }
    else if (this.props.uiState.width < switchToBottomWhenSmallerThan) {
      if (kassenzGeoms) {
        let i = 0;
        const that=this;
        this.kasszGeomPanelRefs={};
        kassenzGeomDetailComps = kassenzGeoms.map(function (g) {            
            const sel=that.isGeomSelected(g);
            return (
                <Flexbox key={"flex" + (i++) + "." + g.id} height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
                <KassenzeichenGeomInfoPanel ref={c => {that.kasszGeomPanelRefs[g.id]=c;}} key={g.id+"."+sel} selected={sel} kasszGeomPanelClickHandler={that.kasszGeomPanelClick} kasszGeom={g} orientation="horizontal"/>
                </Flexbox>
            );
        });
      }
      return (
        <div>
          <VerdisMap ref="verdismap" height={mapHeight - horizontalPanelHeight - 25} featureClickHandler={this.kasszGeomMapClick} featureCollectionStyle={kassenzeichenGeometrienStyle}/>
          <Flexbox flexDirection="row" style={detailsStyle} >
            <Flexbox height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
              {kassenzeichenPanel}
            </Flexbox>
            {kassenzGeomDetailComps}
          </Flexbox>
        </div>
      );
    }
    else {
      if (kassenzGeoms) {
        const that=this;        
        this.kasszGeomPanelRefs={};        
        kassenzGeomDetailComps = kassenzGeoms.map(function (g) {
            const sel=that.isGeomSelected(g); 
            return (
                <KassenzeichenGeomInfoPanel ref={c => {that.kasszGeomPanelRefs[g.id]=c;}} key={g.id+"."+sel} selected={sel} kasszGeomPanelClickHandler={that.kasszGeomPanelClick} kasszGeom={g} orientation="vertical"/>
            );
        });
      }

      return (
        <div>
          <div style={Object.assign({}, detailsStyle, { height: mapHeight + 'px', width: verticalPanelWidth + 'px', float: 'right' })}>
            {kassenzeichenPanel}
            {kassenzGeomDetailComps}
          </div>
          <VerdisMap ref="verdismap" height={mapHeight} featureClickHandler={this.kasszGeomMapClick} featureCollectionStyle={kassenzeichenGeometrienStyle}/>
        </div>
      );
    }
  }
}

const ESW = connect(mapStateToProps,mapDispatchToProps)(Info_);
export default ESW;

Info_.propTypes = {
  ui: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  uiState: PropTypes.object,
  match: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  kassenzeichenActions: PropTypes.object.isRequired,
  uiStateActions: PropTypes.object.isRequired,
  mappingActions: PropTypes.object.isRequired,
};
