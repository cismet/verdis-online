import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import ContactPanel from '../components/ContactPanel';

import KassenzeichenFlaechenChartPanel from '../components/KassenzeichenFlaechenChartPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import Waiting from './Waiting';
import { Alert } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as AuthActions } from '../redux/modules/auth';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { flaechenStyle } from '../utils/kassenzeichenMappingTools';
import AppNavbar from '../containers/VerdisOnlineAppNavbar';
import HelpAndSettings from '../components/helpandsettings/Menu00MainComponent';
import ChangeRequests from '../components/changerequests/CR00MainComponent';
import {
	kassenzeichenFlaechenSorter,
	getOverlayTextForFlaeche
} from '../utils/kassenzeichenHelper';
import CONTACTS_MAP, { defaultContact } from '../constants/contacts';
import ChangeRequestEditView from '../components/changerequests/CR50Flaechendialog';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		kassenzeichen: state.kassenzeichen,
		mapping: state.mapping,
		routing: state.routing,
		auth: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return {
		kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
		uiStateActions: bindActionCreators(UiStateActions, dispatch),
		mappingActions: bindActionCreators(MappingActions, dispatch),
		authActions: bindActionCreators(AuthActions, dispatch)
	};
}

//eslint-disable-next-line
let flaechenPanelRefs = {};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class KassenzeichenViewer_ extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
		this.kassenZeichenPanelD3Click = this.kassenZeichenPanelD3Click.bind(this);
		this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
		this.isFlaecheSelected = this.isFlaecheSelected.bind(this);
		this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
		this.flaechenMapClick = this.flaechenMapClick.bind(this);
		this.getCRsForFlaeche = this.getCRsForFlaeche.bind(this);
		this.flaechenPanelRefs = {};
	}

	//   componentWillMount() {
	//   }
	//   componentDidUpdate() {
	//   }

	componentDidMount() {
		if (this.props.auth.stac && this.props.auth.succesfullLogin === false) {
			this.props.authActions.setLoginInProgress();
			this.props.uiStateActions.showInfo('Kassenzeichen wird wieder geladen');
			this.props.kassenzeichenActions.getKassenzeichenbySTAC(
				this.props.auth.stac,
				(success) => {
					if (success === true) {
						setTimeout(() => {
							this.props.uiStateActions.showWaiting(false);
							this.props.mappingActions.fitAll();
						}, 300);
					}
				}
			);
		} else {
			this.props.mappingActions.fitAll();
		}
	}

	getCRsForFlaeche(flaeche) {
		if (
			this.props.kassenzeichen.changerequests !== undefined &&
			this.props.kassenzeichen.changerequests.flaechen !== undefined &&
			this.props.kassenzeichen.changerequests.flaechen[flaeche.flaechenbezeichnung] !==
				undefined
		) {
			const ret = this.props.kassenzeichen.changerequests.flaechen[
				flaeche.flaechenbezeichnung
			];
			return ret;
		} else {
			return undefined;
		}
	}

	kassenZeichenPanelClick() {
		// this.props.mappingActions.fitAll();
		// or
		this.verdisMap.getWrappedInstance().fitBounds();
	}

	kassenZeichenPanelD3Click() {
		this.props.kassenzeichenActions.openD3();
	}

	flaechenPanelClick(flaeche) {
		if (this.isFlaecheSelected(flaeche) === true) {
			this.props.mappingActions.fitSelectedFeatureBounds();
		} else {
			this.props.mappingActions.setSelectedFeatureIndexWithSelector((feature) => {
				return feature.properties.id === flaeche.id;
			});
			this.flaechenPanelRefs[flaeche.id].scrollToVisible();
		}
	}

	flaechenMapClick(event, feature) {
		if (this.isFlaecheSelected(feature.properties) === true) {
			this.props.mappingActions.fitSelectedFeatureBounds();
		} else {
			this.props.mappingActions.setSelectedFeatureIndexWithSelector((testfeature) => {
				return testfeature.properties.id === feature.properties.id;
			});
			this.flaechenPanelRefs[feature.properties.id].scrollToVisible();
		}
	}

	isFlaecheSelected(flaeche) {
		return (
			typeof this.props.mapping.featureCollection !== 'undefined' &&
			this.props.mapping.featureCollection.length > 0 &&
			typeof this.props.mapping.selectedIndex !== 'undefined' &&
			this.props.mapping.featureCollection.length > this.props.mapping.selectedIndex &&
			typeof this.props.mapping.featureCollection[this.props.mapping.selectedIndex] !==
				'undefined' &&
			this.props.mapping.featureCollection[this.props.mapping.selectedIndex].properties.id ===
				flaeche.id
		);
	}

	render() {
		let flaechenInfoOverlay;
		let verdisMapWithAdditionalComponents;
		let mapHeight;
		if (this.props.uiState.height) {
			mapHeight = this.props.uiState.height - 55;
		} else {
			mapHeight = 50;
		}

		const detailsStyle = {
			backgroundColor: '#EEE',
			padding: '5px 5px 5px 5px',
			overflow: 'auto'
		};

		let flaechen = [];
		let flComps = [];

		if (this.props.kassenzeichen.flaechen && this.props.uiState.detailElementsEnabled) {
			flaechen = this.props.kassenzeichen.flaechen.concat().sort(kassenzeichenFlaechenSorter);
		}
		let kassenzeichenPanel;
		let kassenzeichenHorizontalFlaechenChartsPanel;
		let kassenzeichenVerticalFlaechenChartsPanel;

		let contact;
		let creator = defaultContact;
		try {
			creator = this.props.kassenzeichen.stac_options.creatorUserName;
		} catch (e) {}
		if (CONTACTS_MAP.has(creator)) {
			contact = CONTACTS_MAP.get(creator);
		} else {
			contact = CONTACTS_MAP.get(defaultContact);
		}

		let contactPanel = <div />;
		if (this.props.uiState.contactElementEnabled && this.props.kassenzeichen.id !== -1) {
			contactPanel = <ContactPanel contact={contact} />;
		}

		let selectedFlaeche = null;
		if (
			this.props.mapping.selectedIndex !== undefined &&
			this.props.mapping.selectedIndex !== -1
		) {
			selectedFlaeche = this.props.mapping.featureCollection[
				this.props.mapping.selectedIndex
			];
		}

		if (this.props.kassenzeichen.id !== -1) {
			kassenzeichenPanel = (
				<div>
					<KassenzeichenPanel
						onClick={this.kassenZeichenPanelClick}
						d3Enabled={this.props.uiState.d3Available}
						d3Click={this.kassenZeichenPanelD3Click}
						kassenzeichen={this.props.kassenzeichen}
					/>
				</div>
			);
		}
		if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
			kassenzeichenHorizontalFlaechenChartsPanel = (
				<KassenzeichenFlaechenChartPanel
					kassenzeichen={this.props.kassenzeichen}
					orientation='vertical'
				/>
			);
			kassenzeichenVerticalFlaechenChartsPanel = (
				<Flexbox height={'' + horizontalPanelHeight} minWidth={'' + horizontalPanelWidth}>
					<KassenzeichenFlaechenChartPanel
						kassenzeichen={this.props.kassenzeichen}
						orientation='horizontal'
					/>
				</Flexbox>
			);
		}

		let nothingEnabled =
			!this.props.uiState.chartElementsEnabled &&
			!this.props.uiState.kanalElementsEnabled &&
			!this.props.uiState.filterElementEnabled &&
			!this.props.uiState.detailElementsEnabled;

		if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
			verdisMapWithAdditionalComponents = (
				<div>
					<VerdisMap
						ref={(verdisMapRef) => {
							this.verdisMap = verdisMapRef;
						}}
						authMode={APP_MODES.STAC}
						height={mapHeight}
						featureClickHandler={this.flaechenMapClick}
						backgroundlayers={this.props.match.params.layers}
					/>
				</div>
			);
		} else if (this.props.uiState.width < switchToBottomWhenSmallerThan) {
			if (flaechen) {
				let i = 0;
				const that = this;
				flaechenPanelRefs = {};
				flComps = flaechen.map(function(flaeche) {
					const sel = that.isFlaecheSelected(flaeche);
					return (
						<Flexbox
							key={'flex' + i++ + '.' + flaeche.id}
							height={'' + horizontalPanelHeight}
							minWidth={'' + horizontalPanelWidth}
						>
							<FlaechenPanel
								ref={(c) => {
									that.flaechenPanelRefs[flaeche.id] = c;
								}}
								key={flaeche.id + '.' + sel}
								selected={sel}
								flaechenPanelClickHandler={that.flaechenPanelClick}
								flaeche={flaeche}
								changerequest={that.getCRsForFlaeche(flaeche)}
								editmode={that.props.uiState.changeRequestsEditMode}
								display={that.props.uiState.changeRequestDisplayMode}
							/>
						</Flexbox>
					);
				});
			}
			verdisMapWithAdditionalComponents = (
				<div>
					<VerdisMap
						ref={(verdisMapRef) => {
							this.verdisMap = verdisMapRef;
						}}
						authMode={APP_MODES.STAC}
						height={mapHeight - horizontalPanelHeight - 25}
						featureClickHandler={this.flaechenMapClick}
						featureCollectionStyle={flaechenStyle}
						backgroundlayers={this.props.match.params.layers}
					/>
					<Flexbox flexDirection='row' style={detailsStyle}>
						<Flexbox
							height={'' + horizontalPanelHeight}
							minWidth={'' + horizontalPanelWidth}
						>
							{contactPanel}
							{kassenzeichenPanel}
						</Flexbox>
						{kassenzeichenVerticalFlaechenChartsPanel}
						{flComps}
					</Flexbox>
				</div>
			);
		} else {
			if (flaechen) {
				const that = this;
				this.flaechenPanelRefs = {};
				flComps = flaechen.map(function(flaeche) {
					const sel = that.isFlaecheSelected(flaeche);
					const cr = that.getCRsForFlaeche(flaeche);
					return (
						<FlaechenPanel
							ref={(c) => {
								that.flaechenPanelRefs[flaeche.id] = c;
							}}
							key={flaeche.id + '.' + sel}
							selected={sel}
							flaechenPanelClickHandler={that.flaechenPanelClick}
							flaeche={flaeche}
							display={that.props.uiState.changeRequestDisplayMode}
							changerequest={cr}
							editmode={that.props.uiState.changeRequestsEditMode}
							showEditCRMenu={() => {
								that.props.uiStateActions.showCREditUI(flaeche, cr);
							}}
						/>
					);
				});
			}

			verdisMapWithAdditionalComponents = (
				<div>
					<div
						style={Object.assign({}, detailsStyle, {
							height: mapHeight + 'px',
							width: verticalPanelWidth + 'px',
							float: 'right'
						})}
					>
						{contactPanel}
						{kassenzeichenPanel}
						{kassenzeichenHorizontalFlaechenChartsPanel}
						{flComps}
					</div>
					<VerdisMap
						ref={(verdisMapRef) => {
							this.verdisMap = verdisMapRef;
						}}
						authMode={APP_MODES.STAC}
						height={mapHeight}
						featureClickHandler={this.flaechenMapClick}
						featureCollectionStyle={flaechenStyle}
						backgroundlayers={this.props.match.params.layers}
					/>
				</div>
			);

			if (selectedFlaeche && this.props.uiState.infoElementsEnabled) {
				flaechenInfoOverlay = (
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							left: 20,
							zIndex: 500,
							width: this.props.uiState.width - verticalPanelWidth - 40,
							opacity: 0.9
						}}
					>
						<Alert
							bsStyle='warning'
							onDismiss={() => {
								this.props.uiStateActions.toggleInfoElements();
							}}
						>
							{getOverlayTextForFlaeche(selectedFlaeche.properties)}
						</Alert>
					</div>
				);
			}
		}

		return (
			<div>
				<AppNavbar />
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
				{/* <VerdisOnlineModalHelpComponent /> */}
				<HelpAndSettings
					showApplicationMenu={this.props.uiStateActions.showApplicationMenu}
					applicationMenuActiveKey={this.props.uiState.applicationMenuActiveKey}
					setApplicationMenuActiveKey={
						this.props.uiStateActions.setApplicationMenuActiveKey
					}
					applicationMenuVisible={this.props.uiState.applicationMenuVisible}
					height={this.props.uiState.height}
					selectedBackgroundIndex={this.props.mapping.selectedBackgroundIndex}
					backgrounds={this.props.mapping.backgrounds}
					setBackgroundIndex={this.props.mappingActions.setSelectedBackgroundIndex}
				/>
				<ChangeRequests
					visible={this.props.uiState.changeRequestsMenuVisible}
					showChangeRequestMenu={this.props.uiStateActions.showChangeRequestsMenu}
				/>
				<ChangeRequestEditView
					visible={this.props.uiState.changeRequestEditViewVisible}
					showChangeRequestMenu={(storeIt) => {
						if (storeIt == true) {
							this.props.kassenzeichenActions.setChangeRequestsForFlaeche(
								this.props.uiState.changeRequestEditViewFlaeche,
								this.props.uiState.changeRequestEditViewCR
							);
						}
						this.props.uiStateActions.showChangeRequestsEditView(false);
					}}
					flaeche={this.props.uiState.changeRequestEditViewFlaeche}
					flaechenCR={this.props.uiState.changeRequestEditViewCR}
					setFlaechenCR={(cr) => {
						this.props.uiStateActions.setChangeRequestsEditViewFlaecheAndCR(
							this.props.uiState.changeRequestEditViewFlaeche,
							cr
						);
					}}
					__setFlaechenCR={this.props.kassenzeichenActions.setChangeRequestsForFlaeche}
					documents={
						(this.props.kassenzeichen.changerequests || { documents: [] }).documents
					}
				/>
				{verdisMapWithAdditionalComponents}
				{flaechenInfoOverlay}
			</div>
		);
	}
}

const KassenzeichenViewer = connect(mapStateToProps, mapDispatchToProps)(KassenzeichenViewer_);
export default KassenzeichenViewer;

KassenzeichenViewer_.propTypes = {
	ui: PropTypes.object,
	kassenzeichen: PropTypes.object,
	mapping: PropTypes.object,
	uiState: PropTypes.object,
	auth: PropTypes.object.isRequired,
	routing: PropTypes.object.isRequired,
	kassenzeichenActions: PropTypes.object.isRequired,
	uiStateActions: PropTypes.object.isRequired,
	mappingActions: PropTypes.object.isRequired,
	authActions: PropTypes.object.isRequired
};
