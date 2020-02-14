import PropTypes from 'prop-types';
import React from 'react';
import { Well, Button } from 'react-bootstrap';
import { Icon } from 'react-fa';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import Toggle from 'react-bootstrap-toggle';

const KassenzeichenPanel = ({ kassenzeichen, onClick, d3Click, d3Enabled }) => {
	const styleOverride = {
		marginBottom: '5px',
		width: '100%'
	};
	let locker;
	if (kassenzeichen.sperre) {
		locker = 'lock';
	} else {
		locker = 'unlock';
	}
	let d3;
	if (d3Enabled) {
		d3 = (
			<Button block show={d3Enabled} onClick={d3Click}>
				{' '}
				<Icon name='file-pdf' /> in d.3 &ouml;ffnen
			</Button>
		);
	} else {
		d3 = <div />;
	}

	return (
		<Well onClick={onClick} bsSize='small' style={styleOverride}>
			<h4>Kassenzeichen</h4>
			<small>erfasst am {kassenzeichen.datum_erfassung}</small>
			<table style={{ width: '100%' }}>
				<tbody>
					<tr>
						<td>
							<h2>{kassenzeichen.kassenzeichennummer8}</h2>
						</td>
						<td style={{ textAlign: 'right', verticalAlign: 'bottom' }}>
							<Icon name={locker} />
						</td>
					</tr>
				</tbody>
			</table>
			{d3}
			{/* Änderungen anzeigen:{' '}
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<Toggle
					on={'meine Änderungen'}
					off={'Original'}
					size='xs'
					offstyle='success'
					onstyle='warning'
					active={true}
					style={{ padding: 10 }}
				/> */}
			{/* </div> */}
		</Well>
	);
};
KassenzeichenPanel.propTypes = {
	kassenzeichen: PropTypes.object,
	onClick: PropTypes.func,
	d3Click: PropTypes.func,
	d3Enabled: PropTypes.bool
};

export default KassenzeichenPanel;
