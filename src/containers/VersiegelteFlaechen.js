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

function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    kassenzeichen: state.kassenzeichen,
    routing: state.routing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),

  };
}


const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class VersiegelteFlaechen_ extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
  }
  
  componentDidMount() {
      if (typeof this.props.match.params.kassenzeichen  != "undefined" && parseInt(this.props.match.params.kassenzeichen) !== parseInt(this.props.kassenzeichen.kassenzeichennummer8)) {
        let queryO=getQueryObject(this.props.routing.location.search);

        if (typeof queryO.lat  == "undefined" ||
                typeof queryO.lng   == "undefined" ||
                typeof queryO.zoom  == "undefined"  ) {

            this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen, true);
        }
        else {
            this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen,false);
        }

        
      } else {
          console.log("SKIP");
      }

  }
  componentDidUpdate() {
       console.log(this.props.match);
    //    if (this.props.uiState.waitingVisible==false && parseInt(this.props.match.params.kassenzeichen) !== parseInt(this.props.kassenzeichen.kassenzeichennummer8)) {
    //               console.log("REFRESH");

    //    let queryO=getQueryObject(this.props.routing.location.search);

    //     if (typeof queryO.lat  == "undefined" ||
    //             typeof queryO.lng   == "undefined" ||
    //             typeof queryO.zoom  == "undefined"  ) {

    //         this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen, true);
    //     }
    //     else {
    //         this.props.kassenzeichenActions.searchByKassenzeichen(this.props.match.params.kassenzeichen,false);
    //     }

        
    //   } else {
    //       console.log("SKIP");
    //   }

  }



  flaechenPanelClick() {
      this.refs.verdismap.getWrappedInstance().fitBounds()
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
      kassenzeichenPanel = <KassenzeichenPanel onClick={this.flaechenPanelClick} kassenzeichen={this.props.kassenzeichen} />;
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
        flComps = flaechen.map(function (flaeche) {
          return (
            <Flexbox key={"flex" + (i++) + "." + flaeche.id} height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
              <FlaechenPanel key={flaeche.id} flaeche={flaeche} />
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
        flComps = flaechen.map(function (flaeche) {
          return (
            <FlaechenPanel key={flaeche.id} flaeche={flaeche} />
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
          <VerdisMap ref="verdismap" height={mapHeight} />
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
  uiState: PropTypes.object

};
