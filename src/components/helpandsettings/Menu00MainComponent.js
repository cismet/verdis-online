import React from 'react';
import Introduction from './Menu05Introduction';
import Datengrundlage from './Menu10Datengrundlagen';
import MeinKassenzeichen from './Menu20MeinKassenzeichen';
import Kartenhintergruende from './Menu30Kartenhintergruende';
import Anleitung from './Menu40Anleitung';
import FAQs from './Menu50FAQ';
import Datenschutz from './Menu60Datenschutz';

import GenericModalApplicationMenu from '../commons/GenericModalApplicationMenu';
import Footer from './Menu99Footer';

const ModalHelpAndInfo = ({
	showApplicationMenu,
	applicationMenuActiveKey,
	setApplicationMenuActiveKey,
	height,
	applicationMenuVisible,
	selectedBackgroundIndex,
	backgrounds,
	setBackgroundIndex
}) => {
	const showModalMenu = (section) => {
		showApplicationMenu(true);
		setApplicationMenuActiveKey(section);
	};
	return (
		<GenericModalApplicationMenu
			showApplicationMenu={showApplicationMenu}
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			height={height}
			applicationMenuVisible={applicationMenuVisible}
			menuIntroduction={<Introduction />}
			menuIcon='info'
			menuTitle='Kompaktanleitung und Hintergrundinformationen'
			menuSections={[
				<Datengrundlage
					key='Datengrundlage'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
				/>,
				<MeinKassenzeichen
					key='MeinKassenzeichen'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
				/>,
				<Kartenhintergruende
					key='Kartenhintergruende'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
					selectedBackgroundIndex={selectedBackgroundIndex}
					backgrounds={backgrounds}
					setBackgroundIndex={setBackgroundIndex}
				/>,
				<Anleitung
					key='Anleitung'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
				/>,
				<FAQs
					key='FAQs'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
				/>,
				<Datenschutz
					key='Datenschutz'
					applicationMenuActiveKey={applicationMenuActiveKey}
					setApplicationMenuActiveKey={setApplicationMenuActiveKey}
					showModalMenu={showModalMenu}
				/>
			]}
			menuFooter={<Footer showModalMenu={showModalMenu} />}
		/>
	);
};
export default ModalHelpAndInfo;
