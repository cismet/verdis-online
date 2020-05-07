import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Document from '../conversations/Document';
import { Icon } from 'react-fa';

const Comp = ({ documents = [], uploadCRDoc = () => {}, addFiles = () => {} }) => {
	const [ msgAttachments, setMsgAttachments ] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			file.nonce =
				btoa(unescape(encodeURIComponent(JSON.stringify(file)))) + new Date().getTime();
			addAttachment({
				name: file.name,
				nonce: file.nonce,
				inProgress: true
			});
			return uploadCRDoc(file, (returnedFOString) => {
				const returnedFO = JSON.parse(returnedFOString);
				returnedFO.nonce = file.nonce;
				returnedFO.inProgress = false;
				addFiles([ returnedFO ]);
				setMsgAttachments([]);
			});
		});
	}, []);

	const addAttachment = (fileO) => {
		setMsgAttachments((msga) => {
			const newMsgAttachments = JSON.parse(JSON.stringify(msga));
			newMsgAttachments.push(fileO);
			return newMsgAttachments;
		});
	};

	const { getRootProps, getInputProps, open } = useDropzone({
		onDrop,
		noClick: true,
		noKeyboard: true
	});

	const allDocs = [ ...documents, ...msgAttachments ];

	return (
		<div {...getRootProps()}>
			<div onClick={open} className='pull-right'>
				<button
					style={{
						border: 0,
						padding: 0,
						wordWrap: 'break-word',
						color: 'black',
						textAlign: 'left',
						outline: 'none' //
					}}
					class='btn-link'
				>
					<Icon style={{ marginBottom: 3 }} name='paperclip' />
				</button>
			</div>
			<input style={{ height: 0 }} {...getInputProps()} />
			{allDocs.length > 0 &&
				allDocs.map((doc, index) => {
					return (
						<div
							key={'Documents.div.' + index}
							style={{ margin: 10, fontSize: '110%' }}
						>
							<Document fileObject={doc} background='#FFF' />
						</div>
					);
				})}
			{allDocs.length === 0 && <div style={{ color: 'grey' }}>keine Datei vorhanden</div>}
		</div>
	);
};

export default Comp;
