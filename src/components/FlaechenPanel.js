import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
const FontAwesome = require('react-fontawesome');


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
            background = 'grey';
        }

        const styleOverride = {
            marginBottom: '5px',
            width: '100%',
            background: background
        };
        return (
            <div ref={c=>this.theDiv=c}>
            <Well  onClick={()=>{this.props.flaechenPanelClickHandler(this.props.flaeche);}} bsSize="small" style={styleOverride}>
            <h5>{this.props.flaeche.flaecheninfo.flaechenart.art + ' ' + this.props.flaeche.flaechenbezeichnung}</h5>
            <table style={{ width: '100%' }}>
                <tbody>
                <tr>
                    <td>{this.props.flaeche.flaecheninfo.groesse_korrektur} m&sup2;</td>
                    <td style={{ textAlign: 'right' }}>{this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung}</td>
                </tr>
                <tr>
                    <td><FontAwesome name="edit" /> {this.props.flaeche.datum_erfassung}</td>
                    <td style={{ textAlign: 'right' }}><FontAwesome name="check-circle" /> {this.props.flaeche.datum_veranlagung}</td>
                </tr>
                <tr>
                    <td><FontAwesome name="file" /> {this.props.flaeche.feb_id}</td>
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
    flaechenPanelClickHandler: PropTypes.func,
};

