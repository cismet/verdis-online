import React from "react";
import GenericModalMenuSection from "../commons/GenericModalMenuSection";
import SettingsPanelWithPreviewSection from "../commons/SettingsPanelWithPreviewSection";
import { MappingConstants, getLayersByName } from "react-cismap";
import PreviewMap from "react-cismap/topicmaps/menu/PreviewMap";
import { FormGroup, ControlLabel, Radio } from "react-bootstrap";
import { Map } from "react-leaflet";

const Component = ({
    applicationMenuActiveKey,
    setApplicationMenuActiveKey,
    selectedBackgroundIndex = 0,
    backgrounds = [],
    setBackgroundIndex = () => {},
    mapRef,
    width = 20,
    urlSearch,
    showOnSeperatePage
}) => {
    let namedMapStyle = new URLSearchParams(urlSearch).get("mapStyle") || "default";
    let zoom = 13;
    let layers = backgrounds[selectedBackgroundIndex].layerkey;
    if (mapRef) {
        layers = mapRef.wrappedInstance.props.backgroundlayers;
    }
    const mapPreview = (
        <PreviewMap
            crs={MappingConstants.crs25832}
            style={{
                height: 300
            }}
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
        </PreviewMap>
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
            sectionTitle="Hintergrundkarten"
            sectionBsStyle="info"
            showOnSeperatePage={showOnSeperatePage}
            sectionContent={
                <div>
                    <p>
                        Weiter unten finden Sie ein Kontrollfeld, mit dem Sie aus drei verschiedenen
                        Hintergrundkarten auswählen können: einer topographischen Karte in
                        Graustufen ("Top. Karte"), einer Luftbildkarte und einem Stadtplan.
                    </p>
                    <p>
                        Die topographische Karte verschafft Ihnen den besten Überblick über die
                        Geländesituation, da sie bedeutende Böschungen und Geländeformen darstellt.
                        Der Stadtplan ist die am einfachsten lesbare Hintergrundkarte. Er eignet
                        sich für die schnelle Orientierung in der Karte, da hier die Hausnummern
                        aller Gebäude gut lesbar dargestellt werden. Die Luftbildkarte ist die
                        anschaulichste Kartengrundlage, nützlich vor allem für Detailbetrachtungen.
                        Sie ist aber nicht identisch mit den Luftbildern, die für die Ermittlung der
                        versiegelten Flächen verwendet werden.
                    </p>
                    <p>
                        Die Hintergrundkarte kann auch direkt im Kartenfenster gewechselt werden.
                        Mit einem Klick auf die Hintergrund-Schaltfläche (links oben unterhalb der
                        Schaltflächen + und - für die Zoomstufen) kommen Sie zur nächsten
                        voreingestellten Karte, ohne das Anwendungsmenü öffnen zu müssen.
                    </p>
                    <SettingsPanelWithPreviewSection
                        width={width}
                        preview={preview}
                        settingsSections={[
                            <FormGroup key="kartenselector">
                                {" "}
                                <ControlLabel>Hintergrundkarten</ControlLabel> <br />{" "}
                                {backgrounds.map((item, key) => {
                                    return (
                                        <Radio
                                            id={"cboMapStyleChooser_" + item}
                                            key={key}
                                            readOnly={true}
                                            onClick={e => {
                                                setBackgroundIndex(key);
                                            }}
                                            checked={selectedBackgroundIndex === key}
                                            name="mapBackground"
                                            inline
                                        >
                                            {" "}
                                            {item.title} &nbsp;{" "}
                                        </Radio>
                                    );
                                })}{" "}
                            </FormGroup>
                        ]}
                    />{" "}
                </div>
            }
        />
    );
};
export default Component;
