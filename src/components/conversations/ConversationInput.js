import React, { useState } from 'react';
import { Button, FormGroup, InputGroup } from 'react-bootstrap';
import { Icon } from 'react-fa';

const Comp = ({ draft = '', setDraft, maxRows = 4 }) => {
	let rows = 1;
	const rowNumbersInDraft = draft.split(/\r\n|\r|\n/).length;
	if (rowNumbersInDraft < 1) {
		rows = 1;
	} else if (rowNumbersInDraft < maxRows + 1) {
		rows = rowNumbersInDraft;
	} else {
		rows = maxRows;
	}

	return (
		<FormGroup>
			<InputGroup>
				{/* <InputGroup.Button>
					<Button>Before</Button>
				</InputGroup.Button> */}
				<InputGroup.Addon style={{ cursor: 'pointer', verticalAlign: 'bottom' }}>
					<Icon name='paperclip' />
				</InputGroup.Addon>
				<textarea
					style={{ resize: 'vertical', minHeight: '34px' }}
					className='form-control'
					value={draft}
					rows={rows}
					onChange={(e) => {
						setDraft(e.target.value);
					}}
				/>
				<InputGroup.Addon style={{ cursor: 'pointer', verticalAlign: 'bottom' }}>
					<Icon name='arrow-circle-right' />
				</InputGroup.Addon>
			</InputGroup>
		</FormGroup>
	);
};
export default Comp;
