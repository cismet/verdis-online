import PropTypes from 'prop-types';
import React from 'react';
import { Well } from 'react-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import optional from '../utils/optionalHelper';
import { colorDraft } from '../utils/kassenzeichenHelper';
import { getProcessedFlaechenCR, colorUnchanged, colorChanged } from '../utils/kassenzeichenHelper';
//const FontAwesome = require('react-fontawesome');

//const FlaechenPanel = ({flaeche,selected,flaechenPanelClickHandler,inputRef}) => {

//const colorUnchanged = 'black';
//const colorChanged = '#FC913A';

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
			groesseColor = 'black',
			anteil,
			anschlussgrad,
			anschlussgradColor = 'black',
			flaechenart,
			flaechenartColor = 'black',
			editButtonColor;
		let borderStyle = undefined;
		let borderColor = undefined;
		//fill the intermediate vars
		const crInfo = getProcessedFlaechenCR(this.props.flaeche, this.props.changerequest);
		if (this.props.display === 'cr') {
			groesse = crInfo.groesse;
			anschlussgrad = crInfo.anschlussgrad.grad_abkuerzung;
			flaechenart = crInfo.art.art;

			groesseColor = crInfo.colors.groesse;
			anschlussgradColor = crInfo.colors.anschlussgrad;
			flaechenartColor = crInfo.colors.flaechenart;
			if (this.props.changerequest.draft === true) {
				borderStyle = 'solid';
				borderColor = colorDraft;
			}

			anteil = this.props.changerequest.anteil || this.props.flaeche.anteil;
		} else {
			groesse = this.props.flaeche.flaecheninfo.groesse_korrektur;
			anteil = this.props.flaeche.anteil;
			anschlussgrad = this.props.flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung;
			flaechenart = this.props.flaeche.flaecheninfo.flaechenart.art;
		}

		if (crInfo.edited == true) {
			editButtonColor = colorChanged;
		} else {
			editButtonColor = colorUnchanged;
		}

		let background = null;

		if (this.props.selected) {
			background = 'grey';
		}
		if (this.props.selected) {
			background = 'grey';
		}

		let styleOverride = {
			marginBottom: '5px',
			width: '100%',
			height: '100%',
			background: background,
			borderStyle: borderStyle,
			borderColor: borderColor
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
									<td
										style={{
											textAlign: 'right',
											color: editButtonColor,
											cursor: 'pointer'
										}}
									>
										<Icon
											onClick={(e) => {
												this.props.showEditCRMenu(this.props.flaeche);
												e.stopPropagation();
											}}
											icon={faEdit}
										/>
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
	changerequest: PropTypes.object,
	showEditCRMenu: PropTypes.func
};
FlaechenPanel.defaultProps = {
	editmode: false,
	display: 'original',
	changerequest: {},
	flaechenPanelClickHandler: () => {}
};
