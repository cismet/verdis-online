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
	background
}) => {
	console.log('messages', messages);

	const sMsgs = messages.sort((a, b) => a.timestamp - b.timestamp);

	return (
		<div>
			{sMsgs.map((msg, index) => {
				switch (msg.typ) {
					case 'CLERK': {
						let sender;
						const mappedSender = userMap[msg.name];
						if (mappedSender !== undefined) {
							sender = mappedSender.name;
						} else {
							sender = msg.name;
						}

						return <Message key={index} msg={msg.nachricht} from={sender} />;
					}
					case 'CITIZEN': {
						let background = '#FDC65399';

						if (msg.draft === true) {
							background = '#FDC65333';
						}
						return (
							<div>
								<Message
									key={index}
									msg={msg.nachricht}
									background={background}
									alignment='right'
								/>
								{msg.anhang !== undefined && (
									<Message
										msg={
											<div>
												<a style={{ color: 'black' }} href=''>
													<FontAwesomeIcon icon={faFilePdf} />
													<span> {msg.anhang.name}</span>
												</a>
											</div>
										}
										background={background}
										alignment='right'
										margin={-1}
										padding={5}
										width={'fit-content'}
									/>
								)}
							</div>
						);
					}

					case 'SYSTEM':
						return <SystemMessage msg={eval(msg.nachricht)} />;
					default:
						break;
				}
				return <div>{msg.nachricht}</div>;
			})}
		</div>
	);
};

const SYSTEMMESSAGE = (sysMsgConf) => {
	if (sysMsgConf.type !== undefined) {
		switch (sysMsgConf.type) {
			case 'changed':
				return `Ihr Sachbearbeiter hat die ${sysMsgConf.flaechenart ||
					'Fläche'} ${sysMsgConf.flaeche} geändert.`;
		}
	}
	return 'Nix gemacht, kaputt gelacht. Bonanza.';
};

export default Comp;
