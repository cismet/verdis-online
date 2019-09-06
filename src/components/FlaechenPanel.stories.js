import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import FlaechenPanel from './FlaechenPanel';
import { f0, f1, f2 } from './FlaechenPanel.stories.data';

storiesOf('FlaechenPanel Stories', module)
	// .addDecorator(withInfo) // At your stories directly.
	.add('Simple Flaechenpanels', () => (
		<div
			style={{
				width: 250,
				margin: 100
			}}
		>
			<FlaechenPanel key={0} flaeche={f0} />
			<FlaechenPanel key={1} flaeche={f1} />
			<FlaechenPanel key={2} flaeche={f2} />
		</div>
	))
	.add('Simple Flaechenpanels in Editmode', () => (
		<div
			style={{
				width: 250,
				margin: 100
			}}
		>
			<FlaechenPanel key={0} editmode={true} flaeche={f0} />
			<FlaechenPanel key={1} editmode={true} flaeche={f1} />
			<FlaechenPanel key={2} editmode={true} flaeche={f2} />
		</div>
	))
	.add('Simple Flaechenpanels with ChangeRequests', () =>
		React.createElement(() => {
			const [ display, setDisplay ] = React.useState(5);
			return (
				<div
					style={{
						width: 250,
						margin: 100
					}}
				>
					<FlaechenPanel key={0} editmode={true} flaeche={f0} />
					<FlaechenPanel key={1} editmode={true} flaeche={f1} />
					<FlaechenPanel
						key={2}
						editmode={true}
						display={display}
						changerequest={{
							groesse: 1439,
							anteil: undefined,
							anschlussgrad: {
								grad: 'Am Kanal angeschlossen',
								grad_abkuerzung: 'angeschl.'
							},
							flaechenart: {
								art: 'Dachfläche',
								art_abkuerzung: 'DF'
							}
						}}
						flaeche={f2}
					/>
				</div>
			);
		})
	);
