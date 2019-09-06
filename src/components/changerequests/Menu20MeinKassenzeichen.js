import React from 'react';
import { Link } from 'react-scroll';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';

const Component = ({ applicationMenuActiveKey, setApplicationMenuActiveKey }) => {
	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey="meinKassenzeichen"
			sectionTitle="Mein Kassenzeichen"
			sectionBsStyle="warning"
			sectionContent={
				<div>
					<p>
						In dieser ersten Ausbaustufe können Sie hier die Flächen sehen, die für dieses Kassenzeichen
						erfasst und Ihnen auch schriftlich mitgeteilt wurden. Die Flächenart und ob die Flächen an den
						Kanal angeschlossen sind erfolgt nach einer ersten Einschätzung.
					</p>
					<p>
						Der Zugriff ist zeitlich begrenzt. Sollten Sie Eigentümer von mehr als einem Grundstück sein und
						auch andere Kassenzeichen einsehen wollen, benötigen Sie weitere Zugriffscodes, die Sie unter
						der im Anschreiben angegebenen Email-Adresse anfordern können. Aus datenschutzrechtlichen
						Gründen erhalten Sie weitere Zugriffscodes ausschließlich per Post. Benachbarte Flächen, die je
						nach ausgewählter Karte in einem helleren grau Ton dargestellt sind, stellen "keine"
						benachbarten versiegelten Flächen oder Dachflächen dar sondern sind aus den Karten des
						Liegenschaftskatasters abgeleitet. </p>
					<p>Mit zukünftigen Ausbaustufen soll die Möglichkeit geschaffen
						werden, Änderungen ihrer Flächen auch auf diesem Weg zu übermitteln. Derzeit ist es erforderlich
						den zugesandten Flächenerfassungsbogen auszufüllen und zurückzusenden. Bitte vergessen Sie nicht
						die Nachweise, wenn eine Fläche anders bewertet werden soll als angegeben. </p>
					<p>Gerne können Sie den
						Flächenerfassungsbogen und Nachweise als Mail übersenden. Bitte denken Sie hierbei an den
						Datenschutz und die mögliche Größenbeschränkung der Mailpostfächer.
					</p>

					<p>
						In allen hier bereitgestellten Texten wird zur Vereinfachung der Lesbarkeit immer der aus dem
						Grundbuch stammende Begriff "Eigentümer" verwendet. Selbstverständlich sind immer auch alle
						Eigentümerinnen gemeint.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
