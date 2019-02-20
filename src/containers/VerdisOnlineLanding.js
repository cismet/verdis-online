import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { DOMAIN, STAC_SERVICE } from '../constants/cids';

import { Panel, Form, FormGroup, Grid, Row, Col } from 'react-bootstrap';
import Loadable from 'react-loading-overlay';

import { routerActions as RoutingActions } from 'react-router-redux';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as AuthActions } from '../redux/modules/auth';
import { actions as UIStateActions } from '../redux/modules/uiState';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import queryString from 'query-string';
import { Alert, AlertContainer } from 'react-bs-notifier';
import { getVersion } from '../constants/versions';
function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		auth: state.auth,
		mapping: state.mapping,
		routing: state.routing
	};
}

function mapDispatchToProps(dispatch) {
	return {
		mappingActions: bindActionCreators(MappingActions, dispatch),
		routingActions: bindActionCreators(RoutingActions, dispatch),
		kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
		authActions: bindActionCreators(AuthActions, dispatch),
		uiActions: bindActionCreators(UIStateActions, dispatch)
	};
}

export function createLeafletElement() {}

export class Landing_ extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleSTACInput = this.handleSTACInput.bind(this);
		this.handleSTAC = this.handleSTAC.bind(this);
		this.checkNetworkConnection = this.checkNetworkConnection.bind(this);
		this.background = 'background.jpg';

		this.state = {
			loginAlertVisible: false,
			connectionProblem: false
		};
	}
	componentDidMount() {
		this.interval = setInterval(() => this.checkNetworkConnection(), 2000);

		// set the focus to the input box
		if (this.stacInput) {
			//checks whether the ref has been set down in the render method
			const input = ReactDOM.findDOMNode(this.stacInput);
			if (input) {
				input.focus();
				input.selectionStart = input.value.trim().length;
				input.selectionEnd = input.value.trim().length;
			}
		}
		this.props.authActions.logout();

		let stac = ''; //queryString.parse(this.props.routing.location.search).stac;
		this.props.uiActions.setStacInput(stac);
		this.handleSTAC(stac);
		if (queryString.parse(this.props.routing.location.search).bg) {
			this.background = queryString.parse(this.props.routing.location.search).bg;
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	checkNetworkConnection() {
		const url = STAC_SERVICE + '/actions/' + DOMAIN + '.checkCidsServerMessage?role=all';
		const that = this;
		fetch(url, {
			method: 'get'
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					that.setState({ connectionProblem: false });
				} else {
					that.setState({ connectionProblem: true });
				}
			})
			.catch(function(err) {
				//console.warn('Could not connect to service', err);
				that.setState({ connectionProblem: true });
			});
	}

	handleSTACInput(e) {
		this.props.uiActions.setStacInput(e.target.value);
		this.handleSTAC(e.target.value);
	}

	handleSTAC(rawSTAC) {
		if (rawSTAC) {
			let stac = rawSTAC.trim().replace(/[- ]/g, '');
			if (stac.length === 12) {
				this.props.kassenzeichenActions.getKassenzeichenbySTAC(stac, (success) => {
					if (success === true) {
						setTimeout(() => {
							this.props.routingActions.push('/meinkassenzeichen');
						}, 100);
					} else {
						setTimeout(() => {
							this.props.uiActions.setStacInput('');
							this.props.routingActions.push('/');
							this.setState({ loginAlertVisible: true });
						}, 1000);
					}
				});
			}
		}
	}

	render() {
		let landingStyle = {
			backgroundColor: 'red',
			height: this.props.uiState.height,
			width: '100%',
			background: "url('/images/" + this.background + "')",
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		};
		const panelStyle = {
			backgroundColor: 'rgba(255,255,255,1)',
			border: 0,
			paddingLeft: 40,
			paddingRight: 40,
			paddingBottom: 10,
			paddingTop: 10
		};

		return (
			<div style={{ position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						top: '0px',
						left: '0px',
						width: '100%',
						height: '200px',
						backgroundColor: 'rgba(0,0,0,0.4)'
					}}
				/>
				<div
					style={{
						position: 'absolute',
						bottom: '0px',
						left: '0px',
						width: '100%',
						height: '250px',
						backgroundColor: 'rgba(0,0,0,0.4)'
					}}
				/>
				<div
					style={{
						position: 'absolute',
						bottom: '0px',
						left: '0px',
						width: '100%',

						backgroundColor: 'rgba(0,0,0,0)'
					}}
				>
					<div style={{ fontSize: '9px', textAlign: 'right', color: 'rgba(256,256,256,0.5)', margin: 4 }}>
						{getVersion()}
					</div>
				</div>
				<div style={{ width: '100%', height: '100%', position: 'absolute' }}>
					<AlertContainer position="top-right">
						<div>
							{this.state.connectionProblem && (
								<Alert
									type="danger"
									headline="Verbindungsprobleme."
									onDismiss={() => {
										this.setState({ connectionAlertVisible: false });
									}}
								>
									Im Moment können wir keine Verbindung zu unseren Diensten aufbauen.
								</Alert>
							)}
							{this.state.loginAlertVisible && (
								<Alert
									type="danger"
									timeout={10000}
									headline="Anmeldeinformationen fehlerhaft oder abgelaufen."
									onDismiss={() => {
										this.setState({ loginAlertVisible: false });
									}}
								>
									Bitte überprüfen Sie den eingegeben Code und dessen Gültigkeitsdauer. Bei Problemen
									mit der Anmeldung, wenden Sie sich bitte an den untenstehende Kontakt.
								</Alert>
							)}
						</div>
					</AlertContainer>
				</div>
				<div style={landingStyle}>
					<Grid>
						<Row className="show-grid">
							<Col xs={12} md={12}>
								<h1 style={{ color: 'white' }}>
									<img alt="" width={180} src="/images/wuppertal-white.svg" />
								</h1>
								<h2 style={{ color: 'white' }}>VerDIS - online</h2>
								<h3 style={{ color: 'white' }}>Versiegelungsdaten | Flächenentwässerung</h3>
							</Col>
						</Row>

						<Row className="show-grid">
							<Col xs={6} md={6}>
								<div style={{ position: 'fixed', top: this.props.uiState.height - 200 }}>
									<Loadable
										active={this.props.auth.loginInProgress}
										spinner
										text={this.props.auth.loginInProgressTextInfo}
									>
										<Panel style={panelStyle}>
											<h3>Zugangscode:</h3>
											<Form
												horizontal
												className="LoginForm"
												id="loginForm"
												onSubmit={(e) => {
													e.preventDefault();
												}}
											>
												<FormGroup controlId="stacInput">
													<MaskedFormControl
														key={'MaskedFormControl.with' + this.stac}
														style={{
															height: '50px',
															border: '1px solid #9999992',
															padding: '5px',
															fontSize: '24px',
															fontFamily: 'monospace'
														}}
														ref={(input) => {
															this.stacInput = input;
														}}
														placeholderChar=" "
														type="text"
														name="stac"
														mask="AAAA-AAAA-AAAA"
														value={this.props.uiState.stacInput}
														onChange={this.handleSTACInput}
														disabled={this.state.connectionProblem}
													/>
												</FormGroup>
												{/* 
												<FormGroup>
													<MaskedFormControl
														type="text"
														sname="phoneNumber"
														mask="111-111-1111"
													/>
												</FormGroup> */}
											</Form>
										</Panel>
									</Loadable>
								</div>
							</Col>
							<Col xs={1} md={1} />

							<Col xs={5} md={5}>
								<div style={{ position: 'fixed', top: this.props.uiState.height - 200 }}>
									<h4 style={{ color: 'white' }}>Stadt Wuppertal</h4>
									<h4 style={{ color: 'white' }}>Vermessung, Katasteramt und Geodaten</h4>
									<h4 style={{ color: 'white' }}>102.23 Kommunalservice Liegenschaftskataster</h4>
									<h4 style={{ color: 'white' }}>
										<a style={{ color: 'white' }} href="mailto:regengeld@stadt.wuppertal.de">
											regengeld@stadt.wuppertal.de
										</a>
									</h4>
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

const Landing = connect(mapStateToProps, mapDispatchToProps)(Landing_);
export default Landing;

Landing_.propTypes = {
	ui: PropTypes.object,
	kassenzeichen: PropTypes.object,
	mapping: PropTypes.object,
	uiState: PropTypes.object,
	auth: PropTypes.object.isRequired,
	routing: PropTypes.object.isRequired,
	kassenzeichenActions: PropTypes.object.isRequired,
	//   uiStateActions: PropTypes.object.isRequired,
	mappingActions: PropTypes.object.isRequired,
	authActions: PropTypes.object.isRequired,
	routingActions: PropTypes.object.isRequired
};
