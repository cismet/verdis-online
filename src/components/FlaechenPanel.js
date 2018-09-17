import PropTypes from "prop-types";
import React from "react";
import { Well } from "react-bootstrap";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";


//const FontAwesome = require('react-fontawesome');

//const FlaechenPanel = ({flaeche,selected,flaechenPanelClickHandler,inputRef}) => {
export default class FlaechenPanel extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToVisible = this.scrollToVisible.bind(this);
    }

    scrollToVisible() {
        scrollIntoViewIfNeeded(this.theDiv, false, {
            duration: 250
        });
    }

    render() {
        let background = null;
        if (this.props.selected) {
            background = "grey";
        }

        const styleOverride = {
            marginBottom: "5px",
            width: "100%",
            height: "100%",
            background: background
        };
        let area = <div />;
        if (this.props.flaeche.anteil) {
            area = (
                <div>
                    {this.props.flaeche.anteil} m&sup2; von{" "}
                    {this.props.flaeche.flaecheninfo.groesse_korrektur} m&sup2;
                </div>
            );
        } else {
            area = <div>{this.props.flaeche.flaecheninfo.groesse_korrektur} m&sup2;</div>;
        }
        let beschreibung = <div />;
        if (this.props.flaeche.flaecheninfo.beschreibung) {
            beschreibung = <div>{this.props.flaeche.flaecheninfo.beschreibung.beschreibung}</div>;
        }
        return (
            <div ref={c => (this.theDiv = c)}>
                <Well
                    onClick={() => {
                        this.props.flaechenPanelClickHandler(this.props.flaeche);
                    }}
                    bsSize="small"
                    style={styleOverride}
                >
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <b>
                                        {this.props.flaeche.flaecheninfo.flaechenart.art +
                                            " " +
                                            this.props.flaeche.flaechenbezeichnung}
                                    </b>
                                </td>
                                <td style={{ textAlign: "right" }}>{beschreibung}</td>
                            </tr>
                            <tr>
                                <td>{area}</td>
                                <td style={{ textAlign: "right" }}>
                                    {this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Well>
            </div>
        );
    }
}

FlaechenPanel.propTypes = {
    flaeche: PropTypes.object,
    inputRef: PropTypes.object,
    selected: PropTypes.bool,
    flaechenPanelClickHandler: PropTypes.func
};
