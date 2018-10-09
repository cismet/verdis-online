import {
  getGeoJsonFeatureFromCidsObject
} from './cidsTools';

import ColorHash from 'color-hash';
import { get } from 'lodash';
import React from 'react';

export const getFlaechenFeatureCollection = (kassenzeichen) => {
  return getGeoJsonFeatureFromCidsObject(kassenzeichen.flaechen, 'flaecheninfo.geometrie', (flaeche) => {
    return {
      'id': flaeche.id,
      "bez": flaeche.flaechenbezeichnung,
      'art_abk': flaeche.flaecheninfo.flaechenart.art_abkuerzung,
      'flaechenart': flaeche.flaecheninfo.flaechenart.art,
      'anschlussgrad': flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung,
      'groesse': flaeche.flaecheninfo.groesse_aus_grafik,
      'groesse_korrektur': flaeche.flaecheninfo.groesse_korrektur
    };
  });
};

export const getFrontenFeatureCollection = (kassenzeichen) => {
    return getGeoJsonFeatureFromCidsObject(kassenzeichen.fronten, 'frontinfo.geometrie', (front) => {
      return {
        'id': front.id,
        'key': get(front,"frontinfo.lage_sr.sr_klasse.key",""),
        'laenge': get(front,"frontinfo.laenge_korrektur",0),
        'strasse': get(front,"frontinfo.strasse.name","-")
      };
    });
  };

export const getKassenzeichenInfoFeatureCollection = (kassenzeichen) => {
  return getGeoJsonFeatureFromCidsObject(kassenzeichen.kassenzeichen_geometrien, 'geometrie', (kasz_geom) => {
    return {
      'id': kasz_geom.id,
      'name': kasz_geom.name,
      'istfrei': kasz_geom.istfrei,
      'geomstring': kasz_geom.geometrie.geo_field,
    };
  });
};

export const getColorFromFlaechenArt = (art_abk) => {
    let color = '#ff0000';
    switch (art_abk) {
      case 'DF':
      case 'Dachfläche':
        color = "#a24c29";
        break;
      case 'GDF':
      case 'Gründach':
        color = "#6a7a17";
        break;
      case 'VF':
      case 'versiegelte Fläche':
        color = "#788180";
        break;
      case 'VFS':
      case 'städtische Straßenfläche':
        color = "#8a8684";
        break;
      case 'VSÖ':
      case 'städtische Straßenfläche (Ökopflaster)':
        color = "#7e5b47";
        break;
      case 'VFÖ':
      case 'Ökopflaster':
        color = "#9f9b6c";
        break;
      case 'VV':
      case 'vorläufige Veranlagung':
        color = "#ff0000";
        break;
      default:
        color = "#ff0000";
    }
    return color;
  };

    export const getColorFromFrontKey = (key) => {
        if (key) {
            switch (key) {
                case 'C1':
                case 'C2':
                    return  "#4ecdc4";
                default:
                    return "#F38630"; //orange
            }
        }
        else {
            return '#0D6759'; //green
        }
    };
  

  export const getColorForFront = (frontDesc) => {
    let colorHash = new ColorHash({saturation: 0.3});  
    return colorHash.hex(""+frontDesc+"1234567890");
  };

  export const getColorForKassenzeichenGeometry = (geo_field) => {
    let colorHash = new ColorHash({saturation: 0.4});  
    return colorHash.hex(""+geo_field);
  };

  export const flaechenStyle = (feature) => {
    let color = getColorFromFlaechenArt(feature.properties.art_abk);
    let opacity=0.6;
    let linecolor="#000000";
    let weight=1;

    if (feature.selected === true) {
        opacity=0.9;
        linecolor="#0C7D9D";
        weight="2";
    }
    const style = {
        "color": linecolor,
        "weight": weight,
        "opacity": 1.0,
        "fillColor": color,
        "fillOpacity": opacity,
        "className": "verdis-flaeche-"+feature.properties.bez,
      };
    
  return style;
};

export const kassenzeichenGeometrienStyle = (feature) => {
    let color = getColorForKassenzeichenGeometry(feature.properties.geomstring);
    let opacity=0.6;
    let linecolor="#000000";
    let weight=1;

    if (feature.selected === true) {
        opacity=0.9;
        linecolor="#0C7D9D";
        weight="2";
    }

    const style = {
        "color": linecolor,
        "weight": weight,
        "opacity": 1.0,
        "fillColor": color,
        "fillOpacity": opacity
      };
    
  return style;
};

export const frontenStyle = (feature) => {
    let linecolor = getColorFromFrontKey(feature.properties.key);
    let opacity=0.6;
    let weight=10;

    if (feature.selected === true) {
        opacity=0.9;
        linecolor="#0C7D9D";
        weight="10";
    }

    const style = {
        "color": linecolor,
        "weight": weight,
        "opacity": opacity,
      };
    
  return style;
};

export const flaechenLabeler = (feature) => {

    return (
      <h5 style={getStyleFromFeatureConsideringSelection(feature)} >
        {feature.properties.bez}
      </h5>
    );
  };


  const getStyleFromFeatureConsideringSelection = (feature) => {
    let base = {
      "color":"blue",
    //   "textShadow": "1px 1px 0px  #000000,-1px 1px 0px  #000000, 1px -1px 0px  #000000, -1px -1px 0px  #000000, 2px 2px 15px #000000",
    };
     if (feature.selected) {
      const radius=10;
      const borderDef=`${radius}px ${radius}px ${radius}px ${radius}px`;
      return {
        ...base,
        "background": "rgba(67, 149, 254, 0.8)",
        "WebkitBorderRadius": borderDef,
        "MozBorderRadius": borderDef,
        "borderRadius": borderDef,
        "padding":"5px"
      };
    }else {
      return base;
    }
  };
  

 export  const getMarkerStyleFromFeatureConsideringSelection = (feature) => {
    let opacity=0.6;
    let linecolor="#000000";
    let weight=1;

    if (feature.selected === true) {
        opacity=0.9;
        linecolor="#0C7D9D";
        weight="2";
    }

    const style = {
        radius:10,
        "color": linecolor,
        "weight": weight,
        "opacity": 1.0,
        "fillOpacity": opacity,
        svgSize: 100,
        className: "verdis-flaeche-marker-"+feature.properties.bez,
        svg: `<svg height="100" width="100">
        <style>
            .flaeche { font: bold 16px sans-serif; }
        </style>

        <text x="50" y="50" class="flaeche" text-anchor="middle" alignment-baseline="central" fill="#0B486B">${feature.properties.bez}</text>
      </svg>`
      };
    
  return style;
}



export default {};
