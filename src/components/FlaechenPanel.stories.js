import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import FlaechenPanel from './FlaechenPanel';
import { f0, f1, f2 } from './FlaechenPanel.stories.data';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import Toggle from 'react-bootstrap-toggle';

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
			<FlaechenPanel key={1} flaeche={f1} selected />
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
			<FlaechenPanel key={1} editmode={true} flaeche={f1} selected />
			<FlaechenPanel key={2} editmode={true} flaeche={f2} />
		</div>
	))
	.add('Simple Flaechenpanels with ChangeRequests', () =>
		React.createElement(() => {
			return (
				<div
					style={{
						width: 250,
						margin: 100
					}}
				>
					<FlaechenPanel
						display={'cr'}
						key={0}
						editmode={true}
						flaeche={f0}
						changerequest={{
							groesse: 1400
						}}
					/>
					<FlaechenPanel
						display={'cr'}
						key={1}
						editmode={true}
						selected
						flaeche={f1}
						changerequest={{
							anschlussgrad: {
								grad: 'Versickernd',
								grad_abkuerzung: 'vers.'
							}
						}}
					/>
					<FlaechenPanel
						key={2}
						editmode={true}
						display={'cr'}
						changerequest={{
							flaechenart: {
								art: 'Gründachfläche',
								art_abkuerzung: 'GDF'
							}
						}}
						flaeche={f2}
					/>
				</div>
			);
		})
	)
	.add('Simple Flaechenpanels with ChangeRequests and dynamic showChanges Toggle', () =>
		React.createElement(() => {
			const [ display, setDisplay ] = React.useState('cr');
			return (
				<div
					style={{
						width: 250,
						margin: 100
					}}
				>
					<div style={{ textAlign: 'right', marginBottom: 50 }}>
						Änderungen anzeigen{'    '}
						<Toggle
							onClick={() => {
								if (display === 'cr') {
									setDisplay('hideCR');
								} else {
									setDisplay('cr');
								}
							}}
							on={'ON'}
							off={'OFF'}
							size='xs'
							offstyle='danger'
							active={display === 'cr'}
							style={{ padding: 10 }}
						/>
					</div>

					<FlaechenPanel
						display={display}
						key={0}
						editmode={true}
						flaeche={f0}
						changerequest={{
							groesse: 1400
						}}
					/>
					<FlaechenPanel
						display={display}
						key={1}
						editmode={true}
						selected
						flaeche={f1}
						changerequest={{
							anschlussgradX: {
								grad: 'Versickernd',
								grad_abkuerzung: 'vers.'
							}
						}}
					/>
					<FlaechenPanel
						key={2}
						editmode={true}
						display={display}
						changerequest={{
							flaechenart: {
								art: 'Gründachfläche',
								art_abkuerzung: 'GDF'
							}
						}}
						flaeche={f2}
					/>
					<FlaechenPanel
						key={22}
						editmode={true}
						display={display}
						changerequest={{
							groesse: 1400,
							anschlussgrad: {
								grad: 'Versickernd',
								grad_abkuerzung: 'vers.'
							},
							flaechenart: {
								art: 'Gründachfläche',
								art_abkuerzung: 'GDF'
							}
						}}
						flaeche={f2}
					/>
				</div>
			);
		})
	);
