import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import Waiting from './Waiting';
import { Icon } from 'react-fa';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import Toggle from 'react-bootstrap-toggle';
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
		this.toggleContact = this.toggleContact.bind(this);
		this.showSettings = this.showSettings.bind(this);
		this.showChangeRequests = this.showChangeRequests.bind(this);
		this.downloadFEB = this.downloadFEB.bind(this);
		this.textsearchkassenzeichen = this.textsearchkassenzeichen.bind(this);
		this.fitBounds = this.fitBounds.bind(this);
	}

	componentDidUpdate() {
		// console.log("componentDidUpdate()");
		// console.log("  this.props.uiState.waitForFEB:"+this.props.uiState.waitForFEB);
		// console.log("  this.props.uiState.febBlob:"+this.props.uiState.febBlob);
		// console.log("  this.props.uiState.waitingVisible:"+this.props.uiState.waitingVisible);
		// console.log("-----------");

		if (this.props.uiState.waitForFEB === true) {
			//dh downloadFeb() wurde aufgerufen aber der Download ist noch nicht fertig
			if (
				this.props.uiState.febBlob === null &&
				this.props.uiState.waitingVisible === false
			) {
				this.props.uiStateActions.showInfo('FEB wird erzeugt');
			} else if (
				this.props.uiState.febBlob !== null &&
				this.props.uiState.waitingVisible === true
			) {
				this.props.uiStateActions.showWaiting(false);
				this.props.uiStateActions.setWaitForFEB(false);
				this.downloadFEB();
			}
		}
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
	toggleContact() {
		this.props.uiStateActions.toggleContactElement();
	}
	showSettings() {
		this.props.uiStateActions.showSettings(true);
	}
	showChangeRequests() {
		this.props.uiStateActions.showChangeRequestsMenu(true);
	}

	downloadFEB() {
		if (this.props.uiState.febBlob !== null) {
			let link = document.createElement('a');
			link.href = window.URL.createObjectURL(this.props.uiState.febBlob);
			link.download =
				'FEB.' +
				this.props.kassenzeichen.kassenzeichennummer +
				'.STAC.' +
				this.props.auth.stac +
				'.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			this.props.uiStateActions.setWaitForFEB(true);
		}
	}
	textsearchkassenzeichen() {
		this.props.uiStateActions.setKassenzeichenTextSearchVisible(true);
	}

	fitBounds() {
		this.props.mappingActions.fitAll();
	}

	render() {
		let kasszLabel = 'Kassenzeichen: ';
		if (this.props.uiState.width < 990) {
			kasszLabel = '';
		}

		let lblDownLoadFeb = 'Flächenerfassungsbogen herunterladen (PDF)';
		let lblInfo = this.props.uiState.infoElementsEnabled
			? 'Flächeninfo ausblenden'
			: 'Flächeninfo einblenden';
		let lblChart = this.props.uiState.chartElementsEnabled
			? 'Diagramm ausblenden'
			: 'Diagramm einblenden';
		let lblContact = this.props.uiState.contactElementEnabled
			? 'Ansprechpartner ausblenden'
			: 'Ansprechpartner einblenden';
		let lblExit = 'VerDIS-online beenden';

		let menuIsHidden = false;
		if (this.props.uiState.width < 768) {
			menuIsHidden = true;
		}

		let ttTriggerOn = [ 'hover', 'focus' ];
		let ttTriggerOff = null;
		let kassenzeichennummer;
		if (this.props.kassenzeichen.kassenzeichennummer8) {
			kassenzeichennummer =
				' (' + kasszLabel + this.props.kassenzeichen.kassenzeichennummer8 + ')';
		} else {
			kassenzeichennummer = '';
		}

		let pdfIconStyle;
		if (this.props.uiState.febBlob !== null) {
			pdfIconStyle = { color: 'white' };
		} else {
			pdfIconStyle = { color: 'grey' };
		}

		return (
			<div>
				<Navbar inverse style={{ marginBottom: 0 }}>
					<OverlayTrigger
						placement='bottom'
						overlay={
							<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
								alle Teilflächen zum Kassenzeichen anzeigen
							</Tooltip>
						}
					>
						<Navbar.Header>
							<Navbar.Brand>
								<a
									id='verdis_online_brand'
									style={{ cursor: 'pointer' }}
									onClick={this.fitBounds}
								>
									VerDIS-online{kassenzeichennummer}
								</a>
							</Navbar.Brand>

							<Navbar.Toggle />
						</Navbar.Header>
					</OverlayTrigger>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem
								id='navitem_showSettings'
								onClick={this.showSettings}
								eventKey={2.0}
							>
								Hilfe & Einstellungen
							</NavItem>
							<NavItem
								id='navitem_showSettings'
								onClick={this.showChangeRequests}
								eventKey={2.0}
							>
								Änderungswünsche{' '}
								{/* <Toggle
									on={'meine Änderungen'}
									off={'Original'}
									size='xs'
									offstyle='success'
									onstyle='warning'
									active={true}
									style={{ padding: 10 }}
								/> */}
							</NavItem>
							<OverlayTrigger
								trigger={menuIsHidden ? ttTriggerOff : ttTriggerOn}
								placement='bottom'
								overlay={
									<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
										{lblDownLoadFeb}
									</Tooltip>
								}
							>
								<NavItem
									id='navitem_downloadFEB'
									onClick={this.downloadFEB}
									eventKey={2.3}
								>
									<Icon style={pdfIconStyle} name='file-pdf-o' />
									{menuIsHidden ? '   ' + lblDownLoadFeb : ''}
								</NavItem>
							</OverlayTrigger>
							<OverlayTrigger
								trigger={menuIsHidden ? ttTriggerOff : ttTriggerOn}
								placement='bottom'
								overlay={
									<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
										{lblInfo}
									</Tooltip>
								}
							>
								<NavItem
									id='navitem_infoElementsEnabled'
									className={
										this.props.uiState.infoElementsEnabled ? 'active' : ''
									}
									eventKey={2.1}
									href='#'
									onSelect={this.toggleInfo}
								>
									<Icon name='info-circle' />
									{menuIsHidden ? '   ' + lblInfo : ''}
								</NavItem>
							</OverlayTrigger>
							<OverlayTrigger
								trigger={menuIsHidden ? ttTriggerOff : ttTriggerOn}
								placement='bottom'
								overlay={
									<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
										{lblChart}
									</Tooltip>
								}
							>
								<NavItem
									id='navitem_chartElementsEnabled'
									className={
										this.props.uiState.chartElementsEnabled ? 'active' : ''
									}
									eventKey={2.2}
									href='#'
									onSelect={this.toggleCharts}
								>
									<Icon name='pie-chart' />
									{menuIsHidden ? '   ' + lblChart : ''}
								</NavItem>
							</OverlayTrigger>
							<OverlayTrigger
								trigger={menuIsHidden ? ttTriggerOff : ttTriggerOn}
								placement='bottom'
								overlay={
									<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
										{lblContact}
									</Tooltip>
								}
							>
								<NavItem
									id='navitem_contact'
									className={
										this.props.uiState.contactElementEnabled ? 'active' : ''
									}
									eventKey={2.6}
									href='#'
									onSelect={this.toggleContact}
								>
									<Icon name='user' />
									{menuIsHidden ? '   ' + lblContact : ''}
								</NavItem>
							</OverlayTrigger>
							<OverlayTrigger
								trigger={menuIsHidden ? ttTriggerOff : ttTriggerOn}
								placement='bottom'
								overlay={
									<Tooltip style={{ zIndex: 3000000000 }} id='prevtt'>
										{lblExit}
									</Tooltip>
								}
							>
								<NavItem id='navitem_logout' eventKey={3} href='/#/'>
									<Icon name='power-off' />
									{menuIsHidden ? '   ' + lblExit : ''}
								</NavItem>
							</OverlayTrigger>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Waiting
					key={
						'Waiting.visible.' +
						this.props.uiState.waitingVisible +
						' ...message.' +
						this.props.uiState.waitingMessage +
						' ...type.' +
						this.props.uiState.waitingType
					}
				/>
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
