import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.272399, 7.199712];

const VerdisMap = () => {
  return (

    <Map center={position} zoom={18}>
        <TileLayer
          url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={22}
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
      );
};

export default VerdisMap;
