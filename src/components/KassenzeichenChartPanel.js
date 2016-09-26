import React , { PropTypes } from 'react';
import { Well } from 'react-bootstrap';
import {PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';
import {
     getColorFromFlaechenArt
 } from '../utils/kassenzeichenMappingTools';
//const FontAwesome = require('react-fontawesome');

const KassenzeichenChartPanel = ({kassenzeichen}) => {
      const styleOverride={
        marginBottom: '5px',
        width: '100%'
      }
      let locker;

      const statsFA=new Map();
      if (kassenzeichen.flaechen){
        kassenzeichen.flaechen.map((flaeche) => {
            let sumFA=statsFA.get(flaeche.flaecheninfo.flaechenart.art_abkuerzung);
            if (sumFA){
              statsFA.set(flaeche.flaecheninfo.flaechenart.art_abkuerzung,flaeche.flaecheninfo.groesse_korrektur+sumFA);
            }
            else{
              statsFA.set(flaeche.flaecheninfo.flaechenart.art_abkuerzung,flaeche.flaecheninfo.groesse_korrektur);
            } 
        });
      }
      const statsFAData=[];
      for (var key of statsFA.keys()) {
        const o={
          name:key, value:statsFA.get(key)
        };
        statsFAData.push(o);
      }
    
      if (kassenzeichen.sperre){
        locker="lock";
      }else {
        locker="unlock";
      }

      return (
        <Well bsSize="small" style={styleOverride}>
        <h4>Veranlagung</h4>
        <PieChart width={200} height={200}>
        <Pie data={statsFAData} cx={120} cy={80} innerRadius={20} outerRadius={80} >
        {
          statsFAData.map((entry) => {
              return (
                <Cell fill={getColorFromFlaechenArt(entry.name)}/>
              );
            })
          }
          </Pie>
          <Legend />
        <Tooltip/>
        </PieChart>

        </Well>
      );
    };
 KassenzeichenChartPanel.propTypes = {
  kassenzeichen: PropTypes.object
};
   
export default KassenzeichenChartPanel;

