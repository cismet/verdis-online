import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import {Icon} from 'react-fa';
import objectAssign from 'object-assign';
import { get } from 'lodash';


//const FlaechenPanel = ({flaeche,selected,flaechenPanelClickHandler,inputRef}) => {
export default class FrontenPanel extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToVisible = this.scrollToVisible.bind(this);   
    }

    scrollToVisible() {
        scrollIntoViewIfNeeded(this.theDiv, false, {
            duration: 250
           });
    }


    hideOrShowStyle(visible, style) {
        let inStyle={};
        if (style) {
            inStyle=style;
        }
        
        if (visible) {
            return inStyle;
        }        
        else {
            return objectAssign({ display: 'none' }, inStyle);
        }
    }

    render() {
        let background = null;
        if (this.props.selected) {
            background = 'grey';
        }

        const styleOverride = {
            marginBottom: '5px',
            width: '100%',
            height: '100%',
            background: background
        };

        let shortName="keine Reinigung";
        if (this.props.front.frontinfo.lage_sr) {
            let shortNameFrom=this.props.front.frontinfo.lage_sr.sr_klasse.name.trim().indexOf("(")+1;
            let shortNameTo=this.props.front.frontinfo.lage_sr.sr_klasse.name.trim().indexOf(")");
            shortName=this.props.front.frontinfo.lage_sr.sr_klasse.name.trim().substring(shortNameFrom,shortNameTo)
        }
       
        
        let strasse="";
        if (this.props.front.frontinfo.lage_sr && this.props.front.frontinfo.lage_sr.strasse.name) {
            strasse=this.props.front.frontinfo.lage_sr.strasse.name;
        }
        return (
            <div ref={c=>this.theDiv=c}>
            <Well  onClick={()=>{this.props.frontenPanelClickHandler(this.props.front);}} bsSize="small" style={styleOverride}>
            
            <table style={{ width: '100%' }}>
                <tbody>
                <tr>
                    <td><b>{'Nummer ' + this.props.front.nummer}</b></td>
                    <td style={{ textAlign: 'right' }}>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.sr_bem)}><Icon name="info-circle"/>&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.garage_stellplatz)}><Icon name="car"/>&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.baulasten)}>§&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.anteil)}><Icon name="pie-chart"/>&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.grunddienstbarkeit)}><Icon name="road"/>&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.quadratwurzel)}>&#8730;&nbsp;</span>
                        <span style={this.hideOrShowStyle(this.props.front.frontinfo.winkel)}>&#8736;&nbsp;</span>
                      </td>
                </tr>
                </tbody>
            </table>
            {shortName}

            <table style={{ width: '100%' }}>
                <tbody>
                <tr>
                    <td>{this.props.front.frontinfo.laenge_korrektur+' m'}</td>
                    <td style={this.hideOrShowStyle(this.props.front.frontinfo.lage_sr && this.props.front.frontinfo.lage_sr.strasse.name,{ textAlign: 'right' })}>{strasse}</td>
                </tr>
                </tbody>
            </table>
            <div style={{ textAlign: 'right' }}>{get(this,"props.front.frontinfo.lage_sr.sr_bem")}</div>
            <div style={this.hideOrShowStyle(((this.props.selected||this.props.orientation==="horizontal") && this.props.front.frontinfo.sr_bem),{ textAlign: 'left' })}><br/><b>Bemerkung:</b><br/>{this.props.front.frontinfo.sr_bem}</div>
            <div style={this.hideOrShowStyle(((this.props.selected||this.props.orientation==="horizontal") && this.props.front.frontinfo.winkel),{ textAlign: 'left' })}><br/><b>Winkel:</b>&nbsp;{this.props.front.frontinfo.winkel}</div>
            </Well>
            </div>
        );
    }
}

FrontenPanel.propTypes = {
    front: PropTypes.object,
    inputRef: PropTypes.object,
    selected: PropTypes.bool,
    frontenPanelClickHandler: PropTypes.func,
    orientation: PropTypes.string
};

