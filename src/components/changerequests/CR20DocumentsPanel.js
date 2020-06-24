import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Document from '../conversations/Document';
import { Icon } from 'react-fa';

const Comp = ({ documents = [], uploadCRDoc, tmpAttachments = [], setTmpAttachments }) => {
	let readOnly = false;
	if (uploadCRDoc === undefined) {
		readOnly = true;
	}

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
				updateAttachment(returnedFO);
			});
		});
	}, []);

	const addAttachment = (fileO) => {
		setTmpAttachments((msga) => {
			const newMsgAttachments = JSON.parse(JSON.stringify(msga));
			newMsgAttachments.push(fileO);
			return newMsgAttachments;
		});
	};
	const updateAttachment = (fileO) => {
		setTmpAttachments((msga) => {
			const newMsgAttachments = JSON.parse(JSON.stringify(msga));
			newMsgAttachments.forEach((fo, index) => {
				if (fo.nonce === fileO.nonce) {
					newMsgAttachments[index] = fileO;
					return;
				}
			});

			return newMsgAttachments;
		});
	};
	const removeAttachment = (fileO) => {
		setTmpAttachments((msga) => {
			const newMsgAttachments = JSON.parse(JSON.stringify(msga));
			return newMsgAttachments.filter((value) => value.nonce !== fileO.nonce);
		});
	};

	const { getRootProps, getInputProps, open } = useDropzone({
		onDrop,
		noClick: true,
		noKeyboard: true
	});

	let dndInputProps = {};
	let dndRootProps = {};

	if (readOnly === false) {
		dndInputProps = getInputProps();
		dndRootProps = getRootProps();
	}

	return (
		<div {...dndRootProps}>
			{readOnly === false && (
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
			)}
			{readOnly === false && <input style={{ height: 0 }} {...dndInputProps} />}
			{documents.length > 0 &&
				documents.map((doc, index) => {
					return (
						<div
							key={'Documents.div.' + index}
							style={{ margin: 10, fontSize: '110%' }}
						>
							<Document fileObject={doc} background='#FFF' />
						</div>
					);
				})}
			{tmpAttachments.length > 0 &&
				tmpAttachments.map((doc, index) => {
					return (
						<div
							key={'msgAttachments.div.' + index}
							style={{ margin: 10, fontSize: '110%' }}
						>
							<Document
								fileObject={doc}
								remove={() => {
									removeAttachment(doc);
								}}
								background='#dddddd'
							/>
						</div>
					);
				})}
			{documents.length === 0 &&
			tmpAttachments.length === 0 && (
				<div style={{ color: 'grey' }}>keine Datei vorhanden</div>
			)}
		</div>
	);
};

export default Comp;
