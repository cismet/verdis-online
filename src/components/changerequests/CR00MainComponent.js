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
	removeLastUserMessage = () => {}
}) => {
	const [ mode, setMode ] = useState('cr_off');
	const scrollDivRef = useRef(null);

	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 200
	};

	const close = () => {
		showChangeRequestMenu(false);
	};
	const [ msgTextValue, setMsgTextValue ] = useState('');

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
				bsSize='large'
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
						treten und konkrete Änderungsvorschläge an den einzelnen Flächen selbt
						hinterlegen.
					</p>
					<p style={{ textAlign: 'center' }}>
						<div style={{ fontSize: '20px' }}>
							<strong>Änderungsmodus: </strong>
							<Toggle
								onClick={() => {
									if (mode === 'cr') {
										setMode('cr_off');
									} else {
										setMode('cr');
									}
								}}
								on={'Ein'}
								off={'Aus'}
								offstyle='danger'
								onstyle='success'
								active={mode === 'cr'}
								style={{ padding: 10 }}
							/>
						</div>
					</p>
					<p>
						Hier können Sie gewünschte Änderungen eintragen, belegen und an uns
						übermitteln. Bitte beachten Sie, dass eine Nachweispflicht besteht, wenn
						Flächen nicht in den Kanal entwässern. Die nachfolgende Kommunikation ist
						kein Chat. Eine Antwort wird nicht immer zeitnah erfolgen.
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
								value={msgTextValue}
								setValue={setMsgTextValue}
								setDraft={(draftText) => {
									console.log('draftText', draftText);
									const msg = {
										typ: 'CITIZEN',
										timestamp: Date.now(),
										nachricht: draftText,
										draft: true
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
								{documents.map((doc) => {
									return <DocPanel doc={doc} />;
								})}
							</div>
						</Panel>
					</Accordion>{' '}
				</Modal.Body>

				<Modal.Footer>
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
										Bitte beachten Sie, dass die Änderungswünsche und Ihre
										Anmerkungen und Ihre hochgeladenen Dokumente erst für den
										Sachbearbeiter sichtbar sind wenn sie die Änderungen
										eingereicht haben.
									</p>
									<p>
										Sollten sich nach Abschluss der Bearbeitung Änderungen
										gegenüber der bisherigen Gebührenerhebung ergeben, erhalten
										Sie einen Änderungsbescheid durch das Steueramt. Eine
										Veranlagung findet ggf. rückwirkend ab dem Datum an dem die
										Änderung feststellbar ist, aber längsten das laufende und
										die 4 vorhergehenden Jahre, statt.
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
								<td width='150%' style={{ paddingRight: 10 }}>
									<Button
										id='cmdCloseModalApplicationMenu'
										bsStyle='warning'
										type='submit'
										onClick={close}
									>
										Schließen (es gehen kein Änderungen verloren)
									</Button>
								</td>
								<td>
									<ClickNHold
										time={2} // Time to keep pressing. Default is 2
										onStart={() => {}} // Start callback
										onClickNHold={() => {}} //Timeout callback
										onEnd={() => {}}
									>
										<Button bsStyle='success' className='fillButton'>
											<Icon name='arrow-circle-right' /> gedrückt halten um
											Änderungswünsche einzureichen
										</Button>
									</ClickNHold>
								</td>
							</tr>
						</tbody>
					</table>
				</Modal.Footer>
			</Modal>
		);
	} else {
		return null;
	}
};
export default CR00;
