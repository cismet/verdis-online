import React, { useRef, useState } from "react";
import { Accordion, Button, Modal, Panel } from "react-bootstrap";
import Toggle from "react-bootstrap-toggle";
import "react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import { Icon } from "react-fa";
import FlexView from "react-flexview";
import ConversationInput from "../conversations/ConversationInput";
import CRConversation from "../conversations/CRConversation";
import FlaechenPanel from "../FlaechenPanel";
import AnnotationPanel from "../AnnotationPanel";
import DocPanel from "./CR20DocumentsPanel";
import CloudLoadingAttributeIcon from "../commons/CloudLoadingAttributeIcon";
import { getNumberOfPendingChanges } from "../../redux/modules/kassenzeichen";

const draftHint = `Bitte beachten Sie, dass Änderungswünsche,
	Anmerkungen und Ihre hochgeladenen Dokumente
	erst für den Sachbearbeiter sichtbar werden,
	wenn sie die Änderungen freigegeben/entsperrt
	und eingereicht haben.`;

const scrollToVisible = ref => {
    // console.log('scroll ref', ref.current);
    if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    // scrollIntoViewIfNeeded(ref.current, false, {
    // 	duration: 250
    // });
};

const CR00 = ({
    visible,
    height,
    kassenzeichen,
    showChangeRequestMenu = () => {},
    addMessage = () => {},
    removeLastUserMessage = () => {},
    uploadCRDoc = () => {},
    crEditMode = false,
    setCREditMode = () => {},
    submit = () => {
        console.warn("submit action ist not set, but was triggered.");
    },
    cloudStorageStatus,
    documents,
    showModalMenu = () => {},
    localErrorMessages = [],
    addLocalErrorMessage = () => {}
}) => {
    const scrollDivRef = useRef(null);
    const [locked, setLocked] = useState(true);
    const [hideSystemMessages, setHideSystemMessages] = useState(false);
    const modalBodyStyle = {
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: height - 250
    };
    const { crDraftCounter } = getNumberOfPendingChanges(kassenzeichen.aenderungsanfrage);
    const close = () => {
        setLocked(true);
        showChangeRequestMenu(false);
    };

    const unlockOrSubmit = () => {
        if (locked === true) {
            setLocked(false);
        } else {
            //submit
            submit();
            setLocked(true);
            //then
            //close();
        }
    };

    const changerequests = kassenzeichen.aenderungsanfrage;
    const crMessages = (kassenzeichen.aenderungsanfrage || { nachrichten: [] }).nachrichten;
    const messages = [...crMessages, ...localErrorMessages];

    if (visible === true) {
        const changerequestBezeichnungsArray =
            Object.keys((changerequests || { flaechen: [] }).flaechen || []) || [];
        const changerequestMessagesArray =
            (changerequests || { nachrichten: [] }).nachrichten || [];
        const origPanels = [];
        const crPanels = [];
        const annoPanels = [];
        let lastUserMessage = undefined;
        const sMsgs = changerequestMessagesArray.sort((a, b) => a.timestamp - b.timestamp);

        (changerequestBezeichnungsArray || []).forEach((flaechenbezeichnung, index) => {
            //find flaeche
            const flaeche = kassenzeichen.flaechen.find(
                fCand => fCand.flaechenbezeichnung === flaechenbezeichnung
            );

            //get cr for flaeche
            const cr = changerequests.flaechen[flaechenbezeichnung];

            //create the panels and push them into the arrays
            if (cr !== undefined && flaeche !== undefined) {
                origPanels.push(<FlaechenPanel key={"orig." + index} flaeche={flaeche} />);
                crPanels.push(
                    <FlaechenPanel
                        key={"cr" + index}
                        flaeche={flaeche}
                        display={"cr"}
                        changerequest={cr}
                    />
                );
            }
        });

        //AnnotationPanels
        if (
            kassenzeichen !== undefined &&
            kassenzeichen.aenderungsanfrage !== undefined &&
            kassenzeichen.aenderungsanfrage !== null
        ) {
            const annos = kassenzeichen.aenderungsanfrage.geometrien;
            if (annos !== undefined) {
                const annoArr = [];

                for (const ak of Object.keys(annos)) {
                    annoArr.push(annos[ak]);
                }

                const sortedAnnoArr = annoArr.sort(
                    (a, b) => a.properties.numericId - b.properties.numericId
                );
                for (const a of sortedAnnoArr) {
                    const ap = (
                        <AnnotationPanel
                            key={"AnnotationPanel" + JSON.stringify(a)}
                            showEverything={true}
                            annotationFeature={a}
                        />
                    );

                    annoPanels.push(ap);
                }
            }
        }
        (sMsgs || []).forEach(msg => {
            if (msg.typ === "CITIZEN" && msg.draft === true) {
                lastUserMessage = msg;
            }
        });

        return (
            <Modal
                style={{
                    zIndex: 3000000000
                }}
                height="100%"
                bsSize={crEditMode === true ? "large" : undefined} //undefined == mid
                show={true || visible}
                onHide={close}
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>
                        <div className="pull-left">
                            <Icon name={"edit"} /> {"Änderungswünsche und Kommentare"}
                        </div>
                        <div className="pull-right">
                            <CloudLoadingAttributeIcon value={cloudStorageStatus} />
                        </div>
                    </Modal.Title>
                    {/* <Modal.Title>
						<div className='pull-left'>
							{cloudStorageStatus === undefined && <Icon name={'edit'} />}{' '}
							{cloudStorageStatus !== undefined && (
								<CloudLoadingAttributeIcon value={cloudStorageStatus} />
							)}{' '}
							{'Änderungswünsche und Kommentare'}
						</div>
						{/* <div className='pull-right'>
							<CloudLoadingAttributeIcon value={cloudStorageStatus} />
						</div> */}
                </Modal.Header>
                <Modal.Body style={modalBodyStyle} id="myMenu" key={"applicationMenuActiveKey"}>
                    <p>
                        Sollten Sie Änderungswünsche zu den angezeigten Flächen haben, aktivieren
                        Sie hier bitte den Änderungsmodus. Im Änderungsmodus haben Sie die
                        Möglichkeit, mit Ihrem Ansprechpartner in Kontakt zu treten, Flächen zu
                        verändern oder anzulegen.
                    </p>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <div style={{ fontSize: "20px" }}>
                            <strong>Änderungsmodus: </strong>
                            <Toggle
                                onClick={() => {
                                    setCREditMode(!crEditMode);
                                }}
                                on={"Ein"}
                                off={"Aus"}
                                offstyle="danger"
                                onstyle="success"
                                active={crEditMode}
                                style={{ padding: 10 }}
                            />
                        </div>
                    </div>

                    {crEditMode === true && (
                        <div>
                            <p>
                                Hier können Sie gewünschte Änderungen eintragen, belegen und an uns
                                übermitteln. Bitte beachten Sie, dass eine Nachweispflicht besteht,
                                wenn Flächen nicht in den Kanal entwässern. Die nachfolgende
                                Kommunikation ist kein Chat. Eine Antwort wird nicht immer zeitnah
                                erfolgen.
                            </p>
                            <table style={{ marginTop: 15 }} width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <Button
                                                className="pull-left"
                                                id="cmdCloseModalApplicationMenu"
                                                bsStyle="success"
                                                type="submit"
                                                onClick={() => {
                                                    showModalMenu("anleitung");
                                                }}
                                                //hier gehts weiter
                                                style={{ margin: 5 }}
                                            >
                                                Hilfe
                                            </Button>
                                        </td>
                                        <td>
                                            <div
                                                style={{
                                                    verticalAlign: "middle",
                                                    textAlign: "right"
                                                }}
                                            >
                                                Systemnachrichten einblenden:{" "}
                                                <Toggle
                                                    onClick={() => {
                                                        setHideSystemMessages(!hideSystemMessages);
                                                    }}
                                                    on={"Ein"}
                                                    off={"Aus"}
                                                    offstyle="danger"
                                                    onstyle="success"
                                                    size={"xs"}
                                                    active={!hideSystemMessages}
                                                    style={{ padding: 10 }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <div>
								<Toggle
								onClick={() => {
									setCREditMode(!crEditMode);
								}}
								on={'Ein'}
								off={'Aus'}
								offstyle='danger'
								onstyle='success'
								active={crEditMode}
								style={{ padding: 10 }}
							/>
							</div> */}
                            <Accordion
                                key={"sectionKey0"}
                                name={"sectionKey"}
                                style={{ marginBottom: 6 }}
                                defaultActiveKey={"sectionKey0"}
                                onSelect={() => {
                                    // if (applicationMenuActiveKey === sectionKey) {
                                    //   setApplicationMenuActiveKey("none");
                                    // } else {
                                    //   setApplicationMenuActiveKey(sectionKey);
                                    // }
                                }}
                            >
                                <Panel
                                    header={"Ihre Kommunikation"}
                                    eventKey={"sectionKey0"}
                                    bsStyle={"info"}
                                >
                                    <CRConversation
                                        messages={messages}
                                        hideSystemMessages={hideSystemMessages}
                                    />

                                    <ConversationInput
                                        setDraft={(draftText, attachments) => {
                                            const msg = {
                                                typ: "CITIZEN",
                                                timestamp: Date.now(),
                                                nachricht: draftText,
                                                draft: true,
                                                anhang: attachments
                                            };

                                            addMessage(msg);
                                        }}
                                        scrollToInput={() => {
                                            setTimeout(() => {
                                                scrollToVisible(scrollDivRef);
                                            }, 10);
                                        }}
                                        lastUserMessage={lastUserMessage}
                                        removeLastUserMessage={removeLastUserMessage}
                                        uploadCRDoc={uploadCRDoc}
                                        addLocalErrorMessage={addLocalErrorMessage}
                                    />

                                    {/* <div style={{ marginTop: '20px', textAlign: 'end' }}>
								<span>
									1 ungesendete Nachricht
									
								</span>
							</div> */}
                                    <div ref={scrollDivRef} style={{ height: 1 }} />
                                </Panel>
                            </Accordion>
                            <Accordion
                                key={"sectionKey1"}
                                name={"sectionKey"}
                                style={{ marginBottom: 6 }}
                                defaultActiveKey={"sectionKey1"}
                                onSelect={() => {
                                    // if (applicationMenuActiveKey === sectionKey) {
                                    //   setApplicationMenuActiveKey("none");
                                    // } else {
                                    //   setApplicationMenuActiveKey(sectionKey);
                                    // }
                                }}
                            >
                                <Panel
                                    header={
                                        "Ihre Änderungsvorschläge" +
                                        (changerequestBezeichnungsArray !== undefined &&
                                        changerequestBezeichnungsArray.length > 0
                                            ? " (" + changerequestBezeichnungsArray.length + ")"
                                            : "")
                                    }
                                    eventKey={"sectionKey1"}
                                    bsStyle={"warning"}
                                >
                                    <div>
                                        {origPanels.length > 0 && (
                                            <FlexView row="true">
                                                <FlexView column grow>
                                                    <h4>aktueller Datenbestand</h4>
                                                    {origPanels}
                                                </FlexView>
                                                <FlexView column grow />

                                                <FlexView column grow />
                                                <FlexView column grow>
                                                    <h4>Ihr Änderungswunsch</h4>
                                                    {crPanels}
                                                </FlexView>
                                            </FlexView>
                                        )}
                                        {origPanels.length === 0 && (
                                            <div style={{ color: "grey" }}>
                                                keine Änderungsvorschläge vorhanden
                                            </div>
                                        )}
                                    </div>
                                </Panel>
                            </Accordion>
                            <Accordion
                                key={"sectionKey"}
                                name={"sectionKey"}
                                style={{ marginBottom: 6 }}
                                defaultActiveKey={"sectionKey"}
                                onSelect={() => {
                                    // if (applicationMenuActiveKey === sectionKey) {
                                    //   setApplicationMenuActiveKey("none");
                                    // } else {
                                    //   setApplicationMenuActiveKey(sectionKey);
                                    // }
                                }}
                            >
                                <Panel
                                    header={
                                        "Ihre Anmerkungen in der Karte" +
                                        (annoPanels.length > 0
                                            ? " (" + annoPanels.length + ")"
                                            : "")
                                    }
                                    eventKey={"sectionKey"}
                                    bsStyle={"success"}
                                >
                                    {annoPanels}
                                </Panel>
                                <Panel
                                    header={
                                        "Ihre Dokumente" +
                                        (documents.length > 0 ? " (" + documents.length + ")" : "")
                                    }
                                    eventKey={"sectionKey"}
                                    bsStyle={"danger"}
                                >
                                    <DocPanel documents={documents} />
                                </Panel>
                            </Accordion>
                        </div>
                    )}
                </Modal.Body>

                <Modal.Footer>
                    {crEditMode === true && (
                        <div>
                            <table
                                style={{
                                    width: "100%"
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                textAlign: "left",
                                                verticalAlign: "top",
                                                paddingRight: "30px"
                                            }}
                                        >
                                            <p>
                                                {crDraftCounter > 0 && <b>{draftHint}</b>}
                                                {!(crDraftCounter > 0) && <span>{draftHint}</span>}
                                            </p>
                                            <p>
                                                Sollten sich nach Abschluss der Bearbeitung
                                                Änderungen gegenüber der bisherigen Gebührenerhebung
                                                ergeben, erhalten Sie einen Änderungsbescheid durch
                                                das Steueramt. Eine Veranlagung findet ggf.
                                                rückwirkend statt. Maßgebend ist das Datum des
                                                Luftbilds, in dem die Änderung feststellbar ist,
                                                aber längsten das laufende und die 4
                                                vorhergegangenen Jahre.
                                            </p>
                                        </td>
                                        <td />
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                style={{
                                    width: "100%"
                                }}
                                border={0}
                            >
                                <tbody>
                                    <tr>
                                        <td width="100%" style={{ paddingRight: 10 }}>
                                            <Button
                                                style={{ width: "200px" }}
                                                id="cmdCloseModalApplicationMenu"
                                                bsStyle="default"
                                                type="submit"
                                                onClick={close}
                                            >
                                                Schließen
                                            </Button>
                                            <div style={{ fontSize: 11 }}>
                                                es gehen kein Änderungen verloren
                                            </div>
                                        </td>
                                        <td width="100%" style={{ verticalAlign: "top" }}>
                                            <Button
                                                style={{ width: "300px" }}
                                                bsStyle={locked === true ? "warning" : "success"}
                                                className="fillButton"
                                                onClick={unlockOrSubmit}
                                                disabled={crDraftCounter === 0}
                                            >
                                                <Icon name={locked === true ? "lock" : "unlock"} />{" "}
                                                {crDraftCounter === 0
                                                    ? "Keine aktuelle Änderung"
                                                    : locked === true
                                                    ? "Entsperren zum Einreichen"
                                                    : "Einreichen der Änderungswünsche"}
                                            </Button>
                                            <div style={{ fontSize: 11 }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {!crEditMode === true && (
                        <div>
                            <p style={{ textAlign: "left" }}>
                                Wenn Sie den Änderungsmodus aktivieren, erscheinen in diesem Dialog
                                die Steuerelemente mit denen Sie Ihre Änderungen anlegen können und
                                weitere Hilfsinformationen erhalten.
                            </p>
                            <Button
                                className="pull-left"
                                id="cmdCloseModalApplicationMenu"
                                bsStyle="success"
                                type="submit"
                                onClick={() => {
                                    showModalMenu("anleitung");
                                }}
                            >
                                Hilfe
                            </Button>
                            <Button
                                id="cmdCloseModalApplicationMenu"
                                bsStyle="primary"
                                type="submit"
                                onClick={close}
                            >
                                Ok
                            </Button>
                        </div>
                    )}
                </Modal.Footer>
            </Modal>
        );
    } else {
        return null;
    }
};
export default CR00;
