import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import 'proj4leaflet';
import proj4 from 'proj4';
import { appModes as APP_MODES } from '../constants/uiConstants';
import { actions as KassenzeichenActions } from '../redux/modules/kassenzeichen';
import { actions as MappingActions } from '../redux/modules/mapping';
import { bindActionCreators } from 'redux';
import {
	RoutedMap,
	MappingConstants,
	FeatureCollectionDisplay,
	NewPolyControl,
	NewMarkerControl
} from 'react-cismap';
import { routerActions as RoutingActions } from 'react-router-redux';
import { modifyQueryPart } from '../utils/routingHelper';

import { getMarkerStyleFromFeatureConsideringSelection } from '../utils/kassenzeichenMappingTools';
import { Alert } from 'react-bootstrap';

import L from 'leaflet';
import 'leaflet-editable';

import CyclingBackgroundButton from '../components/CyclingBackgroundButton';

const position = [ 51.272399, 7.199712 ];
function mapStateToProps(state) {
	return {
		uiState: state.uiState,
		kassenzeichen: state.kassenzeichen,
		mapping: state.mapping,
		routing: state.routing
	};
}

function mapDispatchToProps(dispatch) {
	return {
		kassenzeichenActions: bindActionCreators(KassenzeichenActions, dispatch),
		mappingActions: bindActionCreators(MappingActions, dispatch),
		routingActions: bindActionCreators(RoutingActions, dispatch)
	};
}

export class VerdisMap_ extends React.Component {
	constructor(props) {
		super(props);
		this.mapDblClick = this.mapDblClick.bind(this);
		this.featureClick = this.featureClick.bind(this);
		this.fitBounds = this.fitBounds.bind(this);
		this.onFeatureCreation = this.onFeatureCreation.bind(this);
		this.onFeatureChange = this.onFeatureChange.bind(this);
		this.handlePolygonEditMode = this.handlePolygonEditMode.bind(this);
	}

	fitBounds() {
		this.props.mappingActions.fitAll();
	}

	mapDblClick(event) {
		console.log('mapDblClick event', event);
		if (this.props.authMode === APP_MODES.USER_PW) {
			const skipFitBounds = true; //event.originalEvent.shiftKey;
			const latlon = event.latlng;
			const pos = proj4(MappingConstants.proj4crs25832def, [ latlon.lng, latlon.lat ]);
			this.props.kassenzeichenActions.searchByPoint(pos[0], pos[1], !skipFitBounds);
		}
	}

	featureClick(event, feature, layer) {
		console.log('event', event);

		L.DomEvent.stopPropagation(event.originalEvent);
		event.originalEvent.preventDefault();

		this.props.featureClickHandler(event, feature, layer);
	}

	onFeatureCreation(feature) {
		this.props.kassenzeichenActions.addAnnotation(feature);
	}
	onFeatureChange(feature) {
		this.props.kassenzeichenActions.changeAnnotation(feature);
	}

	handlePolygonEditMode() {
		const that = this;

		if (this.leafletRoutedMap !== undefined) {
			this.leafletRoutedMap.leafletMap.leafletElement.eachLayer(function(layer) {
				if (layer.feature !== undefined && layer.feature.properties.type === 'annotation') {
					if (
						that.props.mapping.idsInEdit.includes(layer.feature.id) &&
						that.props.mapping.selectedIndex !== undefined &&
						(that.props.mapping.featureCollection[that.props.mapping.selectedIndex] ||
							{}).id === layer.feature.id
					) {
						layer.enableEdit();
						console.log('VerdisMap-Render layer.enableEdit();');
					} else {
						layer.disableEdit();
					}
				}
			});
		}
	}
	componentDidUpdate() {
		this.handlePolygonEditMode();
	}

	render() {
		const mapStyle = {
			height: this.props.height
		};

		let urlSearchParams = new URLSearchParams(this.props.routing.location.search);

		let annotationEditable = this.props.uiState.changeRequestsEditMode;

		return (
			<RoutedMap
				editable={true}
				onFeatureCreation={this.onFeatureCreation}
				onFeatureChangeAfterEditing={this.onFeatureChange}
				snappingEnabled={true}
				key={
					'leafletRoutedMap0 + '
					//  +
					// JSON.stringify(this.props.mapping.featureCollection) +
					// '+' +
					// this.props.mapping.selectedIndex
				}
				referenceSystem={MappingConstants.crs25832}
				referenceSystemDefinition={MappingConstants.proj4crs25832def}
				ref={(leafletMap) => {
					this.leafletRoutedMap = leafletMap;
				}}
				layers=''
				style={mapStyle}
				ondblclick={this.mapDblClick}
				doubleClickZoom={false}
				locationChangedHandler={(location) => {
					this.props.routingActions.push(
						this.props.routing.location.pathname +
							modifyQueryPart(this.props.routing.location.search, location)
					);
				}}
				autoFitConfiguration={{
					autoFitBounds: this.props.mapping.autoFitBounds,
					autoFitMode: this.props.mapping.autoFitMode,
					autoFitBoundsTarget: this.props.mapping.autoFitBoundsTarget
				}}
				autoFitProcessedHandler={() => this.props.mappingActions.setAutoFit(false)}
				urlSearchParams={urlSearchParams}
				boundingBoxChangedHandler={(bbox) =>
					this.props.mappingActions.mappingBoundsChanged(bbox)}
				backgroundlayers={
					this.props.backgroundlayers ||
					this.props.mapping.backgrounds[this.props.mapping.selectedBackgroundIndex]
						.layerkey
				}
			>
				<FeatureCollectionDisplay
					key={
						'fc' +
						JSON.stringify(this.props.mapping.featureCollection) +
						'+' +
						this.props.mapping.selectedIndex
					}
					featureCollection={this.props.mapping.featureCollection.filter(
						(feature) => true || feature.properties.type !== 'annotation'
					)}
					boundingBox={this.props.mapping.boundingBox}
					clusteringEnabled={false}
					style={this.props.featureCollectionStyle}
					//labeler={flaechenLabeler}
					hoverer={this.props.hoverer}
					featureClickHandler={this.featureClick}
					mapRef={this.leafletRoutedMap}
					showMarkerCollection={urlSearchParams.get('zoom') >= 15}
					markerStyle={getMarkerStyleFromFeatureConsideringSelection}
					snappingGuides={true}
				/>
				{/* 
				<FeatureCollectionDisplay
					key={'anno' + JSON.stringify(this.props.mapping.featureCollection) + ''}
					featureCollection={JSON.parse(
						JSON.stringify(
							this.props.mapping.featureCollection.filter(
								(feature) => feature.properties.type === 'annotation'
							)
						)
					)}
					boundingBox={this.props.mapping.boundingBox}
					style={this.props.featureCollectionStyle}
					hoverer={this.props.hoverer}
					featureClickHandler={this.featureClick}
					mapRef={this.leafletRoutedMap}
					showMarkerCollection={urlSearchParams.get('zoom') >= 15}
					markerStyle={getMarkerStyleFromFeatureConsideringSelection}
					snappingGuides={true}
					editable={true}
				/> */}
				{/* {annotationEditable && (
					<FeatureCollectionDisplay
						editable={true}
						snappingGuides={true}
						onFeatureCreation={onFeatureCreation}
						onFeatureChangeAfterEditing={onFeatureChange}
						editModeStatusChanged={onFeatureChange}
						customType='annotation'
						key={'annotations_' + JSON.stringify(annotations)}
						featureCollection={annotations}
						boundingBox={{
							left: 343647.19856823067,
							top: 5695957.177980389,
							right: 398987.6070465423,
							bottom: 5652273.416315537
						}}
						featureClickHandler={(event, feature) => {
							// console.log('click', event, feature);
							// if (feature.selected === undefined || feature.selected === false) {
							// 	feature.selected = true;
							// } else {
							// 	feature.selected = false;
							// }
							// onFeatureChange(feature);
						}}
						style={(feature) => {
							console.log('style feature', feature.selected);
							const currentColor = '#ffff00';

							let opacity,
								lineColor,
								fillColor = '#B90504',
								markerColor,
								weight = 2;

							if (feature.selected === true) {
								opacity = 0.9;
								lineColor = '#0C7D9D';
								markerColor = 'blue';
							} else {
								opacity = 1;
								lineColor = '#990100';
								markerColor = 'red';
							}

							return {
								color: lineColor,
								radius: 8,
								weight,
								opacity,
								fillColor,
								fillOpacity: 0.6,
								className: 'annotation-' + feature.id,
								defaultMarker: true,
								customMarker: L.ExtraMarkers.icon({
									icon: feature.inEditMode === true ? 'fa-square' : undefined,
									markerColor,
									shape: 'circle',
									prefix: 'fa'
								})
							};
						}}
					/>
				)} */}
				<CyclingBackgroundButton
					key={'CyclingBackgroundButton.' + this.props.mapping.selectedBackgroundIndex}
					position='topleft'
					backgrounds={this.props.mapping.backgrounds}
					setSelectedBackgroundIndex={
						this.props.mappingActions.setSelectedBackgroundIndex
					}
					currentBackgroundIndex={this.props.mapping.selectedBackgroundIndex}
				/>
				{annotationEditable && (
					<NewPolyControl
						key={
							'NewPolyControl + update when CyclingBackgroundButton.' +
							this.props.mapping.selectedBackgroundIndex
						}
					/>
				)}
				{annotationEditable && (
					<NewMarkerControl
						key={
							'NewMarkerControl+ update when CyclingBackgroundButton.' +
							this.props.mapping.selectedBackgroundIndex
						}
					/>
				)}
			</RoutedMap>
		);
	}
}

//{m => { this.leafletRoutedMap = m; }}

const VerdisMap = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(VerdisMap_);

VerdisMap_.propTypes = {
	uiState: PropTypes.object,
	kassenzeichen: PropTypes.object,
	mapping: PropTypes.object,
	height: PropTypes.number,
	kassenzeichenActions: PropTypes.object,
	mappingActions: PropTypes.object.isRequired,
	featureClickHandler: PropTypes.func,
	featureCollectionStyle: PropTypes.func,
	authMode: PropTypes.string,
	backgroundlayers: PropTypes.string
};

VerdisMap_.defaultProps = {
	authMode: APP_MODES.USER_PW
};

export default VerdisMap;
