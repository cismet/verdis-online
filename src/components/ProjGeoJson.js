import L from 'leaflet';
import { isFunction } from 'lodash';
import { PropTypes } from 'react';
import 'proj4leaflet';

import { Path}  from 'react-leaflet';

export default class ProjGeoJson extends Path {
 
  componentWillMount () {
    super.componentWillMount();
    const { data, ...props } = this.props;
    this.leafletElement = L.Proj.geoJson(data, props);
  }

  componentDidUpdate (prevProps) {
    if (isFunction(this.props.style)) {
      this.setStyle(this.props.style);
    } else {
      this.setStyleIfChanged(prevProps, this.props);
    }
  }
}
ProjGeoJson.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};