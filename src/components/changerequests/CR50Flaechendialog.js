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
import FlexView from 'react-flexview';
import {
	anschlussgrade,
	flaechenarten,
	getProcessedFlaechenCR
} from '../../utils/kassenzeichenHelper';
import FlaechenPanel from '../FlaechenPanel';
import Document from '../conversations/Document';
import DocPanel from './CR20DocumentsPanel';

import './style.css';

const CR00 = ({
	visible,
	height,
	showChangeRequestMenu = () => {},
	flaeche = {},
	flaechenCR = {},
	setFlaechenCR = () => {},
	documents = [],
	uploadCRDoc = () => {},
	setMsgAttachments = () => {}
}) => {
	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 200
	};
	const close = () => {
		showChangeRequestMenu(true);
	};
	const cancel = () => {
		showChangeRequestMenu(false);
	};

	const setNewFlaechenCR = (cr) => {
		cr.draft = true;
		setFlaechenCR(cr);
	};

	const isAnteiligeFlaeche = () => {
		return flaeche.anteil !== undefined;
	};

	if (visible !== false && flaechenCR !== {}) {
		const crInfo = getProcessedFlaechenCR(flaeche, flaechenCR);

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
						<Icon name={'edit'} />{' '}
						{`Änderungen an ${flaeche.flaecheninfo.flaechenart
							.art} ${flaeche.flaechenbezeichnung}`}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={modalBodyStyle} id='myMenu' key={'applicationMenuActiveKey'}>
					<p>
						Wenn Sie konkrete Änderungswünsche haben, können Sie diese im untenstehenden
						Formular (gelb umrahmter Bereich) direkt der Fläche zuordnen. Bitte beachten
						Sie, dass Sie bestimmte Änderungen mit Dokumenten belegen müssen. Alle
						Dokumente, die Ihrem Kassenzeichen zugeordnet sind, finden Sie im rot
						umrahmten Bereich. Dort können Sie auch neue Dokumente hochladen.
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
						<Panel header={'Übersicht '} eventKey={'sectionKey0'} bsStyle={'info'}>
							<FlexView row justifyContent='space-around'>
								<FlexView column grow>
									<h4>aktueller Datenbestand</h4>
									<FlaechenPanel key={'orig'} flaeche={flaeche} />
								</FlexView>
								<FlexView column grow />

								<FlexView column grow>
									<h4>Ihr Änderungswunsch</h4>

									<FlaechenPanel
										key={'cr'}
										flaeche={flaeche}
										display={'cr'}
										changerequest={flaechenCR}
									/>
								</FlexView>
							</FlexView>
						</Panel>
					</Accordion>
					<Accordion
						key={'sectionKey1'}
						name={'sectionKey'}
						style={{ marginBottom: 6 }}
						defaultActiveKey={'sectionKey1'}
						onSelect={() => {
							// if (applicationMenuActiveKey === sectionKey) {
							//   setApplicationMenuActiveKey("none");
							// } else {
							//   setApplicationMenuActiveKey(sectionKey);
							// }
						}}
					>
						<Panel
							header={`Ihre Änderungsvorschläge${crInfo.changeCounter > 0
								? ' (' + crInfo.changeCounter + ')'
								: ''}`}
							eventKey={'sectionKey1'}
							bsStyle={'warning'}
						>
							<form>
								<FormGroup
									controlId='formControlsTextarea'
									validationState={crInfo.validationStates.groesse}
									className='customLeftAlignedValidation'
								>
									{isAnteiligeFlaeche() === false && (
										<ControlLabel>Größe in m²</ControlLabel>
									)}

									{isAnteiligeFlaeche() === true && (
										<ControlLabel>
											Größe in m² (Hier nicht änderbar, da eine Anteilsfläche
											vorliegt.)
										</ControlLabel>
									)}
									<FormControl
										disabled={isAnteiligeFlaeche()}
										style={{
											background: new Color(
												crInfo.colors.groesse === 'black'
													? 'white'
													: crInfo.colors.groesse
											).alpha(0.1)
										}}
										onChange={(e) => {
											if (isAnteiligeFlaeche() === false) {
												const newCR = JSON.parse(
													JSON.stringify(flaechenCR)
												);
												newCR.groesse = Number(e.target.value);
												setNewFlaechenCR(newCR);
											}
										}}
										value={crInfo.groesse}
									/>
									<FormControl.Feedback />
								</FormGroup>
								<FormGroup
									controlId='formControlsSelect'
									validationState={crInfo.validationStates.flaechenart}
									className='customLeftAlignedValidation'
								>
									<ControlLabel>Flächenart</ControlLabel>
									<FormControl
										style={{
											background: new Color(
												crInfo.colors.flaechenart === 'black'
													? 'white'
													: crInfo.colors.flaechenart
											).alpha(0.1)
										}}
										onChange={(e) => {
											const newCR = JSON.parse(JSON.stringify(flaechenCR));
											newCR.flaechenart = flaechenarten.find(
												(val) => val.art_abkuerzung === e.target.value
											);

											//newCR.flaechenart = e.target.value;
											setNewFlaechenCR(newCR);
										}}
										componentClass='select'
										placeholder='select'
										value={crInfo.art.art_abkuerzung}
									>
										{flaechenarten.map((otherart) => {
											return (
												<option
													key={'opt.' + otherart.art_abkuerzung}
													value={otherart.art_abkuerzung}
												>
													{otherart.art}
												</option>
											);
										})}
									</FormControl>
									<FormControl.Feedback />
								</FormGroup>
								<FormGroup
									controlId='formControlsSelect'
									validationState={crInfo.validationStates.anschlussgrad}
									className='customLeftAlignedValidation'
								>
									<ControlLabel>Anschlussgrad</ControlLabel>
									<FormControl
										style={{
											background: new Color(
												crInfo.colors.anschlussgrad === 'black'
													? 'white'
													: crInfo.colors.anschlussgrad
											).alpha(0.1)
										}}
										onChange={(e) => {
											const newCR = JSON.parse(JSON.stringify(flaechenCR));

											newCR.anschlussgrad = anschlussgrade.find(
												(val) => val.grad_abkuerzung === e.target.value
											);

											setNewFlaechenCR(newCR);
										}}
										componentClass='select'
										placeholder='select'
										value={crInfo.anschlussgrad.grad_abkuerzung}
									>
										{anschlussgrade.map((grad) => {
											return (
												<option
													key={'opt.' + grad.grad_abkuerzung}
													value={grad.grad_abkuerzung}
												>
													{grad.grad}
												</option>
											);
										})}
									</FormControl>
									<FormControl.Feedback />
								</FormGroup>
							</form>
						</Panel>
					</Accordion>
					<Accordion
						key={'sectionKey'}
						name={'sectionKey'}
						style={{ marginBottom: 6 }}
						defaultActiveKey={'sectionKey' || 'sectionKey'}
						onSelect={() => {
							// if (applicationMenuActiveKey === sectionKey) {
							//   setApplicationMenuActiveKey("none");
							// } else {
							//   setApplicationMenuActiveKey(sectionKey);
							// }
						}}
					>
						<Panel
							header={`Ihre Dokumente ${documents.length > 0
								? ' (' + documents.length + ')'
								: ''}`}
							eventKey={'sectionKey'}
							bsStyle={'danger'}
						>
							<DocPanel
								uploadCRDoc={uploadCRDoc}
								setMsgAttachments={setMsgAttachments}
								documents={documents}
							/>
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
export default CR00;
