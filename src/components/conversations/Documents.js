import React from 'react';
import Document from './Document';
// Since this component is simple and static, there's no parent container for it.
const Comp = ({ docs, setDocs, readOnly = false, margin = '15px', embedded = false }) => {
	let remover;
	if (readOnly === false) {
		remover = (index) => {
			const newAttachments = JSON.parse(JSON.stringify(docs));
			newAttachments.splice(index, 1);
			setDocs(newAttachments);
		};
	}
	let background;
	if (embedded === true) {
		background = '#00000000'; //transparent
	}
	return (
		<div style={{ margin }}>
			{(docs || []).map((fileO, index) => {
				return (
					<span key={'draftDocs.' + index}>
						{index > 0 ? ', ' : ''}
						{readOnly && <Document fileObject={fileO} background={background} />}
						{!readOnly && (
							<Document
								fileObject={fileO}
								remove={() => {
									remover(index);
								}}
								background={background}
							/>
						)}
					</span>
				);
			})}
		</div>
	);
};

export default Comp;
