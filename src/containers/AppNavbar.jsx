import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const FontAwesome = require('react-fontawesome');
import * as UiStateActions from '../actions/uiStateActions';
import * as MappingActions from '../actions/mappingActions';
import * as KassenzeichenActions from '../actions/kassenzeichenActions';
import Settings from './Settings.jsx';
import Waiting from './Waiting.jsx';
import Login from './Login.jsx';
import SearchKassenzeichen from './SearchKassenzeichen.jsx';

function mapStateToProps(state) {
  return {
    uiState: state.uiState
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
    this.searchkassenzeichen = this.searchkassenzeichen.bind(this);
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
  searchkassenzeichen() {
    this.props.uiActions.showKassenzeichenSearch(true);
  }

  fitBounds() {
    this.props.mappingActions.fitBounds();
  }


  render() {
    let username = "nicht angemeldet";
    if (this.props.uiState.user != null) {
      username = this.props.uiState.user;
    }

    return (<div>
      <Navbar onClick={this.fitBounds} inverse style={{ marginBottom: 0 }}>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to={{ pathname: '/' }}>
              <a onClick={this.searchkassenzeichen}>VerDIS</a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavDropdown eventKey={1} title="Versiegelte Flächen" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Versiegelte Flächen</MenuItem>
              <MenuItem eventKey={1.2}>ESW</MenuItem>
              <MenuItem eventKey={1.3}>Info</MenuItem>
              <MenuItem eventKey={1.4}>Versickerung</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2.0} >Info:</NavItem>
            <NavItem className={(this.props.uiState.infoElementsEnabled) ? "active" : ""} eventKey={2.1} href="#" onSelect={this.toggleInfo} ><FontAwesome name="info-circle" /></NavItem>
            <NavItem className={(this.props.uiState.chartElementsEnabled) ? "active" : ""} eventKey={2.2} href="#" onSelect={this.toggleCharts} ><FontAwesome name="pie-chart" /></NavItem>
            <NavItem disabled className={(this.props.uiState.kanalElementsEnabled) ? "active" : ""} eventKey={2.3} href="#" onSelect={this.toggleKanal} ><FontAwesome name="tint" /></NavItem>
            <NavItem disabled className={(this.props.uiState.filterElementEnabled) ? "active" : ""} eventKey={2.4} href="#" onSelect={this.toggleFilter} ><FontAwesome name="filter" /></NavItem>
            <NavItem className={(this.props.uiState.detailElementsEnabled) ? "active" : ""} eventKey={2.5} href="#" onSelect={this.toggleDetails} ><FontAwesome name="th-list" /></NavItem>
            <NavItem eventKey={3} href="#" onSelect={this.showSettings}><Glyphicon glyph="user" /> {username}</NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login key={'Login.hidden.' + this.props.uiState.succesfullLogin} />
      <SearchKassenzeichen key={'SearchKassenzeichen.hidden.' + this.props.uiState.searchKassenzeichenVisible} />

      <Settings key={'Settings.visible.' + this.props.uiState.settingsVisible} />
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
  uiState: PropTypes.object
};
