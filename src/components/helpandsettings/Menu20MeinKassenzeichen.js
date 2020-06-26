import React from 'react';
import { Link } from 'react-scroll';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';

const Component = ({ applicationMenuActiveKey, setApplicationMenuActiveKey }) => {
	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey='meinKassenzeichen'
			sectionTitle='Mein Kassenzeichen'
			sectionBsStyle='warning'
			sectionContent={
				<div>
					<p>
						Sie können hier die Flächen sehen, die für dieses Kassenzeichen erfasst und
						Ihnen ggf. auch schriftlich mitgeteilt wurden. Es werden alle Flächen
						dargestellt, unabhängig davon, ob sie zur Gebührenerhebung herangezogen
						werden oder nicht. Die Flächenart und ob die Flächen an den Kanal
						angeschlossen sind, erfolgte nach einer ersten Einschätzung.
					</p>
					<p>
						Der Zugriff ist zeitlich begrenzt. Sollten Sie Eigentümer*in von mehr als
						einem Grundstück sein und auch andere Kassenzeichen einsehen wollen,
						benötigen Sie weitere Zugriffscodes, die Sie unter der im Anschreiben
						angegebenen Email-Adresse anfordern können. Aus datenschutzrechtlichen
						Gründen erhalten Sie weitere Zugriffscodes per Post. Eine Versendung per
						Mail ist nur mit ausdrücklicher Zustimmung der Eigentümer*innen bzw. deren
						Bevollmächtigten möglich. Benachbarte Flächen, die je nach ausgewählter
						Karte in einem helleren grauen Ton dargestellt sind, stellen
						&quot;keine&quot; benachbarten versiegelten Flächen oder Dachflächen dar,
						sondern sind aus den Karten des Liegenschaftskatasters abgeleitet.
					</p>
					<p>
						Es besteht die Möglichkeit, Änderungswünsche an Ihren Flächen hier
						einzutragen und zu übermitteln. Eine Übersendung des Flächenerfassungsbogens
						ist dann nicht mehr erforderlich. Bitte vergessen Sie nicht die Nachweise,
						wenn eine Fläche anders bewertet werden soll als angegeben. Ohne
						entsprechenden Nachweis können Änderungen nicht übernommen werden.
					</p>
					<p>
						Die Möglichkeit, den Flächenerfassungsbogen und die erforderlichen Nachweise
						auf dem bisherigen Weg oder per Mail zu übersenden, bleibt erhalten. Bitte
						denken Sie hierbei an den Datenschutz und die mögliche Größenbeschränkung
						der Mailpostfächer.
					</p>
					<p>
						Die Nachweispflicht gilt natürlich auch, wenn Sie die Unterlagen per Post an
						uns übersenden.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
