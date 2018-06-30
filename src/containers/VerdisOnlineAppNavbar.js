import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import Waiting from './Waiting';


const FontAwesome = require('react-fontawesome');

function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    auth: state.auth,
    routing: state.routing,
    kassenzeichen: state.kassenzeichen
};
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch),
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
    mappingActions: bindActionCreators(MappingActions, dispatch)

  };
}

export class AppNavbar_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleCharts = this.toggleCharts.bind(this);
    this.toggleKanal = this.toggleKanal.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.textsearchkassenzeichen = this.textsearchkassenzeichen.bind(this);
    this.fitBounds = this.fitBounds.bind(this);
  }
  toggleInfo() {
    this.props.uiActions.toggleInfoElements();
  }
  toggleCharts() {
    this.props.uiActions.toggleChartsElements();
  }
  toggleKanal() {
    this.props.uiActions.toggleKanalElements();
  }
  toggleFilter() {
    this.props.uiActions.toggleFilterElements();
  }
  toggleDetails() {
    this.props.uiActions.toggleDetailsElements();
  }
  showSettings() {
    this.props.uiActions.showSettings(true);
  }
  textsearchkassenzeichen() {
    this.props.uiActions.setKassenzeichenTextSearchVisible(true);
  }

  fitBounds() {
    this.props.mappingActions.fitAll();
  }


  render() {    
    return (<div>
      <Navbar  inverse style={{ marginBottom: 0 }}>
        <Navbar.Header>
          <Navbar.Brand>  
              <a style={{ cursor: "pointer"}} onClick={this.fitBounds}>VerDIS-online</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
         
          <Nav pullRight>
            <NavItem onClick={this.showSettings} eventKey={2.0} >Hilfe & Einstellungen</NavItem>
            <NavItem className={(this.props.uiState.infoElementsEnabled) ? "active" : ""} eventKey={2.1} href="#" onSelect={this.toggleInfo} ><FontAwesome name="info-circle" /></NavItem>
            <NavItem className={(this.props.uiState.chartElementsEnabled) ? "active" : ""} eventKey={2.2} href="#" onSelect={this.toggleCharts} ><FontAwesome name="pie-chart" /></NavItem>
            {/* <NavItem disabled className={(this.props.uiState.kanalElementsEnabled) ? "active" : ""} eventKey={2.3} href="#" onSelect={this.toggleKanal} ><FontAwesome name="tint" /></NavItem>
            <NavItem disabled className={(this.props.uiState.filterElementEnabled) ? "active" : ""} eventKey={2.4} href="#" onSelect={this.toggleFilter} ><FontAwesome name="filter" /></NavItem> */}
            <NavItem className={(this.props.uiState.detailElementsEnabled) ? "active" : ""} eventKey={2.5} href="#" onSelect={this.toggleDetails} ><FontAwesome name="th-list" /></NavItem>
            <NavItem eventKey={3} href="/#/" ><Glyphicon glyph="off" /></NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Waiting key={'Waiting.visible.' + this.props.uiState.waitingVisible + " ...message." + this.props.uiState.waitingMessage + " ...type." + this.props.uiState.waitingType} />
    </div>
    );
  }
}

const AppNavbar = connect(mapStateToProps, mapDispatchToProps)(AppNavbar_);
export default AppNavbar;

AppNavbar_.propTypes = {
  uiActions: PropTypes.object,
  kassenzeichenActions: PropTypes.object,
  uiState: PropTypes.object,
  routing: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mappingActions: PropTypes.object,
  auth: PropTypes.object
};
