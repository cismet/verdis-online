import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getQueryObject
} from '../utils/routingHelper';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import KassenzeichenFrontenChartPanel from '../components/KassenzeichenFrontenChartPanel';
import FrontenPanel from '../components/FrontenPanel';
import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { frontenStyle,getFrontenFeatureCollection } from '../utils/kassenzeichenMappingTools';
import AppNavbar from '../containers/Verdis2GoAppNavbar';



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
let frontenPanelRefs={};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class ESW_ extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
      this.frontenPanelClick = this.frontenPanelClick.bind(this);
      this.checkRouteAndSearch = this.checkRouteAndSearch.bind(this);
      this.isFrontSelected = this.isFrontSelected.bind(this);
      this.frontenMapClick = this.frontenMapClick.bind(this);   
      this.frontenPanelRefs={};   
    }

           
    
    componentWillMount() {
        this.checkRouteAndSearch();
    }
    componentDidUpdate() {
        this.checkRouteAndSearch();
    }


    checkRouteAndSearch() {
        
        if (this.props.uiState.mode!==APP_MODES.ESW) {
            this.props.uiStateActions.setMode(APP_MODES.ESW);
            if (this.props.kassenzeichen.id!==-1) {
                this.props.mappingActions.setFeatureCollection(getFrontenFeatureCollection(this.props.kassenzeichen));
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

    frontenPanelClick(front) {
       this.props.mappingActions.setSelectedFeatureIndexWithSelector((feature)=>{
            return (feature.properties.id===front.id);
        });     
         this.frontenPanelRefs[front.id].scrollToVisible();
    }

    frontenMapClick(event,feature) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector((testfeature)=>{
            return (testfeature.properties.id===feature.properties.id);
        });
        this.frontenPanelRefs[feature.properties.id].scrollToVisible();
    }

    

    isFrontSelected(front) {
        return (typeof this.props.mapping.featureCollection !== "undefined" 
            && this.props.mapping.featureCollection.length > 0 
            && typeof this.props.mapping.selectedIndex !== "undefined" 
            && this.props.mapping.featureCollection.length > this.props.mapping.selectedIndex 
            && typeof this.props.mapping.featureCollection[this.props.mapping.selectedIndex] !== "undefined" 
            && this.props.mapping.featureCollection[this.props.mapping.selectedIndex].properties.id === front.id);
    }

  render() {
    let map;
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

    let fronten = [];
    let frComps = [];

    if (this.props.kassenzeichen.fronten && this.props.uiState.detailElementsEnabled) {
        fronten = this.props.kassenzeichen.fronten.concat().sort((fa, fb) => {
        if (!isNaN(fa.nummer) && !isNaN(fb.nummer)) {
          return (+fa.nummer) - (+fb.nummer);
        } else if (!isNaN(fa.nummer) && isNaN(fb.nummer)) {
          return -1;
        } else if (isNaN(fa.nummer) && !isNaN(fb.nummer)) {
          return 1;
        } else {
          if (fa.nummer < fb.nummer) {
            return -1;
          }
          else {
            return 1;
          }
        }
      });
    }
    let kassenzeichenPanel;
    let kassenzeichenFrontenHorizontalChartsPanel;
    let kassenzeichenFrontenVerticalChartsPanel;

    if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
      kassenzeichenPanel = <KassenzeichenPanel onClick={this.kassenZeichenPanelClick} kassenzeichen={this.props.kassenzeichen} />;
    }
    if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
      kassenzeichenFrontenHorizontalChartsPanel = <KassenzeichenFrontenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="vertical" />;
      kassenzeichenFrontenVerticalChartsPanel = (
        <Flexbox height={"" + horizontalPanelHeight} minWidth={"" + horizontalPanelWidth}>
          <KassenzeichenFrontenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="horizontal" />
        </Flexbox>
      );
    }

    let nothingEnabled = !this.props.uiState.infoElementsEnabled &&
      !this.props.uiState.chartElementsEnabled &&
      !this.props.uiState.kanalElementsEnabled &&
      !this.props.uiState.filterElementEnabled &&
      !this.props.uiState.detailElementsEnabled;

    if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
      return (
        <div>
          <VerdisMap ref="verdismap" height={mapHeight} featureClickHandler={this.frontenMapClick}/>
        </div>
      );
    }
    else if (this.props.uiState.width < switchToBottomWhenSmallerThan) {
      if (fronten) {
        let i = 0;
        const that=this;
        frontenPanelRefs={};
        frComps = fronten.map(function (front) {            
            const sel=that.isFrontSelected(front);
            return (
                <Flexbox key={"flex" + (i++) + "." + front.id} height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
                <FrontenPanel ref={c => {that.frontenPanelRefs[front.id]=c;}} key={front.id+"."+sel} selected={sel} frontenPanelClickHandler={that.frontenPanelClick} front={front} orientation="horizontal"/>
                </Flexbox>
            );
        });
      }
      map = (
        <div>
          <VerdisMap ref="verdismap" height={mapHeight - horizontalPanelHeight - 25} featureClickHandler={this.frontenMapClick} featureCollectionStyle={frontenStyle}/>
          <Flexbox flexDirection="row" style={detailsStyle} >
            <Flexbox height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
              {kassenzeichenPanel}
            </Flexbox>
            {kassenzeichenFrontenVerticalChartsPanel}
            {frComps}
          </Flexbox>
        </div>
      );
    }
    else {
      if (fronten) {
        const that=this;        
        this.frontenPanelRefs={};        
        frComps = fronten.map(function (front) {
            const sel=that.isFrontSelected(front); 
            return (
                <FrontenPanel ref={c => {that.frontenPanelRefs[front.id]=c;}} key={front.id+"."+sel} selected={sel} frontenPanelClickHandler={that.frontenPanelClick} front={front} orientation="vertical"/>
            );
        });
      }

      map = (
        <div>
          <div style={Object.assign({}, detailsStyle, { height: mapHeight + 'px', width: verticalPanelWidth + 'px', float: 'right' })}>
            {kassenzeichenPanel}
            {kassenzeichenFrontenHorizontalChartsPanel}
            {frComps}
          </div>
          <VerdisMap ref="verdismap" height={mapHeight} featureClickHandler={this.frontenMapClick} featureCollectionStyle={frontenStyle}/>
        </div>
      );
    }
    return (
        <div>
            <AppNavbar />
            {map}
        </div>
      );
  }
}

const ESW = connect(mapStateToProps,mapDispatchToProps)(ESW_);
export default ESW;

ESW_.propTypes = {
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
