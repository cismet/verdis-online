import { tileLayer } from 'leaflet';
import { PropTypes } from 'react';
import { BaseTileLayer } from 'react-leaflet';

export default class MyWMSTileLayer extends BaseTileLayer {

  componentWillMount () {
    super.componentWillMount();
    console.log("Props",this.props);

    const wProps = Object.assign({}, this.props);
    console.log("WPropsBefore",wProps);

    delete wProps.map;
    delete wProps.url;
    console.log("WProps",wProps);
    const { url } = this.props;
    this.leafletElement = tileLayer.wms(url, wProps);
  }
}


MyWMSTileLayer.propTypes = {
  url: PropTypes.string.isRequired,
};
