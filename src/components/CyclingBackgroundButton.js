import PropTypes from 'prop-types';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';

import { MapControl } from 'react-leaflet';
import L from 'leaflet';

class Control extends MapControl {
	componentWillMount() {
		let newIndex = this.props.currentBackgroundIndex + 1;
		if (newIndex >= this.props.backgrounds.length) {
			newIndex = 0;
		}
		const setIndex = this.props.setSelectedBackgroundIndex;
		let buttonStates = [];
		for (let i = 0; i < this.props.backgrounds.length; ++i) {
			let newI = i + 1;
			if (newI >= this.props.backgrounds.length) {
				newI = 0;
			}
			let state = {
				stateName: 'bg-' + i,
				icon: `<img width="28" height="28" src="${this.props.backgrounds[newI].src}"/>`,
				onClick: function(control) {
					control.state('bg-' + newI);
					setIndex(newI);
				},
				title: `${this.props.tooltipPrefix}${this.props.backgrounds[newI].title}${this.props
					.tooltipPostfix}`
			};
			buttonStates.push(state);
		}

		this.leafletElement = L.easyButton({
			states: buttonStates
		});
		this.leafletElement.button.style.padding = '1px';
		this.leafletElement.button.style.lineHeight = '24px';
		this.leafletElement.state('bg-' + this.props.currentBackgroundIndex);
	}
}

Control.propTypes = {
	position: PropTypes.string,
	setSelectedBackgroundIndex: PropTypes.func,
	backgrounds: PropTypes.array,
	currentBackgroundIndex: PropTypes.number,
	tooltipPrefix: PropTypes.string,
	tooltipPostfix: PropTypes.string
};

Control.defaultProps = {
	position: 'topleft',
	setSelectedBackgroundIndex: () => {},
	backgrounds: [],
	currentBackgroundIndex: 0,
	tooltipPrefix: 'Hintergrund wechseln zu ',
	tooltipPostfix: '.'
};
export default Control;
