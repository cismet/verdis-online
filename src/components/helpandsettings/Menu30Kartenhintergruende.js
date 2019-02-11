import React from 'react';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';
import SettingsPanelWithPreviewSection from '../commons/SettingsPanelWithPreviewSection';
import { MappingConstants, getLayersByName } from 'react-cismap';
import { FormGroup, ControlLabel, Radio } from 'react-bootstrap';
import { Map } from 'react-leaflet';

const Component = ({
	applicationMenuActiveKey,
	setApplicationMenuActiveKey,
	selectedBackgroundIndex = 0,
	backgrounds = [],
	setBackgroundIndex = () => {},
	mapRef,
	width = 20,
	urlSearch
}) => {
	let namedMapStyle = new URLSearchParams(urlSearch).get('mapStyle') || 'default';
	let zoom = 13;
	let layers = backgrounds[selectedBackgroundIndex].layerkey;
	if (mapRef) {
		layers = mapRef.wrappedInstance.props.backgroundlayers;
	}
	const mapPreview = (
		<Map
			ref={(leafletMap) => {
				this.leafletMap = leafletMap;
			}}
			crs={MappingConstants.crs25832}
			style={{ height: 300 }}
			center={{
				lat: 51.26357182763206,
				lng: 7.176242149341344
			}}
			zoomControl={false}
			attributionControl={false}
			dragging={false}
			keyboard={false}
			zoom={zoom}
			minZoom={zoom}
			maxZoom={zoom}
		>
			{getLayersByName(layers, namedMapStyle)}
		</Map>
	);
	const preview = (
		<div>
			<FormGroup>
				<ControlLabel>Vorschau:</ControlLabel>
				{mapPreview}
			</FormGroup>
		</div>
	);


	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey="kartenhintergruende"
			sectionTitle="Kartenhintergründe"
			sectionBsStyle="info"
			sectionContent={
				<div>
					<p>
						Weiter unten finden Sie ein Kontrollfeld, mit dem Sie aus drei verschiedenen Hintergrundkarten
						auswählen können: einer topographischen Karte in Graustufen, einer Luftbildkarte und einem
						Stadtplan.{' '}
					</p>
					<p>
						Die topographische Karte verschafft Ihnen den besten Überblick über die Situation, da sie einen
						plastischen Geländeindruck vermittelt. Der Stadtplan bietet einen am meisten gewohnten
						Hintergrund zur Orientierung. Die Luftbildkarte ist die anschaulichste Kartengrundlage, sie
						eignet sich daher vor allem für Detailbetrachtungen, ist aber nicht identisch mit dem Luftbild
						aus dem die Auswertungen betrieben werden.
					</p>

					<SettingsPanelWithPreviewSection
						width={width}
						preview={preview}
						settingsSections={[
							<FormGroup key="kartenselector">
								<ControlLabel>Hintergrundkarten</ControlLabel>
								<br />
								{backgrounds.map((item, key) => {
									return (
										<Radio
											id={'cboMapStyleChooser_' + item}
											key={key}
											readOnly={true}
											onClick={(e) => {
												setBackgroundIndex(key);
											}}
											checked={selectedBackgroundIndex === key}
											name="mapBackground"
											inline
										>
											{item.title} &nbsp;
										</Radio>
									);
								})}
							</FormGroup>
						]}
					/>
				</div>
			}
		/>
	);
};
export default Component;
