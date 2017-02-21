import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal , Button, Checkbox }  from 'react-bootstrap';
import * as UiStateActions from '../actions/uiStateActions';


/**
 * Components are supposed to be concerned only with displaying stuff.
 * The only place they are supposed to get information from is their props.
 * 
 * @param {type} state
 * @return {mapStateToProps.SettingsAnonym$1}
 */
function mapStateToProps(state) {
  return {
    uiState:state.uiState
  };
}

/**
* If you use Redux with React, react-redux will provide you with the dispatch function 
* so you can call it directly, too.
* 
* In a *connected* component you usually don’t have access to the store itself, 
* but get either dispatch() or specific action creators injected as props.
 * 
 * @param {type} dispatch
 * @return {mapDispatchToProps.SettingsAnonym$2}
 */
function mapDispatchToProps(dispatch) {
  return {
      
    // approach 1: define action object in the component
    /*
    this.props.dispatch({
        type : actionTypes.CHANGE_LAYER_OPACITY, 
        key,
        opacity
        }
    });
    */

    // approach 2: use an action creator function
    /*
    const actionObject = changeLayerOpacitySetting(key, opacity);
    this.props.dispatch(actionObject);
    */

    // approach 3: directly pass result of action creator to dispatch
    /*
    this.props.dispatch(changeLayerOpacitySetting(key, opacity));
    */

    // approach 4: pre-bind action creator to automatically call dispatch
    /*
    const boundChangeLayerOpacitySetting = bindActionCreators(changeLayerOpacitySetting, dispatch);
    boundEditItemAttributes(key, opacity);
    */
      
      /**
       * Go for Approach #4: bindActionCreators()
       * http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/
       * 
       * Turns an object whose values are action creators, into an object with the same keys, 
       * but with every action creator wrapped into a dispatch call so they may be invoked directly.
       * 
       * Normally you should just call dispatch directly on your Store instance, e.g.
       * store.dispatch({ type: 'SHOW_SETTINGS' })
       * 
       * 
       * 
       */
    uiActions: bindActionCreators(UiStateActions, dispatch)
  }; 
}

export class Settings_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    // TODO: Convert actions to arrow functions -> bind will become unnecessary!
    this.changeLayer=this.changeLayer.bind(this);
    this.close=this.close.bind(this);
    this.open=this.open.bind(this);
    this.changeLayerEnabledSetting=this.changeLayerEnabledSetting.bind(this);
    this.changeLayerOpacitySetting=this.changeLayerOpacitySetting.bind(this);
  }
  
  changeLayer(key,opacity,enabled) {
       this.props.uiActions.changeLayer(key,opacity,enabled);
  }
  
  close() {
    this.props.uiActions.showSettings(false);
  }
  open() {
    this.props.uiActions.showSettings(true);
  }

  changeLayerEnabledSetting(event) {
      this.props.uiActions.changeLayerEnabledSetting(event.target.name, event.target.value==='on');
  }
  changeLayerOpacitySetting(event) {
      this.props.uiActions.changeLayerOpacitySetting(event.target.name, event.target.value/100.0);
  }
  render() {
 
    return (
        <Modal show={this.props.uiState.settingsVisible} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Einstellungen</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <h4>Hintergrundlayer</h4>
            <table style={{width:'100%'}}>
            <tbody>
            { this.props.uiState.layers.map((layer)=>{
                return (
                    <tr key={"settings.for."+layer.key}>
                    <td>
                    <Checkbox checked={layer.enabled} name={layer.key} onChange={this.changeLayerEnabledSetting} > {layer.key}  </Checkbox>
                    </td><td>
                    Transparenz:
                    </td><td>
                    <input type="range" id={layer.enabled} min="0" max="100" value={layer.opacity*100} name={layer.key} onChange={this.changeLayerOpacitySetting}/>
                    </td>
                    </tr>
                    );
            })}
            </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>         
    );
  }
}

const Settings = connect(mapStateToProps,mapDispatchToProps)(Settings_);

/*
 * Passing an object full of actions will automatically run each action 
 * through the bindActionCreators utility, and turn them into props!
 * -> No need to call mapDispatchToProps !!!
 * 
 * http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/
 * 
 */

//import {changeLayerOpacitySetting, changeLayerEnabledSetting} from "../actions/uiStateActions";
//const Settings = connect(mapStateToProps,{changeLayerOpacitySetting, changeLayerEnabledSetting})(Settings_);
//<button onClick={props.changeLayerOpacitySetting(xxx)}>changeLayerOpacitySetting</button>

export default Settings;

Settings_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
