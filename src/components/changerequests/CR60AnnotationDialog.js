import Color from 'color';
import React from 'react';
import {
	Accordion,
	Button,
	ControlLabel,
	FormControl,
	FormGroup,
	Modal,
	Panel
} from 'react-bootstrap';
import { Icon } from 'react-fa';

import './style.css';

const Comp = ({
	visible,
	height,
	showAnnotationEditView = () => {},
	annotationFeature = { properties: { name: 'I' } },
	setNewAnnotation = () => {}
}) => {
	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 200
	};
	const close = () => {
		showAnnotationEditView(true);
	};
	const cancel = () => {
		showAnnotationEditView(false);
	};

	if (visible !== false && annotationFeature !== {}) {
		return (
			<Modal
				style={{
					zIndex: 3000000000
				}}
				height='100%'
				show={true || visible}
				onHide={close}
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>
						<Icon name={'edit'} /> {`Anmerkung ${annotationFeature.properties.name}`}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={modalBodyStyle} id='myMenu' key={'applicationMenuActiveKey'}>
					<p>
						Wenn Sie konkrete Änderungswünsche oder Anmerkungen haben, die Sie durch
						eine Geometrie veranschaulichen wollen, können Sie diese im untenstehenden
						Formular (blau umrahmter Bereich) eingeben. Bitte beachten Sie, dass Sie
						bestimmte Änderungswünsche mit Dokumenten belegen müssen.
					</p>
					<Accordion
						key={'sectionKey0'}
						name={'sectionKey'}
						style={{ marginBottom: 6 }}
						defaultActiveKey={'sectionKey0'}
						onSelect={() => {
							// if (applicationMenuActiveKey === sectionKey) {
							//   setApplicationMenuActiveKey("none");
							// } else {
							//   setApplicationMenuActiveKey(sectionKey);
							// }
						}}
					>
						<Panel
							header={'Anmerkung ' + annotationFeature.properties.name}
							eventKey={'sectionKey0'}
							bsStyle={'info'}
						>
							<form>
								<FormGroup controlId={'subject'}>
									<ControlLabel>Betreff</ControlLabel>
									<FormControl
										type='text'
										placeholder='Geben Sie hier den Titel Ihrer Anmerkung an'
										onChange={(e) => {
											const newA = JSON.parse(
												JSON.stringify(annotationFeature)
											);
											newA.properties.title = e.target.value;
											setNewAnnotation(newA);
											newA.properties.draft = true;
										}}
										value={annotationFeature.properties.title}
									/>
								</FormGroup>
								<FormGroup
									controlId='formControlsTextarea'
									className='customLeftAlignedValidation'
								/>
								<FormGroup controlId='formControlsTextarea'>
									<ControlLabel>Text</ControlLabel>
									<FormControl
										componentClass='textarea'
										rows='8'
										onChange={(e) => {
											const newA = JSON.parse(
												JSON.stringify(annotationFeature)
											);
											newA.properties.text = e.target.value;
											newA.properties.draft = true;
											setNewAnnotation(newA);
										}}
										value={annotationFeature.properties.text}
									/>
								</FormGroup>
							</form>
						</Panel>
					</Accordion>
				</Modal.Body>

				<Modal.Footer>
					<table
						style={{
							width: '100%',
							border: '1'
						}}
					>
						<tbody>
							<tr>
								<td
									style={{
										textAlign: 'left',
										verticalAlign: 'top',
										paddingRight: '30px'
									}}
								>
									<p>
										Um unnötige Verzögerungen zu vermeiden, achten Sie bitte
										darauf bei nachweispflichtigen Änderungen die entsprechenden
										Belege hinzuzufügen.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<Button
						id='cmdCloseModalApplicationMenu'
						bsStyle='warning'
						type='submit'
						onClick={cancel}
					>
						Abbrechen
					</Button>
					<Button
						id='cmdCloseModalApplicationMenu'
						bsStyle='primary'
						type='submit'
						onClick={close}
					>
						Übernehmen
					</Button>
				</Modal.Footer>
			</Modal>
		);
	} else {
		return null;
	}
};
export default Comp;
