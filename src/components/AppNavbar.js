import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, Glyphicon }  from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const FontAwesome = require('react-fontawesome');
import * as UiStateActions from '../actions/uiStateActions';


function mapStateToProps(state) {
  return {
    uiState:state.uiState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch)
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

  render() {
    //console.log("Props:",this.props);
    return (
    <Navbar inverse style={{marginBottom:0}}>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to={{ pathname: '/' }}>
                <a >VerDIS</a>
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
              <NavItem className={(this.props.uiState.infoElementsEnabled)?"active":""} eventKey={2.1} href="#" onSelect={this.toggleInfo} ><FontAwesome name="info-circle" size="1x"/></NavItem>
              <NavItem className={(this.props.uiState.chartElementsEnabled)?"active":""} eventKey={2.2} href="#" onSelect={this.toggleCharts} ><FontAwesome name="pie-chart" size="1x"/></NavItem>
              <NavItem className={(this.props.uiState.kanalElementsEnabled)?"active":""} eventKey={2.3} href="#" onSelect={this.toggleKanal} ><FontAwesome name="tint" size="1x"/></NavItem>
              <NavItem className={(this.props.uiState.filterElementEnabled)?"active":""} eventKey={2.4} href="#" onSelect={this.toggleFilter} ><FontAwesome name="filter" size="1x"/></NavItem>
              <NavItem className={(this.props.uiState.detailElementsEnabled)?"active":""} eventKey={2.5} href="#" onSelect={this.toggleDetails} ><FontAwesome name="th-list" size="1x"/></NavItem>
              <LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
                <NavItem eventKey={1} href="#"><Glyphicon glyph="user" /> SteinbacherD102</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>        
    );
  }
}

const AppNavbar = connect(mapStateToProps,mapDispatchToProps)(AppNavbar_);
export default AppNavbar;

AppNavbar_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
