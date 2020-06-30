import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { routerActions as RoutingActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import HelpAndSettings from '../components/helpandsettings/Menu00MainComponent';
import { actions as AuthActions } from '../redux/modules/auth';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as MappingActions } from '../redux/modules/mapping';
import { actions as UiStateActions } from '../redux/modules/uiState';

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

export class VerdisOnlineHelp_ extends React.Component {
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
