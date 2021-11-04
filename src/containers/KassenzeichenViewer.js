import PropTypes from "prop-types";
import React from "react";
import VerdisMap from "./VerdisMap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import KassenzeichenPanel from "../components/KassenzeichenPanel";
import ContactPanel from "../components/ContactPanel";

import KassenzeichenFlaechenChartPanel from "../components/KassenzeichenFlaechenChartPanel";
import FlaechenPanel from "../components/FlaechenPanel";
import AnnotationPanel from "../components/AnnotationPanel";
import Waiting from "./Waiting";
import { Alert } from "react-bootstrap";
import Flexbox from "flexbox-react";
import {
    actions as KassenzeichenActions,
    getNumberOfPendingChanges
} from "../redux/modules/kassenzeichen";
import { actions as UiStateActions } from "../redux/modules/uiState";
import { actions as MappingActions } from "../redux/modules/mapping";
import { actions as AuthActions } from "../redux/modules/auth";
import { appModes as APP_MODES } from "../constants/uiConstants";
import { createFlaechenStyler } from "../utils/kassenzeichenMappingTools";
import AppNavbar from "../containers/VerdisOnlineAppNavbar";
import HelpAndSettings from "../components/helpandsettings/Menu00MainComponent";
import ChangeRequests from "../components/changerequests/CR00MainComponent";
import {
    kassenzeichenFlaechenSorter,
    getOverlayTextForFlaeche,
    getCRsForFlaeche
} from "../utils/kassenzeichenHelper";
import CONTACTS_MAP, { defaultContact } from "../constants/contacts";
import ChangeRequestEditView from "../components/changerequests/CR50Flaechendialog";
import AnnotationEditView from "../components/changerequests/CR60AnnotationDialog";
import { routerActions as RoutingActions } from "react-router-redux";
import sysend from "sysend";
import queryString from "query-string";
import { removeQueryPart } from "../utils/routingHelper";

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

export class KassenzeichenViewer_ extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.kassenZeichenPanelClick = this.kassenZeichenPanelClick.bind(this);
        this.kassenZeichenPanelD3Click = this.kassenZeichenPanelD3Click.bind(this);
        this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
        this.isFlaecheSelected = this.isFlaecheSelected.bind(this);
        this.flaechenPanelClick = this.flaechenPanelClick.bind(this);
        this.flaechenMapClick = this.flaechenMapClick.bind(this);
        this.reloadOnEmailVerification = this.reloadOnEmailVerification.bind(this);
        this.flaechenPanelRefs = {};
    }

    componentDidMount() {
        sysend.on("reloadOnEmailVerification", this.reloadOnEmailVerification);
        const crOpen = queryString.parse(this.props.routing.location.search).crOpen;
        if (crOpen !== undefined) {
            this.props.uiStateActions.showChangeRequestsMenu(true);
            this.props.routingActions.push(
                this.props.routing.location.pathname +
                    removeQueryPart(this.props.routing.location.search, "crOpen")
            );
        }
        const verificationCode = queryString.parse(this.props.routing.location.search)
            .emailVerificationCode;
        if (verificationCode !== undefined) {
            this.props.kassenzeichenActions.completeEmailChange(verificationCode, result => {
                if ((result.aenderungsanfrage || {}).emailVerifiziert) {
                    sysend.broadcast("reloadOnEmailVerification");
                    this.props.uiStateActions.showInfo("Verifizierung erfolgreich");
                    setTimeout(() => {
                        this.props.uiStateActions.hideInfo();
                    }, 1500);
                } else {
                    this.props.uiStateActions.showError("Verifizierung fehlgeschlagen");
                    setTimeout(() => {
                        this.props.uiStateActions.hideInfo();
                    }, 2500);
                }
            });
            this.props.routingActions.push(
                this.props.routing.location.pathname +
                    removeQueryPart(this.props.routing.location.search, "emailVerificationCode")
            );
        }
        if (this.props.auth.stac) {
            if (this.props.auth.succesfullLogin === false) {
                this.props.authActions.setLoginInProgress();
                this.props.uiStateActions.showInfo("Kassenzeichen wird wieder geladen");
                this.props.kassenzeichenActions.getKassenzeichenbySTAC(
                    this.props.auth.stac,
                    success => {
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
        } else {
            this.props.routingActions.push("/");
        }
    }

    reloadOnEmailVerification() {
        const changeRequestMenuVisible =
            this.props.uiState.changeRequestsMenuVisible === true &&
            this.props.uiState.applicationMenuVisible === false;

        if (changeRequestMenuVisible) {
            this.props.routingActions.push(this.props.routing.location.pathname + "?crOpen");
        }
        window.location.reload();
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
            this.props.mappingActions.setSelectedFeatureIndexWithSelector(feature => {
                return feature.properties.id === flaeche.id;
            });
            this.flaechenPanelRefs[flaeche.id].scrollToVisible();
        }
    }

    flaechenMapClick(event, feature) {
        if (this.isFlaecheSelected(feature.properties) === true) {
            // if (feature.properties.type !== 'annotation') {
            this.props.mappingActions.fitSelectedFeatureBounds();
            // } else {
            // 	// console.log('layer ', event.sourceTarget);
            // 	// event.sourceTarget.toggleEdit();
            // }
        } else {
            this.props.mappingActions.setSelectedFeatureIndexWithSelector(testfeature => {
                return testfeature.properties.id === feature.properties.id;
            });
            this.flaechenPanelRefs[feature.properties.id].scrollToVisible();
        }
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
        const { crDraftCounter } = getNumberOfPendingChanges(
            this.props.kassenzeichen.aenderungsanfrage
        );
        let draftAlert;
        if (crDraftCounter > 0) {
            draftAlert = (
                <div
                    style={{
                        position: "absolute",
                        top: 60,
                        right: 285,
                        zIndex: 500,
                        width: 500,
                        opacity: 0.9
                    }}
                >
                    <Alert
                        bsStyle="danger"
                        onDismiss={() => {
                            this.props.uiStateActions.showChangeRequestsMenu(true);
                        }}
                    >
                        <h5>
                            <b>Sie haben momentan nicht eingereichte Änderungen.</b> Bitte beachten
                            Sie, dass Änderungswünsche, Anmerkungen und Ihre hochgeladenen Dokumente
                            erst für den Sachbearbeiter sichtbar werden, wenn sie die Änderungen
                            freigegeben/entsperrt und eingereicht haben.
                        </h5>
                    </Alert>
                </div>
            );
        }

        // if (this.props.kassenzeichen.kassenzeichennummer8 == 60432515) {
        // 	throw new Error('Artificial Error');
        // }
        if (new URLSearchParams(window.location.href).get("produceError")) {
            throw new Error("Artificial Error");
        }

        if (this.props.uiState.catchedError !== undefined) {
            throw new Error("UI State Error: " + this.props.uiState.catchedError);
        }

        let flaechenInfoOverlay;
        let verdisMapWithAdditionalComponents;
        let mapHeight;
        if (this.props.uiState.height) {
            mapHeight = this.props.uiState.height - 55;
        } else {
            mapHeight = 50;
        }
        const changerequests = this.props.kassenzeichen.aenderungsanfrage;
        const changerequestMessagesArray =
            (changerequests || { nachrichten: [] }).nachrichten || [];
        const sMsgs = changerequestMessagesArray.sort((a, b) => a.timestamp - b.timestamp);
        const documents = [];

        sMsgs.forEach(msg => {
            //if a document exists, add it to the documents array
            if (msg.anhang !== undefined && msg.anhang.length > 0) {
                msg.anhang.forEach(anhang => {
                    documents.push(anhang);
                });
            }
        });
        const detailsStyle = {
            backgroundColor: "#EEE",
            padding: "5px 5px 5px 5px",
            overflow: "auto"
        };

        let flaechen = [];
        let anmerkungsflaechen = [];
        let flComps = [];

        if (this.props.kassenzeichen.flaechen && this.props.uiState.detailElementsEnabled) {
            flaechen = this.props.kassenzeichen.flaechen.concat().sort(kassenzeichenFlaechenSorter);
        }

        if (
            this.props.kassenzeichen.aenderungsanfrage !== undefined &&
            this.props.kassenzeichen.aenderungsanfrage !== null &&
            this.props.kassenzeichen.aenderungsanfrage.geometrien !== undefined
        ) {
            const keys = Object.keys(this.props.kassenzeichen.aenderungsanfrage.geometrien);
            for (const key of keys) {
                anmerkungsflaechen.push(this.props.kassenzeichen.aenderungsanfrage.geometrien[key]);
            }
        }

        let kassenzeichenPanel;
        let kassenzeichenHorizontalFlaechenChartsPanel;
        let kassenzeichenVerticalFlaechenChartsPanel;

        let contact;
        let creator = defaultContact;
        try {
            creator = this.props.kassenzeichen.stac_options.creatorUserName;
        } catch (e) {}
        if (this.props.kassenzeichen.contactinfo === undefined) {
            if (CONTACTS_MAP.has(creator)) {
                contact = CONTACTS_MAP.get(creator);
            } else {
                contact = CONTACTS_MAP.get(defaultContact);
            }
        } else {
            contact = this.props.kassenzeichen.contactinfo;
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
                    orientation="vertical"
                    changeRequestsEditMode={this.props.uiState.changeRequestsEditMode}
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
            !this.props.uiState.chartElementsEnabled &&
            !this.props.uiState.kanalElementsEnabled &&
            !this.props.uiState.filterElementEnabled &&
            !this.props.uiState.detailElementsEnabled;

        if (this.props.kassenzeichen.id === -1 || nothingEnabled) {
            verdisMapWithAdditionalComponents = (
                <div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        authMode={APP_MODES.STAC}
                        height={mapHeight}
                        featureClickHandler={this.flaechenMapClick}
                        backgroundlayers={this.props.match.params.layers}
                        changeRequestsEditMode={this.props.uiState.changeRequestsEditMode}
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
                                changerequest={getCRsForFlaeche(that.props.kassenzeichen, flaeche)}
                                editmode={that.props.uiState.changeRequestsEditMode}
                                display={
                                    that.props.uiState.changeRequestsEditMode === true
                                        ? "cr"
                                        : "original"
                                }
                            />
                        </Flexbox>
                    );
                });
            }
            verdisMapWithAdditionalComponents = (
                <div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        authMode={APP_MODES.STAC}
                        height={mapHeight - horizontalPanelHeight - 25}
                        featureClickHandler={this.flaechenMapClick}
                        featureCollectionStyle={createFlaechenStyler(
                            this.props.uiState.changeRequestsEditMode,
                            this.props.kassenzeichen
                        )}
                        backgroundlayers={this.props.match.params.layers}
                        changeRequestsEditMode={this.props.uiState.changeRequestsEditMode}
                    />
                    <Flexbox flexDirection="row" style={detailsStyle}>
                        <Flexbox
                            height={"" + horizontalPanelHeight}
                            minWidth={"" + horizontalPanelWidth}
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
                if (anmerkungsflaechen) {
                    const sortedAnmerkungsflaechen = anmerkungsflaechen.sort((a, b) => {
                        return (
                            Number(a.id.replace("anno.", "")) - Number(b.id.replace("anno.", ""))
                        );
                    });
                    if (that.props.uiState.changeRequestsEditMode === true) {
                        flComps = sortedAnmerkungsflaechen.map(annotationFeature => {
                            const sel = that.isFlaecheSelected(annotationFeature);

                            const ap = (
                                <AnnotationPanel
                                    key={"AnnotationPanel." + JSON.stringify(annotationFeature)}
                                    ref={c => {
                                        that.flaechenPanelRefs[annotationFeature.id] = c;
                                    }}
                                    annotationFeature={annotationFeature}
                                    selected={sel}
                                    showEditAnnoMenu={() => {
                                        that.props.uiStateActions.showCRAnnotationEditUI(
                                            annotationFeature,
                                            {}
                                        );
                                    }}
                                    inPolyEditMode={that.props.mapping.idsInEdit.includes(
                                        annotationFeature.id
                                    )}
                                    togglePolyEditMode={() => {
                                        if (
                                            that.props.mapping.idsInEdit.includes(
                                                annotationFeature.id
                                            )
                                        ) {
                                            const newIds = that.props.mapping.idsInEdit.filter(
                                                id => id !== annotationFeature.id
                                            );
                                            that.props.mappingActions.setIdsInEdit(newIds);
                                        } else {
                                            const newIds = JSON.parse(
                                                JSON.stringify(that.props.mapping.idsInEdit)
                                            );
                                            newIds.push(annotationFeature.id);
                                            that.props.mappingActions.setIdsInEdit(newIds);
                                        }
                                    }}
                                    clickHandler={that.flaechenPanelClick}
                                    //map={this.verdisMap.wrappedInstance.leafletRoutedMap}
                                    // layer={getLayerForFeatureId(
                                    // 	this.verdisMap.wrappedInstance.leafletRoutedMap,
                                    // 	annotationFeature.id
                                    // )}
                                />
                            );

                            return ap;
                        });
                    }
                }
                const comps = flaechen.map(function(flaeche) {
                    const sel = that.isFlaecheSelected(flaeche);
                    const cr = getCRsForFlaeche(that.props.kassenzeichen, flaeche);
                    return (
                        <FlaechenPanel
                            ref={c => {
                                that.flaechenPanelRefs[flaeche.id] = c;
                            }}
                            key={flaeche.id + "." + sel}
                            selected={sel}
                            flaechenPanelClickHandler={that.flaechenPanelClick}
                            flaeche={flaeche}
                            display={
                                that.props.uiState.changeRequestsEditMode === true
                                    ? "cr"
                                    : "original"
                            }
                            changerequest={cr}
                            editmode={that.props.uiState.changeRequestsEditMode}
                            showEditCRMenu={() => {
                                that.props.uiStateActions.showCREditUI(flaeche, cr);
                            }}
                        />
                    );
                });
                flComps = [...flComps, ...comps];
            }

            verdisMapWithAdditionalComponents = (
                <div>
                    <div
                        style={Object.assign({}, detailsStyle, {
                            height: mapHeight + "px",
                            width: verticalPanelWidth + "px",
                            float: "right"
                        })}
                    >
                        {contactPanel}
                        {kassenzeichenPanel}
                        {kassenzeichenHorizontalFlaechenChartsPanel}
                        {flComps}
                    </div>
                    <VerdisMap
                        ref={verdisMapRef => {
                            this.verdisMap = verdisMapRef;
                        }}
                        authMode={APP_MODES.STAC}
                        height={mapHeight}
                        featureClickHandler={this.flaechenMapClick}
                        featureCollectionStyle={createFlaechenStyler(
                            this.props.uiState.changeRequestsEditMode,
                            this.props.kassenzeichen
                        )}
                        changeRequestsEditMode={this.props.uiState.changeRequestsEditMode}
                        backgroundlayers={this.props.match.params.layers}
                    />
                </div>
            );

            if (
                selectedFlaeche !== undefined &&
                selectedFlaeche.properties.type !== "annotation" &&
                this.props.uiState.infoElementsEnabled
            ) {
                flaechenInfoOverlay = (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 20,
                            zIndex: 500,
                            width: this.props.uiState.width - verticalPanelWidth - 40,
                            opacity: 0.9
                        }}
                    >
                        <Alert
                            bsStyle="warning"
                            onDismiss={() => {
                                this.props.uiStateActions.toggleInfoElements();
                            }}
                        >
                            {//set cr (second param) to undefined if not in edit mode
                            getOverlayTextForFlaeche(
                                selectedFlaeche.properties,
                                this.props.uiState.changeRequestsEditMode === true
                                    ? getCRsForFlaeche(this.props.kassenzeichen, {
                                          flaechenbezeichnung: selectedFlaeche.properties.bez
                                      })
                                    : undefined
                            )}
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
                        "Waiting.visible." +
                        this.props.uiState.waitingVisible +
                        " ...message." +
                        this.props.uiState.waitingMessage +
                        " ...type." +
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
                    visible={
                        this.props.uiState.changeRequestsMenuVisible === true &&
                        this.props.uiState.applicationMenuVisible === false
                    }
                    showChangeRequestMenu={this.props.uiStateActions.showChangeRequestsMenu}
                    height={mapHeight + 10}
                    kassenzeichen={this.props.kassenzeichen}
                    addMessage={this.props.kassenzeichenActions.addChangeRequestMessage}
                    changeEmail={this.props.kassenzeichenActions.requestEmailChange}
                    confirmEmail={this.props.kassenzeichenActions.completeEmailChange}
                    removeLastUserMessage={
                        this.props.kassenzeichenActions.removeLastChangeRequestMessage
                    }
                    uploadCRDoc={this.props.kassenzeichenActions.addCRDoc}
                    crEditMode={this.props.uiState.changeRequestsEditMode}
                    setCREditMode={this.props.uiStateActions.setChangeRequestInEditMode}
                    submit={this.props.kassenzeichenActions.submitCR}
                    cloudStorageStatus={this.props.uiState.cloudStorageStatus}
                    documents={documents}
                    showModalMenu={activekey => {
                        if (activekey !== undefined) {
                            this.props.uiStateActions.setApplicationMenuActiveKey(activekey);
                        }
                        this.props.uiStateActions.showApplicationMenu(true);
                    }}
                    localErrorMessages={this.props.uiState.localErrorMessages}
                    addLocalErrorMessage={this.props.uiStateActions.addLocalErrorMessage}
                />
                <ChangeRequestEditView
                    height={mapHeight + 10}
                    visible={this.props.uiState.changeRequestEditViewVisible}
                    showChangeRequestMenu={storeIt => {
                        if (storeIt === true) {
                            this.props.kassenzeichenActions.setChangeRequestsForFlaeche(
                                this.props.uiState.changeRequestEditViewFlaeche,
                                this.props.uiState.changeRequestEditViewCR
                            );
                        }
                        this.props.uiStateActions.showChangeRequestsEditView(false);
                    }}
                    flaeche={this.props.uiState.changeRequestEditViewFlaeche}
                    flaechenCR={this.props.uiState.changeRequestEditViewCR}
                    setFlaechenCR={cr => {
                        this.props.uiStateActions.setChangeRequestsEditViewFlaecheAndCR(
                            this.props.uiState.changeRequestEditViewFlaeche,
                            cr
                        );
                    }}
                    uploadCRDoc={this.props.kassenzeichenActions.addCRDoc}
                    documents={documents}
                    addFiles={attachments => {
                        const msg = {
                            typ: "CITIZEN",
                            timestamp: Date.now(),
                            draft: true,
                            anhang: attachments
                        };

                        this.props.kassenzeichenActions.addChangeRequestMessage(msg);
                    }}
                    localErrorMessages={this.props.uiState.localErrorMessages}
                    addLocalErrorMessage={this.props.uiStateActions.addLocalErrorMessage}
                />
                <AnnotationEditView
                    height={mapHeight + 10}
                    visible={this.props.uiState.changeRequestAnnotationEditViewVisible}
                    annotationFeature={this.props.uiState.changeRequestAnnotationEditViewAnnotation}
                    setNewAnnotation={anno => {
                        this.props.uiStateActions.setChangeRequestsAnnotationEditViewAnnotationAndCR(
                            anno
                        );
                    }}
                    showAnnotationEditView={storeIt => {
                        if (storeIt === true) {
                            this.props.kassenzeichenActions.changeAnnotation(
                                this.props.uiState.changeRequestAnnotationEditViewAnnotation
                            );
                        }
                        this.props.uiStateActions.showChangeRequestsAnnotationEditView(false);
                    }}
                    deleteAnnotation={this.props.kassenzeichenActions.removeAnnotation}
                />

                {verdisMapWithAdditionalComponents}
                {flaechenInfoOverlay}
                {draftAlert}
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
