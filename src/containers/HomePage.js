import PropTypes from 'prop-types';
import React from 'react';
import VerdisMap from './VerdisMap';
import { connect } from 'react-redux';
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import KassenzeichenChartPanel from '../components/KassenzeichenChartPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import Flexbox from 'flexbox-react';
import { kassenzeichenFlaechenSorter } from '../utils/kassenzeichenHelper';

function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		kassenzeichen: state.kassenzeichen
	};
}

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class HomePage_ extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
	}
	flaechenPanelClick() {
		this.verdisMap.getWrappedInstance().fitBounds();
	}
	render() {
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
		console.log(flaechen);
		let kassenzeichenPanel;
		let kassenzeichenHorizontalChartsPanel;
		let kassenzeichenVerticalChartsPanel;

		if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
			kassenzeichenPanel = (
				<KassenzeichenPanel
					onClick={this.flaechenPanelClick}
					kassenzeichen={this.props.kassenzeichen}
				/>
			);
		}
		if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
			kassenzeichenHorizontalChartsPanel = (
				<KassenzeichenChartPanel
					kassenzeichen={this.props.kassenzeichen}
					orientation='vertical'
				/>
			);
			kassenzeichenVerticalChartsPanel = (
				<Flexbox height={'' + horizontalPanelHeight} minWidth={'' + horizontalPanelWidth}>
					<KassenzeichenChartPanel
						kassenzeichen={this.props.kassenzeichen}
						orientation='horizontal'
					/>
				</Flexbox>
			);
		}

		let nothingEnabled =
			!this.props.uiState.infoElementsEnabled &&
			!this.props.uiState.chartElementsEnabled &&
			!this.props.uiState.kanalElementsEnabled &&
			!this.props.uiState.filterElementEnabled &&
			!this.props.uiState.detailElementsEnabled;

		if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
			return (
				<div>
					<VerdisMap
						ref={(verdisMapRef) => {
							this.verdisMap = verdisMapRef;
						}}
						height={mapHeight}
					/>
				</div>
			);
		} else if (this.props.uiState.width < switchToBottomWhenSmallerThan) {
			if (flaechen) {
				let i = 0;
				flComps = flaechen.map(function(flaeche) {
					return (
						<Flexbox
							key={'flex' + i++ + '.' + flaeche.id}
							height={horizontalPanelHeight}
							minWidth={horizontalPanelWidth}
						>
							<FlaechenPanel
								editmode={this.props.uiState.changeRequestsEditMode}
								key={flaeche.id}
								flaeche={flaeche}
							/>
						</Flexbox>
					);
				});
			}
			return (
				<div>
					<VerdisMap
						ref={(verdisMapRef) => {
							this.verdisMap = verdisMapRef;
						}}
						height={mapHeight - horizontalPanelHeight - 25}
					/>
					<Flexbox flexDirection='row' style={detailsStyle}>
						<Flexbox height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
							{kassenzeichenPanel}
						</Flexbox>
						{kassenzeichenVerticalChartsPanel}
						{flComps}
					</Flexbox>
				</div>
			);
		} else {
			if (flaechen) {
				flComps = flaechen.map(function(flaeche) {
					return (
						<FlaechenPanel
							editmode={this.props.uiState.changeRequestsEditMode}
							key={flaeche.id}
							flaeche={flaeche}
						/>
					);
				});
			}
			return (
				<div>
					<div
						style={Object.assign({}, detailsStyle, {
							height: mapHeight + 'px',
							width: verticalPanelWidth + 'px',
							float: 'right'
						})}
					>
						{kassenzeichenPanel}
						{kassenzeichenHorizontalChartsPanel}
						{flComps}
					</div>
					<VerdisMap height={mapHeight} />
				</div>
			);
		}
	}
}

const HomePage = connect(mapStateToProps)(HomePage_);
export default HomePage;

HomePage_.propTypes = {
	ui: PropTypes.object,
	kassenzeichen: PropTypes.object,
	uiState: PropTypes.object
};
