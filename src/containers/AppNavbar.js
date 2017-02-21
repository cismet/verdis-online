import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, Glyphicon }  from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const FontAwesome = require('react-fontawesome');
import * as UiStateActions from '../actions/uiStateActions';
import * as KassenzeichenActions from '../actions/kassenzeichenActions';
import Settings from './Settings';

/**
 * mapStateToProps is just a helper function to have a simpler way to access your state properties,
 * e.g. in the  component access 
 * 
 * @param {type} stateYes, it is correct. 
 */
function mapStateToProps(state) {
  return {
    uiState:state.uiState
  };
}

/**
 * normally you have to write dispatch(anActionCreator())
 * With bindActionCreators you can use the action directly, e.g.
 * this.props.uiActions.toggleChartsElements();
 * 
 * @param {type} dispatch
 * @return {mapDispatchToProps.AppNavbarAnonym$3}
 * 
 */

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch),
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch)
  }; 
}

let i=0;
const mockz=[60670411,60432515,61156717];

/** 
 * Conceptually, components are like JavaScript functions. 
 * They accept arbitrary inputs (called "props") and return React elements 
 * describing what should appear on the screen.´
 */
//@connect(mapStateToProps, mapDispatchToProps)
export class AppNavbar_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    /**
     * React's ES6 classes have no autobinding. 
     * Javascript's ES6 classes have no autobinding neither.
     * You'll have to explicitly use .bind(this) or arrow functions =>.
     * 
     * Calling a function from a class doesn't mean it's being called with the 
     * context of the object that created that function!
     * 
     * this.toggleInfo.bind('something') returns a new function, in which references 
     * to this will refer to 'something'. -> toggleInfo.this = AppNavbar_.this !
     * This is a way of saving the current value of this,  which is in scope during the 
     * call to the constructor, so that it can be used later when the function is called.
     * 
     * If your functions don't require access to the state of your component, 
     * then sure, you don't need to bind them.
     * 
     * 
     */
    //this.toggleInfo = this.toggleInfo.bind(this);
    //this.toggleCharts = this.toggleCharts.bind(this);
    //this.toggleKanal = this.toggleKanal.bind(this);
    //this.toggleFilter = this.toggleFilter.bind(this);
    //this.toggleDetails = this.toggleDetails.bind(this);
    //this.showSettings = this.showSettings.bind(this);
    // No need to bind to this! showSettingsWithTimeout is defined as arrow function!
    //this.showSettingsWithTimeout = this.showSettingsWithTimeout.bind(this);
    //this.searchkassenzeichen=this.searchkassenzeichen.bind(this);
    this.save=this.save.bind(this);
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
  showSettings(){
      this.props.uiActions.showSettings(true);
  }
  searchkassenzeichen() {   
    this.props.kassenzeichenActions.searchByKassenzeichen(mockz[i]);
    if (i===2){
      i=0;
    }
    else {
      i=i+1;
    }
  }
  
 save() {
    this.props.uiActions.saveFuelSavings();
  }
  
  
  render() {
    //console.log("Props:",this.props);
    // eventKey ?! -> https://github.com/react-bootstrap/react-bootstrap/issues/320#issuecomment-260098771 
    // Comments in JSX (OMFG) -> http://wesbos.com/react-jsx-comments/ 
    return (<div>
    <Navbar inverse style={{marginBottom:0}}>
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
              <NavItem className={(this.props.uiState.infoElementsEnabled)?"active":""} eventKey={2.1} href="#" onSelect={this.toggleInfo} ><FontAwesome name="info-circle" /></NavItem>
              <NavItem className={(this.props.uiState.chartElementsEnabled)?"active":""} eventKey={2.2} href="#" onSelect={this.toggleCharts} ><FontAwesome name="pie-chart" /></NavItem>
              <NavItem disabled className={(this.props.uiState.kanalElementsEnabled)?"active":""} eventKey={2.3} href="#" onSelect={this.toggleKanal} ><FontAwesome name="tint" /></NavItem>
              <NavItem disabled className={(this.props.uiState.filterElementEnabled)?"active":""} eventKey={2.4} href="#" onSelect={this.toggleFilter} ><FontAwesome name="filter" /></NavItem>
              <NavItem className={(this.props.uiState.detailElementsEnabled)?"active":""} eventKey={2.5} href="#" onSelect={this.toggleDetails} ><FontAwesome name="th-list" /></NavItem>
              <NavItem eventKey={3} href="#" onSelect={this.props.showSettings}><Glyphicon glyph="user" /> SteinbacherD102</NavItem>
              <NavItem eventKey={4} href="#" onSelect={this.save}><Glyphicon glyph="user" />SAVE</NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        <Settings key={this.props.uiState.settingsVisible}/>       
</div>
    );
  }
}

const AppNavbar = connect(mapStateToProps,mapDispatchToProps)(AppNavbar_);
//const AppNavbar = connect(mapStateToProps,uiActions)(AppNavbar_);
export default AppNavbar;


AppNavbar_.propTypes = {
  uiActions: PropTypes.object,
  kassenzeichenActions: PropTypes.object,
  //uiState: PropTypes.object,
  //incrementAsync: PropTypes.func
};
