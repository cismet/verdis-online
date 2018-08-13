import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import KassenzeichenFlaechenChartPanel from '../components/KassenzeichenFlaechenChartPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import Waiting from './Waiting';

import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as AuthActions } from '../redux/modules/auth';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { flaechenStyle } from '../utils/kassenzeichenMappingTools';
import AppNavbar from '../containers/VerdisOnlineAppNavbar';
import VerdisOnlineModalHelpComponent from '../components/VerdisOnlineModalHelpComponent';

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
    authActions: bindActionCreators(AuthActions, dispatch),
    
  };
}

  
//eslint-disable-next-line
let flaechenPanelRefs={};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class KassenzeichenViewer_ extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
            this.kassenZeichenPanelD3Click = this.kassenZeichenPanelD3Click.bind(this);
            this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
            this.isFlaecheSelected = this.isFlaecheSelected.bind(this);
            this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
            this.flaechenMapClick = this.flaechenMapClick.bind(this);
            this.flaechenPanelRefs = {};
        }



        //   componentWillMount() {
        //   }
        //   componentDidUpdate() {
        //   }

        componentDidMount() {
            if (this.props.auth.stac && this.props.auth.succesfullLogin===false){
                this.props.authActions.setLoginInProgress();
                this.props.uiStateActions.showInfo("Kassenzeichen wird wieder geladen");
                this.props.kassenzeichenActions.getKassenzeichenbySTAC(this.props.auth.stac, (success)=> {
                    if (success===true) {
                        setTimeout(()=>{
                            this.props.uiStateActions.showWaiting(false);
                            this.props.mappingActions.fitAll();
                        },300);
                        }
                });
            }
            else {
                this.props.mappingActions.fitAll();
            }
        }

        kassenZeichenPanelClick() {
            this.refs.verdismap.getWrappedInstance().fitBounds();
        }

        kassenZeichenPanelD3Click() {
            this.props.kassenzeichenActions.openD3();
        }

        flaechenPanelClick(flaeche) {
            if(this.isFlaecheSelected(flaeche)===true) {
                this.props.mappingActions.fitSelectedFeatureBounds();
            }  
            else {
                this.props.mappingActions.setSelectedFeatureIndexWithSelector((feature) => {
                    return (feature.properties.id === flaeche.id);
                });
                this.flaechenPanelRefs[flaeche.id].scrollToVisible();
            }
        }
  
      flaechenMapClick(event,feature) {
        if(this.isFlaecheSelected(feature.properties)===true) {
            this.props.mappingActions.fitSelectedFeatureBounds();
        }  
        else {
            this.props.mappingActions.setSelectedFeatureIndexWithSelector((testfeature)=>{
                return (testfeature.properties.id===feature.properties.id);
            });
            this.flaechenPanelRefs[feature.properties.id].scrollToVisible();
        }
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
        let kassenzeichenHorizontalFlaechenChartsPanel;
        let kassenzeichenVerticalFlaechenChartsPanel;
    
        if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
          kassenzeichenPanel = <KassenzeichenPanel onClick={this.kassenZeichenPanelClick} d3Enabled={this.props.uiState.d3Available} d3Click={this.kassenZeichenPanelD3Click} kassenzeichen={this.props.kassenzeichen} />;
        }
        if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
          kassenzeichenHorizontalFlaechenChartsPanel = <KassenzeichenFlaechenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="vertical" />;
          kassenzeichenVerticalFlaechenChartsPanel = (
            <Flexbox height={"" + horizontalPanelHeight} minWidth={"" + horizontalPanelWidth}>
              <KassenzeichenFlaechenChartPanel kassenzeichen={this.props.kassenzeichen} orientation="horizontal" />
            </Flexbox>
          );
        }
    
        let nothingEnabled = !this.props.uiState.infoElementsEnabled &&
          !this.props.uiState.chartElementsEnabled &&
          !this.props.uiState.kanalElementsEnabled &&
          !this.props.uiState.filterElementEnabled &&
          !this.props.uiState.detailElementsEnabled;
    
        if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
          map = (
            <div>
              <VerdisMap ref="verdismap" authMode={APP_MODES.STAC} height={mapHeight} featureClickHandler={this.flaechenMapClick}/>
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
                    <Flexbox key={"flex" + (i++) + "." + flaeche.id} height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
                    <FlaechenPanel ref={c => {that.flaechenPanelRefs[flaeche.id]=c;}} key={flaeche.id+"."+sel} selected={sel} flaechenPanelClickHandler={that.flaechenPanelClick} flaeche={flaeche} />
                    </Flexbox>
                );
            });
          }
          map = (
            <div>
              <VerdisMap ref="verdismap" authMode={APP_MODES.STAC} height={mapHeight - horizontalPanelHeight - 25} featureClickHandler={this.flaechenMapClick} featureCollectionStyle={flaechenStyle}/>
              <Flexbox flexDirection="row" style={detailsStyle} >
                <Flexbox height={""+horizontalPanelHeight} minWidth={""+horizontalPanelWidth}>
                  {kassenzeichenPanel}
                </Flexbox>
                {kassenzeichenVerticalFlaechenChartsPanel}
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
    
          map=(
            <div>
              <div style={Object.assign({}, detailsStyle, { height: mapHeight + 'px', width: verticalPanelWidth + 'px', float: 'right' })}>
                {kassenzeichenPanel}
                {kassenzeichenHorizontalFlaechenChartsPanel}
                {flComps}
              </div>
              <VerdisMap ref="verdismap" authMode={APP_MODES.STAC} height={mapHeight} featureClickHandler={this.flaechenMapClick} featureCollectionStyle={flaechenStyle}/>
            </div>
          );
        }
    
        return (
            <div>
                <AppNavbar />
                <Waiting key={'Waiting.visible.' + this.props.uiState.waitingVisible + " ...message." + this.props.uiState.waitingMessage + " ...type." + this.props.uiState.waitingType} />
                <VerdisOnlineModalHelpComponent />
                {map}
            </div>
          );
      }

}


const KassenzeichenViewer = connect(mapStateToProps,mapDispatchToProps)(KassenzeichenViewer_);
export default KassenzeichenViewer;

KassenzeichenViewer_.propTypes = {
  ui: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mapping: PropTypes.object,
  uiState: PropTypes.object,
  auth: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  kassenzeichenActions: PropTypes.object.isRequired,
  uiStateActions: PropTypes.object.isRequired,
  mappingActions: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
};
