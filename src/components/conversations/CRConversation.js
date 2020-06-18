import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Message from './InternalMessage';
import SystemMessage from './SystemMessage';
import DateTimeMessage from './DateTimeMessage';
import ClerkMessage from './InternalMessage';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Documents from './Documents';
// Since this component is simple and static, there's no parent container for it.
const Comp = ({
	messages = [],
	userMap = {
		verdis: { name: 'VerDIS-Online', color: '#006D71' },
		SteinbacherD102: { name: 'Dirk Steinbacher', color: '#006D71' },
		citizen: {},
		system: {}
	},
	width,
	background,
	hiseSystemMessages = false
}) => {
	const sMsgs = messages.sort((a, b) => a.timestamp - b.timestamp);

	const sMsgsWithWelcomeMessage = [];
	sMsgsWithWelcomeMessage.push({
		typ: 'CLERK',
		timestamp: 0,
		name: 'verdis',
		nachricht:
			'Sehr geehrte*r Nutzer*in, hier haben Sie die Möglichkeit Änderungen an Ihren Flächen zu begründen und allgemeine Anmerkungen sowie Belege hinzuzufügen.'
	});
	sMsgsWithWelcomeMessage.push(...sMsgs);

	return (
		<div>
			{sMsgsWithWelcomeMessage.map((msg, index) => {
				switch (msg.typ) {
					case 'CLERK': {
						let sender;
						const mappedSender = userMap[msg.name];
						if (mappedSender !== undefined) {
							sender = mappedSender.name;
						} else {
							sender = msg.name;
						}

						return (
							<Message
								key={'CLERK.Message.' + index}
								msg={msg.nachricht}
								from={sender}
							/>
						);
					}
					case 'CITIZEN': {
						let background = '#FDC65399';

						if (msg.draft === true) {
							background = '#FDC65333';
						}
						return (
							<div key={'CITIZEN.div.' + index}>
								{msg.nachricht != undefined &&
								msg.nachricht.trim() !== '' && (
									<Message
										key={'CITIZEN.Message.' + index}
										msg={msg.nachricht}
										background={background}
										alignment='right'
									/>
								)}

								{msg.anhang !== undefined &&
								msg.anhang.length !== undefined &&
								msg.anhang.length > 0 && (
									<Message
										key={'Attachment.Message'}
										msg={
											<div>
												<Documents
													docs={msg.anhang || []}
													readOnly={true}
													embedded={true}
													margin='2px'
												/>
											</div>
										}
										background={background}
										alignment='right'
										margin={-1}
										padding={5}
										width={'fit-content'}
									/>
								)}
								{/* {msg.anhang !== undefined &&
									msg.anhang.length !== undefined &&
									msg.anhang.length > 0 &&
									msg.anhang.map((anhang, index) => {
										return (
											<Message
												key={'Message.' + anhang.uuid}
												msg={
													<div>
														<a style={{ color: 'black' }} href=''>
															<FontAwesomeIcon icon={faFilePdf} />
															<span> {anhang.name}</span>
														</a>
													</div>
												}
												background={background}
												alignment='right'
												margin={-1}
												padding={5}
												width={'fit-content'}
											/>
										);
									})} */}
							</div>
						);
					}

					case 'SYSTEM':
						if (hiseSystemMessages === false) {
							return (
								<SystemMessage
									key={'SYSTEM.SystemMessage.' + index}
									msg={systemmessage(msg.nachrichtenParameter)}
								/>
							);
						} else {
							return undefined;
						}
					default:
						break;
				}
				return <div key={'FALLBACK.pure.' + index}>{msg.nachricht}</div>;
			})}
		</div>
	);
};

const systemmessage = (sysMsgConf) => {
	if (sysMsgConf.type !== undefined) {
		switch (sysMsgConf.type) {
			case 'CHANGED':
				return `Ihr Sachbearbeiter hat die Fläche ${sysMsgConf.flaeche} geändert.`;
			case 'REJECTED':
				return `Ihr Sachbearbeiter hat Änderungen an der Fläche ${sysMsgConf.flaeche} abgelehnt.`;
			case 'STATUS': {
				switch (sysMsgConf.status) {
					case 'NONE':
					case 'FINISHED':
						return 'Ihr Sachbearbeiter hat die Bearbeitung abgeschlossen.';
					case 'PROCESSING':
						return 'Ihr Sachbearbeiter hat die Bearbeitung aufgenommen.';
				}
			}
		}
	}

	return 'Fehlerhafte Systemnachricht:' + JSON.stringify(sysMsgConf);
};

export default Comp;
