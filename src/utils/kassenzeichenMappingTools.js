import {
  getGeoJsonFeatureFromCidsObject
} from './cidsTools';

export const getFlaechenFeatureCollection = (kassenzeichen) => {
  return getGeoJsonFeatureFromCidsObject(kassenzeichen.flaechen, 'flaecheninfo.geometrie', (flaeche) => {
    return {
      'id': flaeche.id,
      'art_abk': flaeche.flaecheninfo.flaechenart.art_abkuerzung,
      'flaechenart': flaeche.flaecheninfo.flaechenart.art,
      'anschlussgrad': flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung,
      'groesse': flaeche.flaecheninfo.groesse_aus_grafik,
      'groesse_korrektur': flaeche.flaecheninfo.groesse_korrektur
    };
  });
};


export const getKassenzeichenInfoFeatureCollection = (kassenzeichen) => {
  return getGeoJsonFeatureFromCidsObject(kassenzeichen.kassenzeichen_geometrien, 'geometrie', (kasz_geom) => {
    return {
      'id': kasz_geom.id,
      'name': kasz_geom.name,
      'istfrei': kasz_geom.istfrei,
    };
  });
};

export const getColorFromFlaechenArt = (art_abk) => {
  let color = '#ff0000';
  switch (art_abk) {
    case 'DF':
      color = "#a24c29";
      break;
    case 'GDF':
      color = "#6a7a17";
      break;
    case 'VF':
      color = "#788180";
      break;
    case 'VFS':
      color = "#8a8684";
      break;
    case 'VSÖ':
      color = "#7e5b47";
      break;
    case 'VFÖ':
      color = "#9f9b6c";
      break;
    case 'VV':
      color = "#ff0000";
      break;
    default:
      color = "#ff0000";
  }
  return color;
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
        "fillOpacity": opacity
      };
    
  return style;
};

export default {};
