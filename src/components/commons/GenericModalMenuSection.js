import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

const GenericModalMenuSection = ({
	sectionKey,
	sectionTitle,
	sectionBsStyle,
	sectionContent,
	applicationMenuActiveKey,
	setApplicationMenuActiveKey,
	showOnSeperatePage = false
}) => {
	return (
		<Accordion
			key={sectionKey}
			name={sectionKey}
			style={{ marginBottom: 6 }}
			defaultActiveKey={
				showOnSeperatePage === false ? applicationMenuActiveKey || sectionKey : sectionKey
			}
			onSelect={() => {
				if (applicationMenuActiveKey === sectionKey) {
					setApplicationMenuActiveKey('none');
				} else {
					setApplicationMenuActiveKey(sectionKey);
				}
			}}
		>
			<Panel header={sectionTitle} eventKey={sectionKey} bsStyle={sectionBsStyle}>
				{sectionContent}
			</Panel>
		</Accordion>
	);
};
export default GenericModalMenuSection;
