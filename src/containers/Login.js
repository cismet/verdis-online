import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, Button, Form, FormGroup, Col, ControlLabel, FormControl, ProgressBar, Fade } from 'react-bootstrap';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as AuthActions } from '../redux/modules/auth';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';

function mapStateToProps(state) {
  return {
    uiState: state.uiState,
    auth: state.auth,
    routing: state.routing
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch),
    authActions: bindActionCreators(AuthActions, dispatch),    
    kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),    
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
    if (typeof this.props.uiState.kassenzeichenToSearchFor !== "undefined" && this.props.uiState.kassenzeichenToSearchFor !== null) {
        let urlSearchParams=new URLSearchParams(this.props.routing.location.search);
        let fitBounds=typeof urlSearchParams.get('lat')  === "undefined" || typeof urlSearchParams.get('lng')   === "undefined" ||  typeof urlSearchParams.get('zoom')  === "undefined";
        this.props.authActions.login(this.user, this.pw, () => {
            this.props.kassenzeichenActions.searchByKassenzeichen(this.props.uiState.kassenzeichenToSearchFor,fitBounds);
        });
    } else {
        this.props.authActions.login(this.user, this.pw);        
    }
  }
  handleUserChange(e) {
    this.user = e.target.value;
  }
  handlePWChange(e) {
    this.pw = e.target.value;
  }
  render() {
    return (
      <Modal show={!this.props.auth.succesfullLogin} onHide={this.close} keyboard={false}>
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
  authActions: PropTypes.object,
  uiState: PropTypes.object,
  routing: PropTypes.object,
  kassenzeichenActions: PropTypes.object,
  auth: PropTypes.object
};
