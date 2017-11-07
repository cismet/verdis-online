import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import { PieChart, Pie, Legend, Cell, Tooltip } from 'recharts';
import {
  getColorForFront
} from '../utils/kassenzeichenMappingTools';

import { get } from 'lodash';
//const FontAwesome = require('react-fontawesome');

const KassenzeichenFrontenChartPanel = ({kassenzeichen, orientation}) => {
  
  const styleOverride = {
    marginBottom: '5px',
    width: '100%'
  };

  const statsFA = new Map();
  if (kassenzeichen.fronten) {
    
    for (let i=0; i < kassenzeichen.fronten.length; i++) {
        let front=kassenzeichen.fronten[i];
        let laenge=front.frontinfo.laenge_korrektur;
        let rkey="keine Reinigung";
        if (front.frontinfo.lage_sr && front.frontinfo.lage_sr.sr_klasse && front.frontinfo.lage_sr.sr_klasse.key) {
            rkey=front.frontinfo.lage_sr.sr_klasse.key
        }
        let key= rkey + " " + get(front,"frontinfo.strasse.name","");
        let sumFA= statsFA.get(key);
        if (sumFA) {
            statsFA.set(key, laenge + sumFA);
        }
        else{
            statsFA.set(key, laenge);
        } 
    }
  }
  const statsFAData = [];
  for (let key of statsFA.keys()) {
    const o = {
      name: key, value: statsFA.get(key)
    };
    statsFAData.push(o);
  }

  if (orientation === "vertical") {
    return (
      <Well bsSize="small" style={styleOverride}>
        <h4>Veranlagung</h4>
        <PieChart width={210} height={170+statsFAData.length*20}>
          <Pie data={statsFAData}   cx={120} cy={75} innerRadius={20} outerRadius={80} dataKey="value">
            {
              statsFAData.map((entry) => {
                return (
                  <Cell key={"color.for." + entry.name} fill={getColorForFront(entry.name)} />
                );
              })
            }
          </Pie>
          <Legend  verticalAlign="bottom" align="left" />
          <Tooltip />
        </PieChart>

      </Well>
    );
  }
  else { //horizontal
    return (
      <Well bsSize="small" style={styleOverride}>
        <h4>Veranlagung</h4>
        <PieChart width={140} height={100}>
          <Pie data={statsFAData} cx={70} cy={45} innerRadius={20} outerRadius={45} dataKey="value" >
            {
              statsFAData.map((entry) => {
                return (
                  <Cell key={"color.for." + entry.name} fill={getColorForFront(entry.name)} />
                );
              })
            }
          </Pie>
          <Tooltip />
          
        </PieChart>

      </Well>
    );
  }
};
KassenzeichenFrontenChartPanel.propTypes = {
  kassenzeichen: PropTypes.object,
  orientation: PropTypes.string
};

export default KassenzeichenFrontenChartPanel;

