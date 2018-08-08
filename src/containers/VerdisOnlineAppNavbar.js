import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import Waiting from './Waiting';
import {Icon} from 'react-fa';

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
    uiStateActions: bindActionCreators(UiStateActions, dispatch),
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
    this.downloadFEB = this.downloadFEB.bind(this);
    this.textsearchkassenzeichen = this.textsearchkassenzeichen.bind(this);
    this.fitBounds = this.fitBounds.bind(this);
  }
  toggleInfo() {
    this.props.uiStateActions.toggleInfoElements();
  }
  toggleCharts() {
    this.props.uiStateActions.toggleChartsElements();
  }
  toggleKanal() {
    this.props.uiStateActions.toggleKanalElements();
  }
  toggleFilter() {
    this.props.uiStateActions.toggleFilterElements();
  }
  toggleDetails() {
    this.props.uiStateActions.toggleDetailsElements();
  }
  showSettings() {
    this.props.uiStateActions.showSettings(true);
  }
  downloadFEB() {
    
    this.props.kassenzeichenActions.getFEBByStac(this.props.auth.stac, (blob) => {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "FEB."+this.props.kassenzeichen.kassenzeichennummer+".STAC."+this.props.auth.stac+".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    });
  }
  textsearchkassenzeichen() {
    this.props.uiStateActions.setKassenzeichenTextSearchVisible(true);
  }

  fitBounds() {
    this.props.mappingActions.fitAll();
  }


  render() {    
    return (<div>
      <Navbar  inverse style={{ marginBottom: 0 }}>
        <Navbar.Header>
          <Navbar.Brand>  
              <a id="verdis_online_brand" style={{ cursor: "pointer"}} onClick={this.fitBounds}>VerDIS-online</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        
          <Nav pullRight>
            <NavItem id="navitem_showSettings" onClick={this.showSettings} eventKey={2.0} >Hilfe & Einstellungen</NavItem>
            <NavItem id="navitem_downloadFEB" onClick={this.downloadFEB} eventKey={2.3} ><Icon name="file-pdf-o" /></NavItem>
            <NavItem id="navitem_infoElementsEnabled" className={(this.props.uiState.infoElementsEnabled) ? "active" : ""} eventKey={2.1} href="#" onSelect={this.toggleInfo} ><Icon name="info-circle" /></NavItem>
            <NavItem id="navitem_chartElementsEnabled" className={(this.props.uiState.chartElementsEnabled) ? "active" : ""} eventKey={2.2} href="#" onSelect={this.toggleCharts} ><Icon name="pie-chart" /></NavItem>
            {/* <NavItem disabled className={(this.props.uiState.kanalElementsEnabled) ? "active" : ""} eventKey={2.3} href="#" onSelect={this.toggleKanal} ><FontAwesome name="tint" /></NavItem>
            <NavItem disabled className={(this.props.uiState.filterElementEnabled) ? "active" : ""} eventKey={2.4} href="#" onSelect={this.toggleFilter} ><FontAwesome name="filter" /></NavItem> */}
            <NavItem id="navitem_detailElementsEnabled" className={(this.props.uiState.detailElementsEnabled) ? "active" : ""} eventKey={2.5} href="#" onSelect={this.toggleDetails} ><Icon name="th-list" /></NavItem>
            <NavItem id="navitem_logout" eventKey={3} href="/#/" ><Icon name="power-off" /></NavItem>
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
  uiStateActions: PropTypes.object,
  kassenzeichenActions: PropTypes.object,
  uiState: PropTypes.object,
  routing: PropTypes.object,
  kassenzeichen: PropTypes.object,
  mappingActions: PropTypes.object,
  auth: PropTypes.object
};