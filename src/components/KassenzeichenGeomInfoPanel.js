import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
//const FontAwesome = require('react-fontawesome');
import {Icon} from 'react-fa';
import {
    getColorForKassenzeichenGeometry
  } from '../utils/kassenzeichenMappingTools';

//const FlaechenPanel = ({flaeche,selected,flaechenPanelClickHandler,inputRef}) => {
export default class KassenzeichenGeomInfoPanel extends React.Component {
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
            height: '100%',
            background: background
        };
        if (this.props.orientation==="vertical") {
            return (
                <div ref={c=>this.theDiv=c}>
                <Well  onClick={()=>{this.props.kasszGeomPanelClickHandler(this.props.kasszGeom);}} bsSize="small" style={styleOverride}>
                
                <table style={{ width: '100%' }}>
                    <tbody>
                    <tr>
                        <td><b>{this.props.kasszGeom.name}</b></td>
                        <td style={{ textAlign: 'right' , color: getColorForKassenzeichenGeometry(this.props.kasszGeom.geometrie.geo_field)}}><Icon name="square"/></td>
                    </tr>
                    
                    </tbody>
                </table>
                </Well>
                </div>
            );
        }
        else {
            return (
                <div ref={c=>this.theDiv=c}>
                <Well  onClick={()=>{this.props.kasszGeomPanelClickHandler(this.props.kasszGeom);}} bsSize="small" style={styleOverride}>
                
                <table style={{ width: '100%' }}>
                    <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' , color: getColorForKassenzeichenGeometry(this.props.kasszGeom.geometrie.geo_field)}}><Icon name="square"/></td>
                    </tr>
                    <tr>
                        <td><br/><b>{this.props.kasszGeom.name}</b></td>
                    </tr>
                    
                    </tbody>
                </table>
                </Well>
                </div>
            );
           
        }
    }
}

KassenzeichenGeomInfoPanel.propTypes = {
    kasszGeom: PropTypes.object,
    inputRef: PropTypes.object,
    selected: PropTypes.bool,
    orientation: PropTypes.string,
    kasszGeomPanelClickHandler: PropTypes.func,
};

