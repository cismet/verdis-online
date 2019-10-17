import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Document from '../conversations/Document';
const Comp = ({ documents = [], uploadCRDoc = () => {}, setMsgAttachments = () => {} }) => {
	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) =>
			uploadCRDoc(file, (returnedFO) => {
				addAttachment(returnedFO);
			})
		);
	}, []);

	const addAttachment = (fileO) => {
		setMsgAttachments((msga) => {
			const newMsgAttachments = JSON.parse(JSON.stringify(msga));
			newMsgAttachments.push(JSON.parse(fileO));
			return newMsgAttachments;
		});
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()}>
			<input style={{ height: 0 }} {...getInputProps()} />
			{documents.length > 0 &&
				documents.map((doc, index) => {
					return (
						<div
							key={'Documents.div.' + index}
							style={{ margin: 10, fontSize: '130%' }}
						>
							<Document fileObject={doc} background='#FFF' />
						</div>
					);
				})}
			{documents.length === 0 && <div style={{ color: 'grey' }}>keine Datei vorhanden</div>}
		</div>
	);
};

export default Comp;
