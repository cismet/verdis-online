import React, { useRef, useState } from 'react';
import { Accordion, Button, Modal, Panel } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import ClickNHold from 'react-click-n-hold';
import { Icon } from 'react-fa';
import FlexView from 'react-flexview';
import ConversationInput from '../conversations/ConversationInput';
import CRConversation from '../conversations/CRConversation';
import FlaechenPanel from '../FlaechenPanel';
import DocPanel from './CR20DocumentPanel';

const scrollToVisible = (ref) => {
	// console.log('scroll ref', ref.current);
	if (ref && ref.current) {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	}
	// scrollIntoViewIfNeeded(ref.current, false, {
	// 	duration: 250
	// });
};

const CR00 = ({
	visible,
	height,
	kassenzeichen,
	showChangeRequestMenu = () => {},
	addMessage = () => {},
	removeLastUserMessage = () => {},
	uploadCRDoc = () => {},
	crEditMode = false,
	setCREditMode = () => {}
}) => {
	const scrollDivRef = useRef(null);
	const [ locked, setLocked ] = useState(true);
	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 250
	};

	const close = () => {
		setLocked(true);
		showChangeRequestMenu(false);
	};

	const unlockOrSubmit = () => {
		if (locked === true) {
			setLocked(false);
		} else {
			//submit the shit

			//then
			close();
		}
	};

	const changerequests = kassenzeichen.changerequests;

	if (visible === true) {
		const changerequestBezeichnungsArray =
			Object.keys((changerequests || { flaechen: [] }).flaechen || []) || [];
		const changerequestMessagesArray =
			(changerequests || { nachrichten: [] }).nachrichten || [];
		const documents = [];
		const origPanels = [];
		const crPanels = [];
		let lastUserMessage = undefined;
		const sMsgs = changerequestMessagesArray.sort((a, b) => a.timestamp - b.timestamp);

		changerequestBezeichnungsArray.map((flaechenbezeichnung, index) => {
			//find flaeche
			const flaeche = kassenzeichen.flaechen.find(
				(fCand) => fCand.flaechenbezeichnung === flaechenbezeichnung
			);

			//get cr for flaeche
			const cr = changerequests.flaechen[flaechenbezeichnung];

			//create the panels and push them into the arrays
			origPanels.push(<FlaechenPanel key={'orig.' + index} flaeche={flaeche} />);
			crPanels.push(
				<FlaechenPanel
					key={'cr' + index}
					flaeche={flaeche}
					display={'cr'}
					changerequest={cr}
				/>
			);
		});

		sMsgs.map((msg) => {
			//if a document exists, add it to the documents array
			if (msg.anhang !== undefined && msg.anhang.length > 0) {
				msg.anhang.map((anhang) => {
					documents.push(anhang);
				});
			}

			if (msg.typ === 'CITIZEN' && msg.draft === true) {
				lastUserMessage = msg;
			}
		});

		return (
			<Modal
				style={{
					zIndex: 3000000000
				}}
				height='100%'
				bsSize={crEditMode === true ? 'large' : 'default'}
				show={true || visible}
				onHide={close}
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>
						<Icon name={'edit'} /> {'Änderungswünsche und Kommentare'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={modalBodyStyle} id='myMenu' key={'applicationMenuActiveKey'}>
					<p>
						Wenn Sie Änderungswünsche haben, aktivieren Sie hier den Änderungsmodus.
						Danach können Sie in der Applikation mit dem Sachbearbeiter in Kontakt
						treten sowie konkrete Änderungsvorschläge an den einzelnen Flächen selbt
						hinterlegen.
					</p>
					<p style={{ textAlign: 'center', marginTop: '20px' }}>
						<div style={{ fontSize: '20px' }}>
							<strong>Änderungsmodus: </strong>
							<Toggle
								onClick={() => {
									setCREditMode(!crEditMode);
								}}
								on={'Ein'}
								off={'Aus'}
								offstyle='danger'
								onstyle='success'
								active={crEditMode}
								style={{ padding: 10 }}
							/>
						</div>
					</p>

					{crEditMode === true && (
						<div>
							<p>
								Hier können Sie gewünschte Änderungen eintragen, belegen und an uns
								übermitteln. Bitte beachten Sie, dass eine Nachweispflicht besteht,
								wenn Flächen nicht in den Kanal entwässern. Die nachfolgende
								Kommunikation ist kein Chat. Eine Antwort wird nicht immer zeitnah
								erfolgen.
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
									header={'Ihre Kommunikation'}
									eventKey={'sectionKey0'}
									bsStyle={'info'}
								>
									<CRConversation
										messages={
											(kassenzeichen.changerequests || { nachrichten: [] })
												.nachrichten
										}
									/>

									<ConversationInput
										setDraft={(draftText, attachments) => {
											console.log('draftText', draftText);
											const msg = {
												typ: 'CITIZEN',
												timestamp: Date.now(),
												nachricht: draftText,
												draft: true,
												anhang: attachments
											};

											addMessage(msg);
										}}
										scrollToInput={() => {
											console.log('scrollToInput', scrollDivRef);
											setTimeout(() => {
												scrollToVisible(scrollDivRef);
											}, 10);
										}}
										lastUserMessage={lastUserMessage}
										removeLastUserMessage={removeLastUserMessage}
										uploadCRDoc={uploadCRDoc}
									/>

									{/* <div style={{ marginTop: '20px', textAlign: 'end' }}>
								<span>
									1 ungesendete Nachricht
									
								</span>
							</div> */}
									<div ref={scrollDivRef} style={{ height: 1 }} />
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
									header={
										'Ihre Änderungsvorschläge' +
										(changerequestBezeichnungsArray !== undefined &&
										changerequestBezeichnungsArray.length > 0
											? ' (' + changerequestBezeichnungsArray.length + ')'
											: '')
									}
									eventKey={'sectionKey1'}
									bsStyle={'warning'}
								>
									<div>
										{origPanels.length > 0 && (
											<FlexView row justifyContent='space-around'>
												<FlexView column grow>
													<h4>aktueller Datenbestand</h4>
													{origPanels}
												</FlexView>
												<FlexView column grow />

												<FlexView column grow />
												<FlexView column grow>
													<h4>Ihr Änderungswunsch</h4>
													{crPanels}
												</FlexView>
											</FlexView>
										)}
										{origPanels.length === 0 && (
											<div style={{ color: 'grey' }}>
												keine Änderungsvorschläge vorhanden
											</div>
										)}
									</div>
								</Panel>
							</Accordion>
							<Accordion
								key={'sectionKey'}
								name={'sectionKey'}
								style={{ marginBottom: 6 }}
								defaultActiveKey={'sectionKey'}
								onSelect={() => {
									// if (applicationMenuActiveKey === sectionKey) {
									//   setApplicationMenuActiveKey("none");
									// } else {
									//   setApplicationMenuActiveKey(sectionKey);
									// }
								}}
							>
								<Panel
									header={
										'Ihre Dokumente' +
										(documents.length > 0 ? ' (' + documents.length + ')' : '')
									}
									eventKey={'sectionKey'}
									bsStyle={'danger'}
								>
									<div>
										{documents.length > 0 &&
											documents.map((doc) => {
												return <DocPanel doc={doc} />;
											})}
									</div>
									{documents.length === 0 && (
										<div style={{ color: 'grey' }}>keine Datei vorhanden</div>
									)}
								</Panel>
							</Accordion>
						</div>
					)}
				</Modal.Body>

				<Modal.Footer>
					{crEditMode === true && (
						<div>
							<table
								style={{
									width: '100%'
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
												Bitte beachten Sie, dass die Änderungswünsche und
												Ihre Anmerkungen und Ihre hochgeladenen Dokumente
												erst für den Sachbearbeiter sichtbar sind wenn sie
												die Änderungen eingereicht haben.
											</p>
											<p>
												Sollten sich nach Abschluss der Bearbeitung
												Änderungen gegenüber der bisherigen Gebührenerhebung
												ergeben, erhalten Sie einen Änderungsbescheid durch
												das Steueramt. Eine Veranlagung findet ggf.
												rückwirkend ab dem Datum an dem die Änderung
												feststellbar ist, aber längsten das laufende und die
												4 vorhergehenden Jahre, statt.
											</p>
										</td>
										<td />
									</tr>
								</tbody>
							</table>
							<table
								style={{
									width: '100%'
								}}
								border={0}
							>
								<tbody>
									<tr>
										<td width='100%' style={{ paddingRight: 10 }}>
											<Button
												style={{ width: '200px' }}
												id='cmdCloseModalApplicationMenu'
												bsStyle='warning'
												type='submit'
												onClick={close}
											>
												Schließen
											</Button>
											<div style={{ fontSize: 11 }}>
												es gehen kein Änderungen verloren
											</div>
										</td>
										<td width='100%' style={{ verticalAlign: 'top' }}>
											<Button
												style={{ width: '300px' }}
												bsStyle='success'
												className='fillButton'
												onClick={unlockOrSubmit}
											>
												<Icon
													name={locked === true ? 'lock' : 'unlock'}
												/>{' '}
												{locked === true ? (
													'Entsperren zum Einreichen'
												) : (
													'Einreichen der Änderungswünsche'
												)}
											</Button>
											<div style={{ fontSize: 11 }} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					)}
					{!crEditMode === true && (
						<div>
							<p style={{ textAlign: 'left' }}>
								Wenn Sie den Änderungsmodus aktivieren, erscheinen in diesem Dialog
								die Steuerelemente mit denen Sie dann Ihre Ändeurngen anlegen
								können.
							</p>
							<Button
								id='cmdCloseModalApplicationMenu'
								bsStyle='primary'
								type='submit'
								onClick={close}
							>
								Ok
							</Button>
						</div>
					)}
				</Modal.Footer>
			</Modal>
		);
	} else {
		return null;
	}
};
export default CR00;
