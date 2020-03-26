import React from 'react';
import PropTypes from 'prop-types';

import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { Well } from 'react-bootstrap';
import { colorUnchanged, colorChanged, colorDraft } from '../utils/kassenzeichenHelper';
import { faEdit, faDrawPolygon, faTrashAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

// Switched fomr func comp to class again because of the external ref
// const Comp = ({
// 	annotationFeature,
// 	editmode = true,
// 	selected,
// 	showEditAnnoMenu,
// 	clickHandler = () => {}
// }) => {

export default class Comp extends React.Component {
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
		const annotationFeature = this.props.annotationFeature;
		const editmode = this.props.editmode || true;
		const selected = this.props.selected;
		const showEditAnnoMenu = this.props.showEditAnnoMenu;
		const clickHandler = this.props.clickHandler || (() => {});
		const togglePolyEditMode = this.props.togglePolyEditMode || (() => {});
		const inPolyEditMode = this.props.inPolyEditMode || false;
		const layer = this.props.layer;
		const map = this.props.map;

		const editButtonColor = colorChanged;
		const color = colorChanged;
		const anmerkungsTitleColor = colorUnchanged;
		const title = annotationFeature.properties.title || 'neue Anmerkung';
		const showEverything = this.props.showEverything || false;
		let background;
		if (selected === true) {
			background = 'grey';
		}

		let borderStyle = 'solid';
		let borderColor = undefined;
		if (annotationFeature.properties.draft === true) {
			borderStyle = 'solid';
			borderColor = colorDraft;
		}

		let styleOverride = {
			marginBottom: '5px',
			width: '100%',
			height: '100%',
			background: background,
			borderStyle: borderStyle,
			borderColor: borderColor
		};
		let content;
		if (showEverything === true) {
			content = annotationFeature.properties.text;
		} else {
			content = annotationFeature.properties.name;
		}

		return (
			<div ref={(c) => (this.theDiv = c)}>
				<Well
					bsSize='small'
					style={styleOverride}
					onClick={() => {
						clickHandler(annotationFeature);
					}}
				>
					{' '}
					<table style={{ width: '100%' }}>
						<tbody>
							<tr>
								<td>
									<b style={{ color: color }}>
										Anmerkung {annotationFeature.properties.name}{' '}
										{showEverything === true && '(' + title + ')'}
									</b>
								</td>
								<td style={{ textAlign: 'right' }} />

								{showEditAnnoMenu !== undefined &&
								editmode === true && (
									<td
										style={{
											textAlign: 'right',
											color: editButtonColor,
											cursor: 'pointer'
										}}
									>
										<Icon
											onClick={(e) => {
												showEditAnnoMenu(annotationFeature);
												e.stopPropagation();
											}}
											icon={faEdit}
										/>
									</td>
								)}
							</tr>
							<tr>
								<td style={{ color: anmerkungsTitleColor }}>{content}</td>
								{/* <td style={{ textAlign: 'right', color: anschlussgradColor }}>
								{anschlussgrad}
							</td> */}
							</tr>
						</tbody>
					</table>
				</Well>
			</div>
		);
	}
}
Comp.propTypes = {
	annotationFeature: PropTypes.object,
	editmode: PropTypes.bool,
	selected: PropTypes.bool,
	showEditAnnoMenu: PropTypes.func,
	setEditMode4Feature: PropTypes.func,
	clickHandler: PropTypes.func,
	layer: PropTypes.object,
	showEverything: PropTypes.bool
};
