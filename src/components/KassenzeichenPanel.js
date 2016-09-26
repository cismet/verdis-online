import React , { PropTypes } from 'react';
import { Well } from 'react-bootstrap';
const FontAwesome = require('react-fontawesome');

const KassenzeichenPanel = ({kassenzeichen}) => {
      const styleOverride={
        marginBottom: '5px',
        width: '100%'
      }
      let locker;
      if (kassenzeichen.sperre){
        locker="lock";
      }else {
        locker="unlock";
      }

      return (
        <Well bsSize="small" style={styleOverride}>
          <h4>Kassenzeichen</h4>
          <small>erfasst am {kassenzeichen.datum_erfassung}</small>
          <table style={{width:'100%'}}>
            <tbody>
              <tr>
                  <td><h2>{kassenzeichen.kassenzeichennummer8}</h2></td>
                  <td style={{textAlign:'right', verticalAlign: 'bottom'}}><FontAwesome name={locker} /></td> 
              </tr>
            </tbody>
            </table>
        </Well>
      );
    };
 KassenzeichenPanel.propTypes = {
  kassenzeichen: PropTypes.object.required
};
   
export default KassenzeichenPanel;