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

storiesOf('Conversation Stories', module)
	// .addDecorator(withInfo) // At your stories directly.
	.add('Simple UserMessage Bubble with different properies', () => (
		<div>
			<Message
				msg='Sehr geehrte*r Nutzer*in, hier haben Sie die Möglichkeit Änderungen an Ihren Flächen mitzuteilen. (width=400)'
				from='VerDIS-Online'
				width={400}
			/>

			<Message
				msg={`Fläche B ist kleiner. Sie ist nicht 40 m² groß, sondern nur 37 m². Sie ist auch nicht an dem Kanal angeschlossen, sondern besteht aus Ökopflaster und versickert. Siehe Foto. (width=default=75%, leftOrRight='right')`}
				from='Thorsten Hell'
				background='#FDC653'
				alignment='right'
			/>
			<Message
				msg='Sehr geehrte*r Nutzer*in, hier haben Sie die Möglichkeit Änderungen an Ihren Flächen mitzuteilen.'
				_from='VerDIS-Online'
				background='#FDC653'
			/>
		</div>
	))
	.add('Simple Conversation', () => (
		<div>
			<DateTimeMessage msg='02.07.2019' />
			<Message
				msg='Sehr geehrte*r Nutzer*in, hier haben Sie die Möglichkeit Änderungen an Ihren Flächen mitzuteilen.'
				from='VerDIS-Online'
			/>

			<Message
				msg='Fläche B ist kleiner. Sie ist nicht 40 m² groß, sondern nur 37 m². Sie ist auch nicht an dem Kanal angeschlossen, sondern besteht aus Ökopflaster und versickert. Siehe Foto.'
				_from='VerDIS-Online'
				background='#FDC65399'
				alignment='right'
			/>
			<Message
				msg={
					<div>
						<a style={{ color: 'black' }} href=''>
							<FontAwesomeIcon icon={faFilePdf} />
							<span> Ökopflasterfoto.pdf</span>
						</a>
					</div>
				}
				background='#FDC65399'
				alignment='right'
				margin={2}
				padding={5}
				width={'fit-content'}
			/>
			<DateTimeMessage msg='Gestern' />

			<Message
				msg='Die Änderung der Fläche werde ich übernehmen. Das Foto ist nicht ausreichend. Bitte übersenden Sie zusätzlich ein Foto der gesamten Fläche. Ökopflaster wird auch nicht als vollständig versickernd angesehen, sondern muss laut Satzung mit 70% seiner Flächen zur Gebührenerhebung herangezogen werden.'
				from='Dirk Steinbacher'
			/>
			<SystemMessage msg='Ihr Sachbearbeiter hat die Dachfläche 1 geändert.' />

			<Message
				msg='Hier das gewünschte Foto. Die Zufahrt entwässert seitlich in die Beete.'
				_from='VerDIS-Online'
				background='#FDC65399'
				alignment='right'
			/>
			<Message
				msg={
					<div>
						<a style={{ color: 'black' }} href=''>
							<FontAwesomeIcon icon={faFilePdf} />
							<span> Foto2.pdf</span>
						</a>
					</div>
				}
				background='#FDC65399'
				alignment='right'
				margin={2}
				padding={5}
				width={'fit-content'}
			/>
			<Message
				msg='Auf dem 2ten Foto sind Rasenkantensteine und ein Gully zu erkennen. Aus diesem Grund muss ich für diese Fläche 24 m² (70% von 37 m²) zur Veranlagung an das Steueramt weitergeben.'
				from='Dirk Steinbacher'
			/>
			<SystemMessage msg='Ihr Sachbearbeiter hat die Dachfläche 1 geändert.' />
			<DateTimeMessage msg='Heute' />
			<Message
				msg='So wird eine Nachricht visualisiert, die noch nicht abgesschickt ist.'
				_from='VerDIS-Online'
				background='#FDC65333'
				alignment='right'
			/>
		</div>
	));
