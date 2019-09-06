import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import optional from '../utils/optionalHelper';

//const FontAwesome = require('react-fontawesome');

//const FlaechenPanel = ({flaeche,selected,flaechenPanelClickHandler,inputRef}) => {

const colorUnchanged = 'black';
const colorChanged = '#FC913A';

export default class FlaechenPanel extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToVisible = this.scrollToVisible.bind(this);
	}

	scrollToVisible() {
		scrollIntoViewIfNeeded(this.theDiv, false, {
			duration: 250
		});
	}

	render() {
		let groesse,
			groesseColor,
			anteil,
			anschlussgrad,
			anschlussgradColor,
			flaechenart,
			flaechenartColor,
			editButtonColor;

		let edited = false;
		//fill the intermediate vars
		if (this.props.display === 'cr') {
			groesse =
				this.props.changerequest.groesse ||
				this.props.flaeche.flaecheninfo.groesse_korrektur;
			anteil = this.props.changerequest.anteil || this.props.flaeche.anteil;
			anschlussgrad =
				optional(() => this.props.changerequest.anschlussgrad.grad_abkuerzung) ||
				this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung;
			flaechenart =
				optional(() => this.props.changerequest.flaechenart.art) ||
				this.props.flaeche.flaecheninfo.flaechenart.art;
		} else {
			groesse = this.props.flaeche.flaecheninfo.groesse_korrektur;
			anteil = this.props.flaeche.anteil;
			anschlussgrad = this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung;
			flaechenart = this.props.flaeche.flaecheninfo.flaechenart.art;
		}

		//set the textcolor
		if (groesse === this.props.flaeche.flaecheninfo.groesse_korrektur) {
			groesseColor = colorUnchanged;
		} else {
			groesseColor = colorChanged;
			edited = true;
		}
		if (anschlussgrad === this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung) {
			anschlussgradColor = colorUnchanged;
		} else {
			anschlussgradColor = colorChanged;
			edited = true;
		}
		if (flaechenart === this.props.flaeche.flaecheninfo.flaechenart.art) {
			flaechenartColor = colorUnchanged;
		} else {
			flaechenartColor = colorChanged;
			edited = true;
		}
		if (edited == true) {
			editButtonColor = colorChanged;
		} else {
			editButtonColor = colorUnchanged;
		}

		let background = null;
		if (this.props.selected) {
			background = 'grey';
		}

		const styleOverride = {
			marginBottom: '5px',
			width: '100%',
			height: '100%',
			background: background
		};
		let area = <div />;
		if (this.props.flaeche.anteil) {
			area = (
				<div style={{ color: groesseColor }}>
					{anteil} m&sup2; von {groesse} m&sup2;
				</div>
			);
		} else {
			area = <div style={{ color: groesseColor }}>{groesse} m&sup2;</div>;
		}
		let beschreibung = <div />;
		if (this.props.flaeche.flaecheninfo.beschreibung) {
			beschreibung = <div>{this.props.flaeche.flaecheninfo.beschreibung.beschreibung}</div>;
		}

		return (
			<div ref={(c) => (this.theDiv = c)}>
				<Well
					onClick={() => {
						this.props.flaechenPanelClickHandler(this.props.flaeche);
					}}
					bsSize='small'
					style={styleOverride}
				>
					<table style={{ width: '100%' }}>
						<tbody>
							<tr>
								<td>
									<b style={{ color: flaechenartColor }}>
										{flaechenart + ' ' + this.props.flaeche.flaechenbezeichnung}
									</b>
								</td>
								<td style={{ textAlign: 'right' }}>{beschreibung}</td>

								{this.props.editmode === true && (
									<td style={{ textAlign: 'right', color: editButtonColor }}>
										<Icon icon={faEdit} />
									</td>
								)}
							</tr>
							<tr>
								<td>{area}</td>
								<td style={{ textAlign: 'right', color: anschlussgradColor }}>
									{anschlussgrad}
								</td>
							</tr>
						</tbody>
					</table>
				</Well>
			</div>
		);
	}
}

FlaechenPanel.propTypes = {
	flaeche: PropTypes.object,
	editmode: PropTypes.bool,
	inputRef: PropTypes.object,
	selected: PropTypes.bool,
	flaechenPanelClickHandler: PropTypes.func,
	changerequests: PropTypes.object,
	display: PropTypes.string,
	changerequest: PropTypes.object
};
FlaechenPanel.defaultProps = {
	editmode: false,
	display: 'original',
	changerequest: {}
};
