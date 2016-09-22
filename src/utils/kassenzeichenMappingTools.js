import { getGeoJsonFeatureFromCidsObject } from './cidsTools';

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

export const flaechenStyle = (feature) => {     
    let color='#ff0000';
    switch (feature.properties.art_abk) {
            case 'DF': color="#a24c29";
            break;
            case 'GDF': color="#6a7a17";
            break;
            case 'VF': color="#788180";
            break;
            case 'VFS': color="#8a8684";
            break;
            case 'VSÖ': color="#7e5b47";
            break;
            case 'VFÖ': color="#9f9b6c";
            break;
            case 'VV': color="#ff0000";
            break;
            default: color="#ff0000";
        } 
    
    const style = {
        "color": "#000000",
        "weight": 1,
        "opacity": 1.0,
        "fillColor": color,
        "fillOpacity": 0.6
    };

    return style; 
};

export default {};