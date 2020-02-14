import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store';
import App from './App';

import './index.css';

const target = document.querySelector('#root');

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import L from 'leaflet';
// // import 'leaflet-toolbar';
// // import 'leaflet-toolbar/dist/leaflet.toolbar.css';

// // import { RoutedMap, MappingConstants } from 'react-cismap';
// import { MappingConstants } from 'react-cismap';

// import 'proj4leaflet';

// const mapStyle = {
// 	height: window.innerHeight,
// 	cursor: 'crosshair'
// };
// let urlSearchParams = new URLSearchParams(window.location.href);
// const projectedFC = L.Proj.geoJson({
// 	id: '1',
// 	type: 'Feature',
// 	properties: {},
// 	geometry: { type: 'Point', coordinates: [ 374343.0779387644, 5681734.414827559 ] },
// 	crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::25832' } }
// });
// console.log('projectedFC', projectedFC);

// ReactDOM.render(
// 	<div>
// 		<div>Simple ProjectedFC</div>
// 		<br />
// 		{JSON.stringify(projectedFC.toGeoJSON())}
// 	</div>,
// 	document.getElementById('root')
// );
