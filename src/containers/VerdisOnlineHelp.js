import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import ContactPanel from '../components/ContactPanel';

import KassenzeichenFlaechenChartPanel from '../components/KassenzeichenFlaechenChartPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import AnnotationPanel from '../components/AnnotationPanel';
import Waiting from './Waiting';
import { Alert } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as UiStateActions } from '../redux/modules/uiState';
import { actions as MappingActions, getLayerForFeatureId } from '../redux/modules/mapping';
import { actions as AuthActions } from '../redux/modules/auth';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { createFlaechenStyler } from '../utils/kassenzeichenMappingTools';
import AppNavbar from '../containers/VerdisOnlineAppNavbar';
import HelpAndSettings from '../components/helpandsettings/Menu00MainComponent';
import ChangeRequests from '../components/changerequests/CR00MainComponent';
import {
	kassenzeichenFlaechenSorter,
	getOverlayTextForFlaeche,
	getCRsForFlaeche
} from '../utils/kassenzeichenHelper';
import CONTACTS_MAP, { defaultContact } from '../constants/contacts';
import ChangeRequestEditView from '../components/changerequests/CR50Flaechendialog';
import AnnotationEditView from '../components/changerequests/CR60AnnotationDialog';
import { routerActions as RoutingActions } from 'react-router-redux';

import * as Scroll from 'react-scroll';

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
		routingActions: bindActionCreators(RoutingActions, dispatch),
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

export class VerdisOnlineHelp_ extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	//   componentWillMount() {
	//   }
	//   componentDidUpdate() {
	//   }

	componentDidMount() {}

	render() {
		return (
			<div style={{ margin: 25 }}>
				<HelpAndSettings
					showApplicationMenu={this.props.uiStateActions.showApplicationMenu}
					applicationMenuActiveKey={this.props.uiState.applicationMenuActiveKey}
					setApplicationMenuActiveKey={
						this.props.uiStateActions.setApplicationMenuActiveKey
					}
					applicationMenuVisible={true}
					height={this.props.uiState.height}
					selectedBackgroundIndex={this.props.mapping.selectedBackgroundIndex}
					backgrounds={this.props.mapping.backgrounds}
					setBackgroundIndex={this.props.mappingActions.setSelectedBackgroundIndex}
					showOnSeperatePage={true}
				/>
			</div>
		);
	}
}

const VerdisOnlineHelp = connect(mapStateToProps, mapDispatchToProps)(VerdisOnlineHelp_);
export default VerdisOnlineHelp;

VerdisOnlineHelp_.propTypes = {
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
