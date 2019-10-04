import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getLinkForDoc } from '../../utils/kassenzeichenHelper';
import DocIcon from './DocIcon';
// Since this component is simple and static, there's no parent container for it.
const Comp = ({ fileObject, remove, background = '#eeeeee' }) => {
	const [ verifiedState, setVerifiedState ] = useState('unverified');
	useEffect(() => {
		let url = getLinkForDoc(fileObject);

		fetch(url, {
			method: 'head'
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					setVerifiedState('verified');
				} else {
					setVerifiedState('error');
				}
			})
			.catch(function(err) {
				console.error('error when head checking url ' + url, err);

				setVerifiedState('error');
			});
		// setTimeout(() => {
		// 	setVerifiedState('verified');
		// }, 1000);
	}, []);
	let color;
	switch (verifiedState) {
		case 'unverified':
			color = 'grey';
			break;
		case 'verified':
			color = 'black';
			break;
		case 'error':
			color = '#B05353';
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
	if (verifiedState === 'unverified') {
		status = <FontAwesomeIcon icon={faSpinner} spin />;
	}

	let main = <span style={{ marginLeft: 5, marginRight: 10 }}>{fileObject.name}</span>;
	if (verifiedState === 'verified') {
		main = (
			<a
				style={{ color, cursor: 'pointer' }}
				target='_additional_docs'
				href={getLinkForDoc(fileObject)}
				download={fileObject.name}
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
			<DocIcon fileEnding={fileObject.name.split('.').pop()} />
			{main} {deleteLink} {status}
		</span>
	);
};

export default Comp;
