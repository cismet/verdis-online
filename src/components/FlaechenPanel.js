import React , { PropTypes } from 'react';
import { Well } from 'react-bootstrap';
const FontAwesome = require('react-fontawesome');

const FlaechenPanel = ({flaeche}) => {
      const styleOverride={
        marginBottom: '5px',
        width: '100%'
      };
      return (
        <Well bsSize="small" style={styleOverride}>
          <h5>{flaeche.flaecheninfo.flaechenart.art+' '+flaeche.flaechenbezeichnung}</h5>
          <table style={{width:'100%'}}>
            <tbody>
                <tr>
                    <td>{flaeche.flaecheninfo.groesse_korrektur} m&sup2;</td>
                    <td style={{textAlign:'right'}}>{flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung}</td> 
                </tr>
                <tr>
                    <td><FontAwesome name="edit" /> {flaeche.datum_erfassung}</td>
                    <td style={{textAlign:'right'}}><FontAwesome name="check-circle" /> {flaeche.datum_veranlagung}</td> 
                </tr>
                <tr>
                    <td><FontAwesome name="file" /> {flaeche.feb_id}</td> 
                </tr>
            </tbody>
          </table>
        </Well>
      );
    };
 FlaechenPanel.propTypes = {
  flaeche: PropTypes.object
};
   
export default FlaechenPanel;