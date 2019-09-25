import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Button, FormGroup, InputGroup } from 'react-bootstrap';
import { Icon } from 'react-fa';
import './style.css';
import TextareaAutosize from 'react-autosize-textarea';
import { useDropzone } from 'react-dropzone';

const Comp = ({
	value = '',
	setValue = () => {},
	setDraft = () => {},
	maxRows = 4,
	scrollToInput = () => {},
	subText = (
		<div>
			Mit <Icon name='arrow-up' /> können Sie Ihre letzte, noch nicht eingereichte Nachricht
			erneut editieren.
		</div>
	),
	lastUserMessage,
	removeLastUserMessage = () => {
		console.log('remove last user message');
	}
}) => {
	const textarea = useRef();
	const [ position, setPosition ] = useState(0);
	useEffect(() => {
		if (textarea && textarea.current) {
			textarea.current.selectionStart = position;
			textarea.current.selectionEnd = position;
			//textarea.current.style.height = textarea.current.scrollHeight + 'px';
		}
	});
	const onDrop = useCallback((acceptedFiles) => {
		console.log('acceptedFiles', acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	// const rowNumbersInDraft = value.split(/\r\n|\r|\n/).length;
	// if (rowNumbersInDraft < 1) {
	// 	rows = 1;
	// } else if (rowNumbersInDraft < maxRows + 1) {
	// 	rows = rowNumbersInDraft;
	// } else {
	// 	rows = maxRows;
	// }

	return (
		<div style={{ margin: '0px', marginTop: '30px' }}>
			<FormGroup>
				<InputGroup>
					{/* <InputGroup.Button>
					<Button>Before</Button>
				</InputGroup.Button> */}
					<InputGroup.Addon style={{ cursor: 'pointer', verticalAlign: 'bottom' }}>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							{isDragActive ? (
								<Icon style={{ marginBottom: 3 }} name='arrow-up' />
							) : (
								<Icon style={{ marginBottom: 3 }} name='paperclip' />
							)}
						</div>
					</InputGroup.Addon>
					<TextareaAutosize
						ref={textarea}
						style={{ resize: 'none', minHeight: '34px', textAlign: 'right' }}
						className='basicSelectionColor form-control'
						value={value}
						maxRows={12}
						onChange={(e) => {
							if (textarea && textarea.current) {
								setValue(e.target.value);
								setPosition(textarea.current.selectionStart);
							}
						}}
						onKeyDown={(e) => {
							if (textarea && textarea.current) {
								if (e.keyCode === 13 && !e.altKey) {
									const draft = e.target.value;
									setValue(undefined);
									setDraft(draft);
									e.preventDefault();
									scrollToInput();
								} else if (e.keyCode === 13 && e.altKey) {
									console.log(
										'textarea.current.selectionStart',
										textarea.current.selectionStart
									);

									setValue(
										e.target.value.substring(
											0,
											textarea.current.selectionStart
										) +
											'\n' +
											e.target.value.substring(
												textarea.current.selectionStart
											)
									);
									setPosition(textarea.current.selectionStart + 1);
								} else if (e.target.value === '' && e.keyCode === 38) {
									if (lastUserMessage !== undefined) {
										removeLastUserMessage();

										setValue(lastUserMessage.nachricht);
										setTimeout(() => {
											setPosition(lastUserMessage.nachricht.length + 100);
										}, 10);
									}
								}
							}
						}}
					/>
					<InputGroup.Addon style={{ cursor: 'pointer', verticalAlign: 'bottom' }}>
						<Icon
							onClick={(e) => {
								if (textarea && textarea.current) {
									const draft = textarea.current.value;
									setValue(undefined);
									setDraft(draft);

									scrollToInput();
								}
							}}
							style={{ marginBottom: 3 }}
							name='arrow-circle-right'
						/>
					</InputGroup.Addon>
				</InputGroup>
				<div
					style={{
						margin: 0,
						marginTop: 0,
						padding: 2,

						color: 'grey',
						XborderTop: '2px solid grey',
						fontSize: '12px'
					}}
				>
					<div style={{ textAlign: 'right' }}>{subText}</div>
				</div>
			</FormGroup>
		</div>
	);
};
export default Comp;
