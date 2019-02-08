import React from 'react';
import { Link } from 'react-scroll';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';

const Component = ({ applicationMenuActiveKey, setApplicationMenuActiveKey }) => {
	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey="datengrundlage"
			sectionTitle="Grundlagen der Datenerhebung"
			sectionBsStyle="warning"
			sectionContent={
				<div>
					<p>
						Die Erhebung der Flächen zur Berechnung der Abwasserbeseitigungsgebühr Niederschlagswasser, kurz
						Regengeld, erfolgt auf Grundlage vorhandener Luftbilder und einem Vergleich mit dem, durch
						Vermessungen festgestellten Datenbestand des Liegenschaftskatasters. Die rechtliche Basis bilden
						die{' '}
						<a href="https://www.wuppertal.de/rathaus-buergerservice/verwaltung/politik/stadtrecht-dokumente/7-10.pdf">
							Abwasserbeseitigungssatzung
						</a>
						und die Satzung zur Erhebung von Anschlussbeiträgen, Abwassergebühren und Kostenersatz.
					</p>
					<p>
						Ermittelt werden die Dachflächen (bebaute Flächen mit Dachüberständen) und versiegelten Flächen
						(alle Flächen die keine natürliche Erdoberfläche haben). Die Stadt Wuppertal berücksichtigt,
						obwohl rechtlich nicht zwingend erforderlich, Bauausführungen, die die Abflusswirksamkeit
						reduzieren. Zu diesen gehören Gründächer und Ökopflaster bei denen die Flächen reduziert für die
						Gebührenerhebung herangezogen werden.
					</p>
					<p>
						Da aus den Luftbildern nicht immer eine eindeutige Festlegung der Flächen erfolgen kann wurde,
						bei der Einführung des derzeitigen Gebührenmaßstabs, in der Satzung die Pflicht des Eigentümers
						Änderungen mitzuteilen festgelegt und beschlossen die Eigentümer bei einer Erfassung zu
						beteiligen.
					</p>
					<p>
						Bei der Beteiligung von Eigentümern werden die Flächen vorab an Hand von vorliegenden
						Informationen eingeschätzt. Zu diesen Informationen gehören das vorhanden sein öffentlicher und
						tlw. auch privater Kanäle, die Geländeneigung, bereits vorliegende Entwässerungserlaubnisse bzw.
						Befreiungen von der Anschluss- und Benutzungspflicht. Das Ergebnis der Einschätzung (die
						ermittelten Summen der Flächen) wird bei der Beteiligung der Eigentümer mitgeteilt.
					</p>
					<p>
						Erfolgt von einem Eigentümer keine Antwort werden die Flächen wie eingeschätzt zur
						Gebührenveranlagung an das Steueramt weitergegeben.
					</p>
					<p>
						Wurde die Fertigstellung von Flächen nicht durch die Eigentümer mitgeteilt findet eine rechtlich
						gesicherte, rückwirkende Heranziehung der Flächen statt. Die rückwirkende Veranlagung kann bis
						zu 4 Jahre vor dem laufenden Jahr, in besonderen Fällen 10 Jahre vor dem laufenden Jahr,
						vorgenommen werden
					</p>
					<p>
						Bei der Gebühr handelt es sich um eine Umlage aller durch das Regenwasser entstandenen Kosten.
						Da die angeschlossenen Flächen auch als Grundlage zur Berechnung der Kanaldimensionierung dienen
						ensteht hier bei falschen Angaben ein doppelter Schaden für die Allgemeinheit (die Gebühr für
						die anderen Gebührenzahler steigt; Kanäle genügen nicht und laufen über). Aus diesen Gründen ist
						immer ein Nachweis der Entwässerung erforderlich wenn Flächen nicht in den Kanal einleiten.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
