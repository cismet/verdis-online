import React from 'react';
import DocIcon from '../conversations/DocIcon';
import Document from '../conversations/Document';
import { getLinkForDoc } from '../../utils/kassenzeichenHelper';
const Comp = ({ doc }) => {
	return (
		<div style={{ margin: 10, fontSize: '130%' }}>
			{/* <a
				target='_additional_docs'
				href={getLinkForDoc(doc)}
				style={{ color: 'black', cursor: 'pointer' }}
			>
				<DocIcon fileEnding={doc.name.split('.').pop()} /> {doc.name}
			</a> */}
			<Document fileObject={doc} background='#FFF' />
		</div>
	);
};

export default Comp;
