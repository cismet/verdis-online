import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, Button, Form, FormGroup, Col, ControlLabel, FormControl, ProgressBar, Fade } from 'react-bootstrap';
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

export class Login_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.close = this.close.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);

  }

  close() {
    this.props.uiActions.login(this.user, this.pw);
  }
  handleUserChange(e) {
    this.user = e.target.value;
  }
  handlePWChange(e) {
    this.pw = e.target.value;
  }
  render() {
    return (
      <Modal show={!this.props.uiState.succesfullLogin} onHide={this.close} keyboard={false}>
        <Modal.Header  >
          <Modal.Title>VerDIS - Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                User
               </Col>
              <Col sm={10}>
                <FormControl type="login" placeholder="Login ohne Gruppen oder Domaininformation" onChange={this.handleUserChange} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
               </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Passwort" onChange={this.handlePWChange} />
              </Col>
            </FormGroup>

            {/*<FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Angemeldet bleiben</Checkbox>
              </Col>
            </FormGroup>*/}
            <Fade in={this.props.uiState.loginInProgress}>
              <ProgressBar key={"loginInProgress showing:" + this.props.uiState.loginInProgress} active now={100} />
            </Fade>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" type="submit" onClick={this.close}>Login</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



const Login = connect(mapStateToProps, mapDispatchToProps)(Login_);
export default Login;

Login_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
