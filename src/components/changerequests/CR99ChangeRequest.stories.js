import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CRFlaechendialog from './CR50Flaechendialog';
import { f0, f1, f2 } from './CR99ChangeRequest.stories.data';

const cr = {
	groesse: 12,
	flaechenart: {
		art: 'Dachfläche',
		art_abkuerzung: 'DF'
	},
	anschlussgrad: {
		grad: 'Am Kanal angeschlossen',
		grad_abkuerzung: 'angeschl.'
	},
	pruefung: {
		groesse: {
			value: 12,
			von: 'test',
			timestamp: 47110815
		},
		flaechenart: {
			value: {
				art: 'Dachfläche',
				art_abkuerzung: 'DF'
			},
			von: 'test',
			timestamp: 47110815
		},
		anschlussgrad: {
			value: {
				grad: 'Am Kanal angeschlossen',
				grad_abkuerzung: 'angeschl.'
			},
			von: 'test',
			timestamp: 47110815
		}
	}
};

storiesOf('ChangeRequest Stories', module)
	// .addDecorator(withInfo) // At your stories directly.
	.add('CR Flaechendialog with every attr changed and accepeted', () =>
		React.createElement(() => {
			const [ flaechenCR, setFlaechenCR ] = useState(cr);

			return (
				<div
					styleX={{
						width: 250,
						margin: 100
					}}
				>
					<CRFlaechendialog
						flaeche={f0}
						flaechenCR={flaechenCR}
						setFlaechenCR={setFlaechenCR}
						documents={[
							{
								name: 'Versickerungsgenehmigung.pdf',
								uuid: 'akdjsfhjldsfghlkasdjhfjlkhdfjkl384297'
							}
						]}
						closeFlaechenCR={action('closeFlaechenCR')}
						showChangeRequestMenu={action('showChangeRequestMenu')}
						visible={true}
						height={900}
					/>
				</div>
			);
		})
	)
	.add('CR Flaechendialog with every attr changed and rejected', () =>
		React.createElement(() => {
			const [ flaechenCR, setFlaechenCR ] = useState({
				groesse: 1430,
				flaechenart: {
					art: 'Gründachfläche',
					art_abkuerzung: 'GDF'
				},
				anschlussgrad: {
					grad: 'versickernd',
					grad_abkuerzung: 'vers.'
				},
				pruefung: {
					groesse: {
						value: 1430,
						von: 'test',
						timestamp: 47110815
					},
					flaechenart: {
						value: {
							art: 'Gründachfläche',
							art_abkuerzung: 'GDF'
						},
						von: 'test',
						timestamp: 47110815
					},
					anschlussgrad: {
						value: {
							grad: 'versickernd',
							grad_abkuerzung: 'vers.'
						},
						von: 'test',
						timestamp: 47110815
					}
				}
			});

			return (
				<div
					styleX={{
						width: 250,
						margin: 100
					}}
				>
					<CRFlaechendialog
						flaeche={f1}
						flaechenCR={flaechenCR}
						setFlaechenCR={setFlaechenCR}
						documents={[
							{
								name: 'Versickerungsgenehmigung.pdf',
								uuid: 'akdjsfhjldsfghlkasdjhfjlkhdfjkl384297'
							}
						]}
						closeFlaechenCR={action('closeFlaechenCR')}
						showChangeRequestMenu={action('showChangeRequestMenu')}
						visible={true}
						height={900}
					/>
				</div>
			);
		})
	)
	.add('CR Flaechendialog with one attr changed (pending)', () =>
		React.createElement(() => {
			const [ flaechenCR, setFlaechenCR ] = useState({
				groesse: 1430
			});

			return (
				<div
					styleX={{
						width: 250,
						margin: 100
					}}
				>
					<CRFlaechendialog
						flaeche={f1}
						flaechenCR={flaechenCR}
						setFlaechenCR={setFlaechenCR}
						documents={[
							{
								name: 'Versickerungsgenehmigung.pdf',
								uuid: 'akdjsfhjldsfghlkasdjhfjlkhdfjkl384297'
							}
						]}
						closeFlaechenCR={action('closeFlaechenCR')}
						showChangeRequestMenu={action('showChangeRequestMenu')}
						visible={true}
						height={900}
					/>
				</div>
			);
		})
	);
