import React from 'react';
import { WMSTileLayer } from 'react-leaflet';

export const Layers = new Map();

Layers.set("Luftbilder (NRW)", (opacity) => {
  return (
    <WMSTileLayer
      key="nrwDOP20"
      url="https://wunda-geoportal-cache.cismet.de/nrwDOP20"
      layers="nw_dop20"
      format="image/png"
      tiled="true"
      //crs={L.CRS.EPSG3857}
      maxZoom={19}
      opacity={opacity}
    />
  );
});

Layers.set("ABK in Farbe", (opacity) => {
  return (
    <WMSTileLayer
      key="abkf"
      url="https://wunda-geoportal-cache.cismet.de/geoportal"
      layers="abkf"
      format="image/png"
      tiled="true"
      maxZoom={19}
      opacity={opacity}
    />
  );
});
Layers.set("ABK in Graustufen", (opacity) => {
  return (
    <WMSTileLayer
      key="bplan_abkg"
      url="https://wunda-geoportal-cache.cismet.de/geoportal"
      layers="bplanreihe"
      format="image/png"
      tiled="true"
      maxZoom={19}
      opacity={opacity}
    />
  );
});



