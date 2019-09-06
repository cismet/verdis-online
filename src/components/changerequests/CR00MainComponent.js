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
import { ChatFeed, Message } from 'react-chat-ui';
import FlaechenPanel from '../FlaechenPanel';
import { MessageBox } from 'react-chat-elements';

const CR = {
	kassenzeichen: 60004629,
	flaechen: {
		'5': {
			groesse: 12,
			pruefung: {
				status: 'REJECTED',
				von: 'test',
				timestamp: 1566915257854,
				next: {
					status: 'ACCEPTED',
					von: 'test',
					timestamp: 1566915257858
				}
			}
		}
	},
	nachrichten: {
		buerger: {},
		sachbearbeiter: {
			nachricht: 'Hallo Bürger. Wenn etwas nicht stimmt, dann ändere es einfach ;-)',
			timestamp: 1566915257854,
			bubbleStyles: {
				chatbubble: {
					background: 'red'
				}
			}
		},
		next: {
			buerger: {
				nachricht: 'Da passt was nicht weil isso, siehe lustiges pdf !',
				timestamp: 1566915257744,
				anhang: 'http://meine.domain.de/lustiges.pdf'
			},
			sachbearbeiter: {
				nachricht: 'Konnte nichts feststellen, alles in Ordnung.',
				timestamp: 1566915257854
			},
			next: {
				buerger: {
					nachricht: 'Oh, falsches PDF, siehe richtiges pdf.',
					timestamp: 1566915257858,
					anhang: 'http://meine.domain.de/richtiges.pdf'
				},
				sachbearbeiter: {
					nachricht: 'Ach so, verstehe. Alles Klar !',
					timestamp: 1566915257858
				},
				next: {
					buerger: {
						nachricht: 'Geht doch, danke.',
						timestamp: 1566915257858
					}
				}
			}
		}
	}
};
const demo = [
	new Message({
		id: 1,
		message: <div>Hallo Bürger. Wenn etwas nicht stimmt, dann ändere es einfach.</div>,
		senderName: 'VerDIS-online'
	}), // Gray bubble
	new Message({ id: 0, message: 'Da passt was nicht weil isso, siehe lustiges pdf!' }),
	new Message({
		id: 0,
		message: (
			<a style={{ color: '#ffffff' }} href='https://meine.domain.de/lustiges.pdf'>
				<Icon name={'file'} /> lustiges.pdf
			</a>
		)
	}),

	new Message({
		id: 1,
		message: 'Konnte nichts feststellen, alles in Ordnung.!',
		senderName: 'Dirk Steinbacher'
	}),
	new Message({
		id: 1,
		message:
			'❌ Ihr Änderungswunsch konnte leider nicht übernommen werden. Sollten dazu noch Rückfragen bestehen, antworten Sie einfach auf diese Nachricht.',
		senderName: 'VerDIS-online'
	}),
	new Message({ id: 0, message: 'Oh, falsches PDF, siehe richtiges pdf.' }),
	new Message({
		id: 0,
		message: (
			<a style={{ color: '#ffffff' }} href='https://meine.domain.de/richtiges.pdf'>
				<Icon name={'file'} /> richtiges.pdf
			</a>
		)
	}),
	new Message({
		id: 1,
		message: 'Ach so, verstehe. Alles Klar!',
		senderName: 'Dirk Steinbacher'
	}),
	new Message({ id: 0, message: 'Geht doch, danke.' })
];
const CR00 = ({ visible, height, showChangeRequestMenu }) => {
	const modalBodyStyle = {
		overflowY: 'auto',
		overflowX: 'hidden',
		maxHeight: height - 200
	};
	const close = () => {
		showChangeRequestMenu(false);
	};

	const [ messages, setMessages ] = useState(demo);
	console.log('useState', useState);

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
					Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen
					Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue
					mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie
					die meine.
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
					<Panel header={'Ihre Kommunikation '} eventKey={'sectionKey0'} bsStyle={'info'}>
						<ChatFeed
							messages={messages} // Boolean: list of message objects
							isTyping={false} // Boolean: is the recipient typing
							hasInputField={false} // Boolean: use our input, or use your own
							showSenderName={true} // show the name of the user who sent the message
							bubblesCentered={true} //Boolean should the bubbles be centered in the feed?
							// JSON: Custom bubble styles
							bubbleStyles={{
								text: {
									fontSize: 14
								},
								chatbubble: {
									borderRadius: 20,
									padding: 10
								}
							}}
						/>
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
						header={'Ihre Änderungsvorschläge (3)'}
						eventKey={'sectionKey1'}
						bsStyle={'warning'}
					>
						<table style={{ border: '1px', width: '100%' }}>
							<tbody>
								<tr>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
									<td
										style={{
											textAlign: 'center',
											padding: '20px',
											paddingBottom: '2px'
										}}
									>
										<h1>➡️</h1>
									</td>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
								</tr>{' '}
								<tr>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
									<td
										style={{
											textAlign: 'center',
											padding: '20px',
											paddingBottom: '2px'
										}}
									>
										<h1>➡️</h1>
									</td>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
								</tr>{' '}
								<tr>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
									<td
										style={{
											textAlign: 'center',
											padding: '20px',
											paddingBottom: '2px'
										}}
									>
										<h1>➡️</h1>
									</td>
									<td style={{ padding: '20px', paddingBottom: '2px' }}>
										<FlaechenPanel
											key={1}
											flaeche={{
												$self: '/VERDIS_GRUNDIS.FLAECHE/589226',
												id: 589226,
												flaecheninfo: {
													$self: '/VERDIS_GRUNDIS.FLAECHENINFO/587951',
													id: 587951,
													groesse_aus_grafik: 1439,
													groesse_korrektur: 1439,
													flaechenart: {
														$self: '/VERDIS_GRUNDIS.FLAECHENART/1',
														id: 1,
														art: 'Dachfläche',
														art_abkuerzung: 'DF'
													},
													anschlussgrad: {
														$self: '/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1',
														id: 1,
														grad: 'Am Kanal angeschlossen',
														grad_abkuerzung: 'angeschl.'
													},
													geometrie: {
														$self: '/VERDIS_GRUNDIS.GEOM/645327',
														geo_field:
															'SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))',
														id: 645327
													},
													beschreibung: {
														$self:
															'/VERDIS_GRUNDIS.FLAECHENBESCHREIBUNG/1',
														id: 1,
														beschreibung: 'Hauptdach',
														dachflaeche: true
													},
													nachgewiesen: null
												},
												anteil: null,
												flaechenbezeichnung: '1',
												bemerkung: null,
												datum_erfassung: '2019-05-06',
												datum_veranlagung: '03/01'
											}}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</Panel>
				</Accordion>
				<Accordion
					key={'sectionKey'}
					name={'sectionKey'}
					style={{ marginBottom: 6 }}
					defaultActiveKey={'applicationMenuActiveKey' || 'sectionKey'}
					onSelect={() => {
						// if (applicationMenuActiveKey === sectionKey) {
						//   setApplicationMenuActiveKey("none");
						// } else {
						//   setApplicationMenuActiveKey(sectionKey);
						// }
					}}
				>
					<Panel
						header={'Ihre Dokumente (2)'}
						eventKey={'sectionKey'}
						bsStyle={'danger'}
					/>
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
									Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes.
									Wer würde ihm schon folgen, spät in der Nacht und dazu noch in
									dieser engen Gasse mitten im übel beleumundeten Hafenviertel?
									Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit
									der Beute verschwinden wollte!{' '}
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
};
export default CR00;
