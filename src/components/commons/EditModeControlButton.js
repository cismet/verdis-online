import PropTypes from 'prop-types';

import { MapControl } from 'react-leaflet';
import L from 'leaflet';

export default class Control extends MapControl {
	createLeafletElement(props) {
		const { map } = this.context;
		const { featuresInEditmode = true, onChange = () => {} } = props;
		console.log('featuresInEditmode in Control', featuresInEditmode);

		const ControlClass = L.Control.extend({
			options: {
				position: 'topleft',
				callback: null,
				kind: 'xxx',
				html: '<i class="fas fa-edit"></i>'
			},

			onAdd: function(map) {
				var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
					link = L.DomUtil.create('a', '', container);

				link.href = '#';
				link.title = 'Verändern der selektierten Anmerkung';
				if (featuresInEditmode === true) {
					link.innerHTML = `<span style=" padding:2px; padding-right:2px; padding-left:2px; border-radius:4px; border: 3px solid #008AFA;" >
                                            ${this.options.html}
                                         </span>`;
				} else {
					link.innerHTML = this.options.html;
				}

				//Demo for proper Toolbar Styling
				// var link2 = L.DomUtil.create('a', '', container);
				// link2.href = '#';
				// link2.title = 'Create a new ' + this.options.kind;
				// link2.innerHTML = this.options.html;
				// watch(map.editTools.mode, 'name', () => {
				// 	if (map.editTools.mode.name === this.options.kind) {
				// 		link.innerHTML = `<span style="padding:2px; padding-right:4px; padding-left:4px; border-radius:4px; border: 3px solid #008AFA;" >
				//                         ${this.options.html}
				//                      </span>`;
				// 	} else {
				// 		link.innerHTML = this.options.html;
				// 	}
				// });

				L.DomEvent.on(link, 'click', L.DomEvent.stop).on(
					link,
					'click',
					function(e) {
						console.log('featuresInEditmode click', featuresInEditmode);

						if (featuresInEditmode === true) {
							onChange(false);
						} else {
							onChange(true);
						}
					},
					this
				);

				return container;
			}
		});

		return new ControlClass();
	}
}

Control.propTypes = {
	position: PropTypes.string,
	onSelect: PropTypes.func,
	onFeatureCreation: PropTypes.func,
	onFeatureChange: PropTypes.func
};

Control.defaultProps = {
	position: 'topleft',
	onSelect: (editable) => {},
	onFeatureCreation: (editable) => {},
	onFeatureChange: (editable) => {}
};
