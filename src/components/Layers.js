import React from 'react';
import { TileLayer, WMSTileLayer } from 'react-leaflet';

export const NRWLayer = () => {
      return (
        <WMSTileLayer
          url="http://www.wms.nrw.de/geobasis/wms_nw_dop40"
          layers="WMS_NW_DOP40"
          format="image/png"
          tiled="true"
          //crs={L.CRS.EPSG3857}
          maxZoom={22}
          opacity={1.0}
          / >
      );
    };

  export const StadtgrundKarteABK = () => {
      return (
        <WMSTileLayer
          url="http://s10221:7098/alkis/services"
          layers="alkomf"
          format="image/png"
          tiled="true"
          maxZoom={22}
          opacity={0.5}
          / >
      );
    };

    export const Ortho2014 = () => {
      return (
        <WMSTileLayer
          url="http://s10221:7098/orthofotos/services"
          layers="WO2014"
          format="image/png"
          tiled="true"
          maxZoom={22}
          opacity={1}
          / >
      );
    };

    export const OSM = () => {
      return (
        <WMSTileLayer
          url="http://ows.terrestris.de/osm/service"
          layers="OSM-WMS"
          format="image/png"
          tiled="true"
          maxZoom={22}
          opacity={1}
          / >
      );
    };



export const ESRILayer = () => {
      return (
        <TileLayer
          urlX="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          urlNRW="http://localhost:8080/geowebcache/service/tms/1.0.0/nrw:ortho/{z}/{y}/{x}.jpg"
          urlC="http://localhost:8080/geowebcache/service/tms/1.0.0/OSM-WMS/{x}/{y}/{z}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
          maxZoom={22}
          maxNativeZoom={18}
          opacity={0.8}
          />
      );
    };

export const CartoLayer = () => {
      return (
        <TileLayer
          urlBW="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          urlE="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          urlH="http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
          maxNativeZoom={19}
          maxZoom={22}
          opacity={0.55}
          />
      );
    };