import L from 'leaflet';
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import 'proj4leaflet';

import { Path } from 'react-leaflet';

export default class ProjGeoJson extends Path {

  componentWillMount() {
    super.componentWillMount();
    const { mappingProps, ...props } = this.props;
    props.onEachFeature=function (feature, layer) {
        layer.on('click',props.featureClickHandler);        
    }
    this.leafletElement = L.Proj.geoJson(mappingProps.featureCollection, props);
  }  
  createLeafletElement () {
  } 
  componentDidUpdate(prevProps) {
    if (isFunction(this.props.style)) {
      this.setStyle(this.props.style);
    } else {
      this.setStyleIfChanged(prevProps, this.props);
    }
  }
}

ProjGeoJson.propTypes = {
  mappingProps: PropTypes.object.isRequired,
  featureClickHandler: PropTypes.func.isRequired,
};
