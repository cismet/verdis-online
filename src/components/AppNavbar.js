import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, Glyphicon }  from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const FontAwesome = require('react-fontawesome');
import * as UiStateActions from '../actions/uiStateActions';


function mapStateToProps(state) {
  return {
    st:state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UiStateActions, dispatch)
  };
}

export class AppNavbar_ extends React.Component {
  render() {
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
            <Nav pullRight >
              <NavItem eventKey={2.0} >Info:</NavItem>
              <NavItem active= "true" eventKey={2.1} href="#"><FontAwesome name="info-circle" size="1x"/></NavItem>
              <NavItem active= "true" eventKey={2.2} href="#"><FontAwesome name="pie-chart" size="1x"/></NavItem>
              <NavItem eventKey={2.3} href="#"><FontAwesome name="tint" size="1x"/></NavItem>
              <NavItem eventKey={2.4} href="#"><FontAwesome name="filter" size="1x"/></NavItem>
              <NavItem active= "true" eventKey={2.5} href="#"><FontAwesome name="th-list" size="1x"/></NavItem>
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
  st:PropTypes.object
};
