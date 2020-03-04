import React, { useRef } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { Well } from 'react-bootstrap';
import {
	getProcessedFlaechenCR,
	colorUnchanged,
	colorChanged,
	colorDraft
} from '../utils/kassenzeichenHelper';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Comp = ({ annotationFeature, editmode = true, selected, showEditAnnoMenu }) => {
	console.log('AnnotationPanel for ', annotationFeature);

	const divRef = useRef(null);
	const editButtonColor = colorChanged;
	const color = colorChanged;
	const anmerkungsTitleColor = colorUnchanged;
	const title = annotationFeature.properties.title || 'neue Anmerkung';
	if (selected === true) {
		background = 'grey';
	} else {
		//background = '#BE4C4D';
	}
	let background;
	if (selected) {
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
	return (
		<div ref={divRef}>
			<Well bsSize='small' style={styleOverride}>
				{' '}
				<table style={{ width: '100%' }}>
					<tbody>
						<tr>
							<td>
								<b style={{ color: color }}>
									Anmerkung {annotationFeature.properties.name}
								</b>
							</td>
							<td style={{ textAlign: 'right' }} />

							{editmode === true && (
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
							<td style={{ color: anmerkungsTitleColor }}>{title}</td>
							{/* <td style={{ textAlign: 'right', color: anschlussgradColor }}>
								{anschlussgrad}
							</td> */}
						</tr>
					</tbody>
				</table>
			</Well>
		</div>
	);
};

export default Comp;
