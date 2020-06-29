import React from 'react';
import { Link } from 'react-scroll';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';

const Component = ({
	applicationMenuActiveKey,
	setApplicationMenuActiveKey,
	showOnSeperatePage
}) => {
	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey='datenschutz'
			sectionTitle='Datenschutz'
			sectionBsStyle='danger'
			showOnSeperatePage={showOnSeperatePage}
			sectionContent={
				<div>
					<p>
						Die Informationen zum Datenschutz finden Sie in diesem{' '}
						<a href='/docs/102.23.-.Regengeld.pdf' target='_more'>
							Dokument
						</a>.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
