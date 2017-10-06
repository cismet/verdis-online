import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getQueryObject
} from '../utils/routingHelper';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import KassenzeichenChartPanel from '../components/KassenzeichenChartPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';

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

let flaechenPanelRefs={};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class VersiegelteFlaechen_ extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
      this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
      this.checkRouteAndSearch = this.checkRouteAndSearch.bind(this);
      this.isFlaecheSelected = this.isFlaecheSelected.bind(this);
      this.flaechenPanelClick = this.flaechenPanelClick.bind(this);        
      this.flaechenMapClick = this.flaechenMapClick.bind(this);   
      this.flaechenPanelRefs={};   
    }

           
    
    componentWillMount() {
        this.checkRouteAndSearch();
    }
    componentDidUpdate() {
        this.checkRouteAndSearch();
    }


    checkRouteAndSearch() {
        if (this.props.uiState.searchForKassenzeichenVisible === false && this.props.uiState.searchInProgress === false) {
            if (typeof this.props.match.params.kassenzeichen !== "undefined" && parseInt(this.props.match.params.kassenzeichen,10) !== parseInt(this.props.kassenzeichen.kassenzeichennummer8,10)) {
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

    flaechenPanelClick(flaeche) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector((feature)=>{
            return (feature.properties.id===flaeche.id);
        });
        
         this.flaechenPanelRefs[flaeche.id].scrollToVisible();
        
    }

    flaechenMapClick(event,feature,layer) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector((testfeature)=>{
            return (testfeature.properties.id===feature.properties.id);
        });
        this.flaechenPanelRefs[feature.properties.id].scrollToVisible();
    }

    

    isFlaecheSelected(flaeche) {
        return (typeof this.props.mapping.featureCollection !== "undefined" 
            && this.props.mapping.featureCollection.length > 0 
            && typeof this.props.mapping.selectedIndex !== "undefined" 
            && this.props.mapping.featureCollection.length > this.props.mapping.selectedIndex 
            && typeof this.props.mapping.featureCollection[this.props.mapping.selectedIndex] !== "undefined" 
            && this.props.mapping.featureCollection[this.props.mapping.selectedIndex].properties.id === flaeche.id);
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

    let flaechen = [];
    let flComps = [];

    if (this.props.kassenzeichen.flaechen && this.props.uiState.detailElementsEnabled) {
      flaechen = this.props.kassenzeichen.flaechen.concat().sort((fa, fb) => {
        if (!isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
          return (+fa.flaechenbezeichnung) - (+fb.flaechenbezeichnung);
        } else if (!isNaN(fa.flaechenbezeichnung) && isNaN(fb.flaechenbezeichnung)) {
          return -1;
        } else if (isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
          return 1;
        } else {
          if (fa.flaechenbezeichnung < fb.flaechenbezeichnung) {
            return -1;
          }
          else {
            return 1;
          }
        }
      });
    }
    let kassenzeichenPanel;
    let kassenzeichenHorizontalChartsPanel;
    let kassenzeichenVerticalChartsPanel;

    if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
      kassenzeichenPanel = <KassenzeichenPanel onClick={this.kassenZeichenPanelClick} kassenzeichen={this.props.kassenzeichen} />;
    }
    if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
      kassenzeichenHorizontalChartsPanel = <KassenzeichenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="vertical" />;
      kassenzeichenVerticalChartsPanel = (
        <Flexbox height={"" + horizontalPanelHeight} minWidth={"" + horizontalPanelWidth}>
          <KassenzeichenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="horizontal" />
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
          <VerdisMap ref="verdismap" height={mapHeight} />
        </div>
      );
    }
    else if (this.props.uiState.width < switchToBottomWhenSmallerThan) {
      if (flaechen) {
        let i = 0;
        const that=this;
        flaechenPanelRefs={};
        flComps = flaechen.map(function (flaeche) {            
            const sel=that.isFlaecheSelected(flaeche);
            return (
                <Flexbox key={"flex" + (i++) + "." + flaeche.id} height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
                <FlaechenPanel ref={c => {that.flaechenPanelRefs[flaeche.id]=c;}} key={flaeche.id+"."+sel} selected={sel} flaechenPanelClickHandler={that.flaechenPanelClick} flaeche={flaeche} />
                </Flexbox>
            );
        });
      }
      return (
        <div>
          <VerdisMap ref="verdismap" height={mapHeight - horizontalPanelHeight - 25} />
          <Flexbox flexDirection="row" style={detailsStyle} >
            <Flexbox height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
              {kassenzeichenPanel}
            </Flexbox>
            {kassenzeichenVerticalChartsPanel}
            {flComps}
          </Flexbox>
        </div>
      );
    }
    else {
      if (flaechen) {
        const that=this;        
        this.flaechenPanelRefs={};        
        flComps = flaechen.map(function (flaeche) {
            const sel=that.isFlaecheSelected(flaeche);            
            return (
                <FlaechenPanel ref={c => {that.flaechenPanelRefs[flaeche.id]=c;}} key={flaeche.id+"."+sel} selected={sel} flaechenPanelClickHandler={that.flaechenPanelClick} flaeche={flaeche} />
            );
        });
      }

      return (
        <div>
          <div style={Object.assign({}, detailsStyle, { height: mapHeight + 'px', width: verticalPanelWidth + 'px', float: 'right' })}>
            {kassenzeichenPanel}
            {kassenzeichenHorizontalChartsPanel}
            {flComps}
          </div>
          <VerdisMap ref="verdismap" height={mapHeight} featureClickHandler={this.flaechenMapClick}/>
        </div>
      );
    }
  }
}

const VersiegelteFlaechen = connect(mapStateToProps,mapDispatchToProps)(VersiegelteFlaechen_);
export default VersiegelteFlaechen;

VersiegelteFlaechen_.propTypes = {
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
