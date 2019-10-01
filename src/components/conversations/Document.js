import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { getLinkForDoc } from '../../utils/kassenzeichenHelper';

// Since this component is simple and static, there's no parent container for it.
const Comp = ({ fileObject, remove, background = '#eeeeee' }) => {
	const [ verifiedState, setVerifiedState ] = useState('unverified');
	useEffect(() => {
		setTimeout(() => {
			setVerifiedState('verified');
		}, 1000);
	}, []);
	let color;
	switch (verifiedState) {
		case 'unverified':
			color = 'grey';
			break;
		case 'verified':
			color = 'black';
			break;
		default:
			color = 'grey';
	}

	let deleteLink;
	if (remove !== undefined) {
		deleteLink = (
			<a
				style={{ color, xverticalAlign: 'super', cursor: 'pointer' }}
				onClick={() => {
					remove();
				}}
			>
				&times;
			</a>
		);
	}

	let status;
	if (verifiedState !== 'verified') {
		status = <FontAwesomeIcon icon={faSpinner} spin />;
	}

	let main = <span style={{ marginLeft: 5, marginRight: 10 }}>{fileObject.name}</span>;
	if (verifiedState === 'verified') {
		main = (
			<a
				style={{ color, cursor: 'pointer' }}
				target='_additional_docs'
				href={getLinkForDoc(fileObject)}
			>
				{main}
			</a>
		);
	}

	return (
		<span
			style={{
				color,
				padding: '8px',
				borderRadius: 4,
				background
			}}
		>
			<FontAwesomeIcon icon={faFilePdf} />
			{main} {deleteLink} {status}
		</span>
	);
};

export default Comp;
