import React, { PropTypes } from 'react';
//import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from "react-redux";
import L from 'leaflet';
import  MyWMSTileLayer  from "./MyWMSTileLayer";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    ui:state.browserUI
  };
}
export class VerdisMap_ extends React.Component {
  render() {
    console.log("UI",this.props.ui);
    let h;
    if (this.props.ui.height) {
      h=this.props.ui.height-55;
    }
    else {
      h=50;
    }

    const mapStyle = {
      width: "100%",
      height: h
    };
    //crs={L.CRS.EPSG4326}
    //crs={L.CRS.EPSG900913} //default

    const NRWLayer = () => {
      return (
        <MyWMSTileLayer
          url="http://www.wms.nrw.de/geobasis/wms_nw_dop40?SRS=EPSG%3A3857&"
          layers="WMS_NW_DOP40"
          format="image/png"
          tiled="true"
          crs={L.CRS.EPSG3857}
          maxZoom={22}
          opacity={1.0}
          / >
        );
      };


      const ESRILayer = () => {
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

      const CartoLayer = () => {
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
      const click = () => {
        alert("sjhdfk");
      }
      return (
        <Map crs={L.CRS.EPSG900913} style={mapStyle} center={position} zoom={18}>
          <ESRILayer />
          <CartoLayer />
          map.on('click', this.onMapClick);
        </Map>
      );
    }
  }
  const VerdisMap =connect(mapStateToProps)(VerdisMap_);


  VerdisMap_.propTypes = {
    ui: PropTypes.object
  };

  export default VerdisMap;
