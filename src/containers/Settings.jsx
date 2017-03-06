import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, Button, Checkbox } from 'react-bootstrap';
import * as UiStateActions from '../actions/uiStateActions';


function mapStateToProps(state) {
  return {
    uiState: state.uiState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch),
  };
}

export class Settings_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeLayer = this.changeLayer.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.changeLayerEnabledSetting = this.changeLayerEnabledSetting.bind(this);
    this.changeLayerOpacitySetting = this.changeLayerOpacitySetting.bind(this);
  }

  changeLayer(key, opacity, enabled) {
    this.props.uiActions.changeLayer(key, opacity, enabled);
  }

  close() {
    this.props.uiActions.showSettings(false);
  }
  open() {
    this.props.uiActions.showSettings(true);
  }

  changeLayerEnabledSetting(event) {
    this.props.uiActions.changeLayerEnabledSetting(event.target.name, event.target.value === 'on');
  }
  changeLayerOpacitySetting(event) {
    this.props.uiActions.changeLayerOpacitySetting(event.target.name, event.target.value / 100.0);
  }
  render() {

    return (
      <Modal show={this.props.uiState.settingsVisible} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Einstellungen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Hintergrundlayer</h4>
          <table style={{ width: '100%' }}>
            <tbody>
              {this.props.uiState.layers.map((layer) => {
                return (
                  <tr key={"settings.for." + layer.key}>
                    <td>
                      <Checkbox checked={layer.enabled} name={layer.key} onChange={this.changeLayerEnabledSetting} > {layer.key}  </Checkbox>
                    </td><td>
                      Transparenz:
                    </td><td>
                      <input type="range" id={layer.enabled} min="0" max="100" value={layer.opacity * 100} name={layer.key} onChange={this.changeLayerOpacitySetting} />
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

const Settings = connect(mapStateToProps, mapDispatchToProps)(Settings_);
export default Settings;

Settings_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
