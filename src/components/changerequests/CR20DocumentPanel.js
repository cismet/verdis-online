import React from 'react';
import { Icon } from 'react-fa';
import { getLinkForUUID } from '../../utils/kassenzeichenHelper';
const Comp = ({ doc }) => {
	return (
		<div style={{ fontSize: '130%' }}>
			<a
				target='_additional_docs'
				href={getLinkForUUID(doc.uuid)}
				style={{ color: 'black', cursor: 'pointer' }}
			>
				<Icon name={'file'} /> {doc.name}
			</a>
		</div>
	);
};

export default Comp;
