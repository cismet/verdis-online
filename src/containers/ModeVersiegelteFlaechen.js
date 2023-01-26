import PropTypes from "prop-types";
import React from "react";
import VerdisMap from "./VerdisMap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import KassenzeichenPanel from "../components/KassenzeichenPanel";
import KassenzeichenFlaechenChartPanel from "../components/KassenzeichenFlaechenChartPanel";
import FlaechenPanel from "../components/FlaechenPanel";
import Flexbox from "flexbox-react";
import { actions as KassenzeichenActions } from "../redux/modules/kassenzeichen";
import { actions as UiStateActions } from "../redux/modules/uiState";
import { actions as MappingActions } from "../redux/modules/mapping";
import { appModes as APP_MODES } from "../constants/uiConstants";
import {
    createFlaechenStyler,
    getFlaechenFeatureCollection
} from "../utils/kassenzeichenMappingTools";
import AppNavbar from "../containers/Verdis2GoAppNavbar";
import { needsProofSingleFlaeche } from "../utils/kassenzeichenHelper";

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
        mappingActions: bindActionCreators(MappingActions, dispatch)
    };
}

//eslint-disable-next-line
let flaechenPanelRefs = {};

const verticalPanelWidth = 280;

const horizontalPanelHeight = 150;
const horizontalPanelWidth = 200;

const switchToBottomWhenSmallerThan = 900;

export class VersiegelteFlaechen_ extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
        this.kassenZeichenPanelD3Click = this.kassenZeichenPanelD3Click.bind(this);
        this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
        this.checkRouteAndSearch = this.checkRouteAndSearch.bind(this);
        this.isFlaecheSelected = this.isFlaecheSelected.bind(this);
        this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
        this.flaechenMapClick = this.flaechenMapClick.bind(this);
        this.flaechenPanelRefs = {};
    }

    componentWillMount() {
        this.checkRouteAndSearch();
    }
    componentDidUpdate() {
        this.checkRouteAndSearch();
    }

    checkRouteAndSearch() {
        if (this.props.uiState.mode !== APP_MODES.VERSIEGELTE_FLAECHEN) {
            this.props.uiStateActions.setMode(APP_MODES.VERSIEGELTE_FLAECHEN);
            if (this.props.kassenzeichen.id !== -1) {
                this.props.mappingActions.setFeatureCollection(
                    getFlaechenFeatureCollection(this.props.kassenzeichen)
                );
                this.props.mappingActions.setSelectedFeatureIndex(null);
            }
        }
        if (
            this.props.uiState.searchForKassenzeichenVisible === false &&
            this.props.uiState.searchInProgress === false
        ) {
            if (
                typeof this.props.match.params.kassenzeichen !== "undefined" &&
                parseInt(this.props.match.params.kassenzeichen, 10) !==
                    parseInt(this.props.kassenzeichen.kassenzeichennummer8, 10)
            ) {
                if (this.props.auth.user !== null) {
                    let urlSearchParams = new URLSearchParams(this.props.routing.location.search);

                    if (
                        typeof urlSearchParams.get("lat") === "undefined" ||
                        typeof urlSearchParams.get("lng") === "undefined" ||
                        typeof urlSearchParams.get("zoom") === "undefined"
                    ) {
                        this.props.kassenzeichenActions.searchByKassenzeichen(
                            this.props.match.params.kassenzeichen,
                            true
                        );
                    } else {
                        this.props.kassenzeichenActions.searchByKassenzeichen(
                            this.props.match.params.kassenzeichen,
                            false
                        );
                    }
                } else {
                    this.props.uiStateActions.setKassenzeichenToSearchFor(
                        this.props.match.params.kassenzeichen
                    );
                }
            } else {
                //console.log("SKIP");
            }
        }
    }

    kassenZeichenPanelClick() {
        this.verdisMap.getWrappedInstance().fitBounds();
    }

    kassenZeichenPanelD3Click() {
        this.props.kassenzeichenActions.openD3();
    }

    flaechenPanelClick(flaeche) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector(feature => {
            return feature.properties.id === flaeche.id;
        });

        this.flaechenPanelRefs[flaeche.id].scrollToVisible();
    }

    flaechenMapClick(event, feature) {
        this.props.mappingActions.setSelectedFeatureIndexWithSelector(testfeature => {
            return testfeature.properties.id === feature.properties.id;
        });
        this.flaechenPanelRefs[feature.properties.id].scrollToVisible();
    }

    isFlaecheSelected(flaeche) {
        return (
            typeof this.props.mapping.featureCollection !== "undefined" &&
            this.props.mapping.featureCollection.length > 0 &&
            typeof this.props.mapping.selectedIndex !== "undefined" &&
            this.props.mapping.featureCollection.length > this.props.mapping.selectedIndex &&
            typeof this.props.mapping.featureCollection[this.props.mapping.selectedIndex] !==
                "undefined" &&
            this.props.mapping.featureCollection[this.props.mapping.selectedIndex].properties.id ===
                flaeche.id
        );
    }

    render() {
        let map;
        let mapHeight;
        if (this.props.uiState.height) {
            mapHeight = this.props.uiState.height - 55;
        } else {
            mapHeight = 50;
        }

        const detailsStyle = {
            backgroundColor: "#EEE",
            padding: "5px 5px 5px 5px",
            overflow: "auto"
        };

        let flaechen = [];
        let flComps = [];

        if (this.props.kassenzeichen.flaechen && this.props.uiState.detailElementsEnabled) {
            flaechen = this.props.kassenzeichen.flaechen.concat().sort((fa, fb) => {
                if (!isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
                    return +fa.flaechenbezeichnung - +fb.flaechenbezeichnung;
                } else if (!isNaN(fa.flaechenbezeichnung) && isNaN(fb.flaechenbezeichnung)) {
                    return -1;
                } else if (isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
                    return 1;
                } else {
                    if (fa.flaechenbezeichnung < fb.flaechenbezeichnung) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            });
        }
        let kassenzeichenPanel;
        let kassenzeichenHorizontalFlaechenChartsPanel;
        let kassenzeichenVerticalFlaechenChartsPanel;

        if (this.props.uiState.infoElementsEnabled && this.props.kassenzeichen.id !== -1) {
            kassenzeichenPanel = (
                <KassenzeichenPanel
                    onClick={this.kassenZeichenPanelClick}
                    d3Enabled={this.props.uiState.d3Available}
                    d3Click={this.kassenZeichenPanelD3Click}
                    kassenzeichen={this.props.kassenzeichen}
                />
            );
        }
        if (this.props.uiState.chartElementsEnabled && this.props.kassenzeichen.id !== -1) {
            kassenzeichenHorizontalFlaechenChartsPanel = (
                <KassenzeichenFlaechenChartPanel
                    kassenzeichen={this.props.kassenzeichen}
                    orientation="vertical"
                />
            );
            kassenzeichenVerticalFlaechenChartsPanel = (
                <Flexbox height={"" + horizontalPanelHeight} minWidth={"" + horizontalPanelWidth}>
                    <KassenzeichenFlaechenChartPanel
                        kassenzeichen={this.props.kassenzeichen}
                        orientation="horizontal"
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
            map = (
                <div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        height={mapHeight}
                        featureClickHandler={this.flaechenMapClick}
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
                            key={"flex" + i++ + "." + flaeche.id}
                            height={"" + horizontalPanelHeight}
                            minWidth={"" + horizontalPanelWidth}
                        >
                            <FlaechenPanel
                                ref={c => {
                                    that.flaechenPanelRefs[flaeche.id] = c;
                                }}
                                key={flaeche.id + "." + sel}
                                selected={sel}
                                flaechenPanelClickHandler={that.flaechenPanelClick}
                                flaeche={flaeche}
                                //proofNeeded={needsProofSingleFlaeche(flaeche)}
                                globalCR={that.props.kassenzeichen}
                                editmode={that.props.uiState.changeRequestsEditMode}
                            />
                        </Flexbox>
                    );
                });
            }
            map = (
                <div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        height={mapHeight - horizontalPanelHeight - 25}
                        featureClickHandler={this.flaechenMapClick}
                        featureCollectionStyle={createFlaechenStyler(
                            this.props.uiState.changeRequestsEditMode,
                            this.props.kassenzeichen
                        )}
                    />
                    <Flexbox flexDirection="row" style={detailsStyle}>
                        <Flexbox
                            height={"" + horizontalPanelHeight}
                            minWidth={"" + horizontalPanelWidth}
                        >
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
                    return (
                        <FlaechenPanel
                            ref={c => {
                                that.flaechenPanelRefs[flaeche.id] = c;
                            }}
                            key={flaeche.id + "." + sel}
                            selected={sel}
                            flaechenPanelClickHandler={that.flaechenPanelClick}
                            flaeche={flaeche}
                            editmode={that.props.uiState.changeRequestsEditMode}
                        />
                    );
                });
            }

            map = (
                <div>
                    <div
                        style={Object.assign({}, detailsStyle, {
                            height: mapHeight + "px",
                            width: verticalPanelWidth + "px",
                            float: "right"
                        })}
                    >
                        {kassenzeichenPanel}
                        {kassenzeichenHorizontalFlaechenChartsPanel}
                        {flComps}
                    </div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        height={mapHeight}
                        featureClickHandler={this.flaechenMapClick}
                        featureCollectionStyle={createFlaechenStyler(
                            this.props.uiState.changeRequestsEditMode,
                            this.props.kassenzeichen
                        )}
                    />
                </div>
            );
        }

        return (
            <div>
                <AppNavbar />
                {map}
            </div>
        );
    }
}

const VersiegelteFlaechen = connect(mapStateToProps, mapDispatchToProps)(VersiegelteFlaechen_);
export default VersiegelteFlaechen;

VersiegelteFlaechen_.propTypes = {
    ui: PropTypes.object,
    kassenzeichen: PropTypes.object,
    mapping: PropTypes.object,
    uiState: PropTypes.object,
    match: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    routing: PropTypes.object.isRequired,
    kassenzeichenActions: PropTypes.object.isRequired,
    uiStateActions: PropTypes.object.isRequired,
    mappingActions: PropTypes.object.isRequired
};
