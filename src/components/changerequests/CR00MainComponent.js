import React, { useState } from 'react';
import Introduction from './Menu05Introduction';
import Datengrundlage from './Menu10Datengrundlagen';
import MeinKassenzeichen from './Menu20MeinKassenzeichen';
import Kartenhintergruende from './Menu30Kartenhintergruende';
import Anleitung from './Menu40Anleitung';
import FAQs from './Menu50FAQ';
import Datenschutz from './Menu60Datenschutz';
import PropTypes from 'prop-types';
import { Modal, Button, Form, PanelGroup, Label, Panel, Accordion } from 'react-bootstrap';
import { Icon } from 'react-fa';
import { Link } from 'react-scroll';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';
import Footer from './Menu99Footer';
import FlaechenPanel from '../FlaechenPanel';
import CRConversation from '../conversations/CRConversation';
import FlexView from 'react-flexview';
import DocPanel from './CR20DocumentPanel';
const CR00 = ({ visible, height, kassenzeichen, showChangeRequestMenu }) => {
	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 200
	};
	const close = () => {
		showChangeRequestMenu(false);
	};

	const changerequests = kassenzeichen.changerequests;

	if (visible === true) {
		const changerequestBezeichnungsArray = Object.keys(changerequests.flaechen) || [];

		const origPanels = [];
		const crPanels = [];
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
							<CRConversation messages={kassenzeichen.changerequests.nachrichten} />
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
								(changerequests.documents.length > 0
									? ' (' + changerequests.documents.length + ')'
									: '')
							}
							eventKey={'sectionKey'}
							bsStyle={'danger'}
						>
							<div>
								{changerequests.documents.map((doc) => {
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
										Sollten sich nach Abschluss der Bearbeitung Änderungen
										gegenüber der bisherigen Gebührenerhebung ergeben erhalten
										Sie einen Änderungsbescheid durch das Steueramt. Eine
										Veranlagung findet ggf. rückwirkend ab dem Datum an dem die
										Änderung feststellbar ist aber längsten das laufende und die
										4 vorhergehenden Jahre statt.
									</p>
								</td>
								<td>
									<Button
										id='cmdCloseModalApplicationMenu'
										bsStyle='primary'
										type='submit'
										onClick={close}
									>
										Ok
									</Button>
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
