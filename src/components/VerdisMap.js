import React from 'react';
//import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from "react-redux";

const position = [51.272399, 7.199712];



function mapStateToProps(state) {
  return {
    ui:state.browserUI
  };
}
export class VerdisMap extends React.Component {
  render() {
    console.log("UI",this.props.ui);
    var h;
    if (this.props.ui.height) {
      h=this.props.ui.height-130;
    }
    else {
      h=50;
    }

    const mapStyle = {
      width: "100%",
      height: h
    };
    return (
      <Map style={mapStyle} center={position} zoom={18}>
          <TileLayer
            url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
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
    }
}
export default connect(mapStateToProps)(VerdisMap);

// export default VerdisMap;
