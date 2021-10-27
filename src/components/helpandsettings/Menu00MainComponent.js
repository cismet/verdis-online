import React from "react";
import Introduction from "./Menu05Introduction";
import Datengrundlage from "./Menu10Datengrundlagen";
import MeinKassenzeichen from "./Menu20MeinKassenzeichen";
import Kartenhintergruende from "./Menu30Kartenhintergruende";
import Anleitung from "./Menu40Anleitung";
import Mailservice from "./Menu41Mailservice";
import Aenderungen from "./Menu42Aenderungen";
import FAQs from "./Menu50FAQ";
import Datenschutz from "./Menu60Datenschutz";
import { Icon } from "react-fa";
import GenericModalApplicationMenu from "../commons/GenericModalApplicationMenu";
import Footer from "./Menu99Footer";
import { Modal, Button } from "react-bootstrap";

const ModalHelpAndInfo = ({
    showApplicationMenu,
    applicationMenuActiveKey,
    setApplicationMenuActiveKey,
    height,
    applicationMenuVisible,
    selectedBackgroundIndex,
    backgrounds,
    setBackgroundIndex,
    showOnSeperatePage = false
}) => {
    const showModalMenu = section => {
        showApplicationMenu(true);
        setApplicationMenuActiveKey(section);
    };
    const menuSections = [
        <Datengrundlage
            key="Datengrundlage"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <MeinKassenzeichen
            key="MeinKassenzeichen"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <Kartenhintergruende
            key="Kartenhintergruende"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            selectedBackgroundIndex={selectedBackgroundIndex}
            backgrounds={backgrounds}
            setBackgroundIndex={setBackgroundIndex}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <Anleitung
            key="Anleitung"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <Mailservice
            key="Mailservice"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <Aenderungen
            key="Aenderungen"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <FAQs
            key="FAQs"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />,
        <Datenschutz
            key="Datenschutz"
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            showModalMenu={showModalMenu}
            showOnSeperatePage={showOnSeperatePage}
        />
    ];
    if (showOnSeperatePage === false) {
        return (
            <GenericModalApplicationMenu
                showApplicationMenu={showApplicationMenu}
                applicationMenuActiveKey={applicationMenuActiveKey}
                f
                setApplicationMenuActiveKey={setApplicationMenuActiveKey}
                height={height}
                applicationMenuVisible={applicationMenuVisible}
                menuIntroduction={<Introduction />}
                menuIcon="info"
                menuTitle={<span>Kompaktanleitung und Hintergrundinformationen</span>}
                menuSections={menuSections}
                menuFooter={<Footer showModalMenu={showModalMenu} />}
                additionalButton={
                    <Button
                        id="openHelpInownWindow"
                        bsStyle="info"
                        type="submit"
                        target="verdisOnlineHelp"
                        href="/#/verdisOnlineHilfe"
                    >
                        In eigenem Fenster öffnen
                    </Button>
                }
            />
        );
    } else {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>
                        <Icon name={"info"} /> {"Kompaktanleitung und Hintergrundinformationen"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    id="myMenu"
                    name="myMenu"
                    style={{
                        overflowY: "auto",
                        overflowX: "hidden"
                    }}
                >
                    {menuSections}
                </Modal.Body>
                <br />
                <Footer showModalMenu={showModalMenu} />
            </div>
        );
    }
};
export default ModalHelpAndInfo;
