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
			sectionKey='datengrundlage'
			sectionTitle='Grundlagen der Datenerhebung'
			sectionBsStyle='warning'
			showOnSeperatePage={showOnSeperatePage}
			sectionContent={
				<div>
					<p>
						Die Erhebung der Flächen zur Berechnung der Abwasserbeseitigungsgebühr
						Niederschlagswasser, kurz Regengeld, erfolgt auf Grundlage vorhandener
						Luftbilder und einem Vergleich mit dem durch Vermessungen festgestellten
						Datenbestand des Liegenschaftskatasters. Die rechtliche Basis bilden die{' '}
						<a
							target='_satzung'
							href='https://www.wuppertal.de/rathaus-buergerservice/verwaltung/politik/stadtrecht-dokumente/7-10.pdf'
						>
							Abwasserbeseitigungssatzung
						</a>{' '}
						und die{' '}
						<a
							target='_satzung'
							href='https://www.wuppertal.de/rathaus-buergerservice/verwaltung/politik/stadtrecht-dokumente/7-11.pdf`'
						>
							Satzung zur Erhebung von Anschlussbeiträgen, Abwassergebühren
						</a>.
					</p>

					<p>
						Ermittelt werden die Dachflächen (bebaute Flächen mit Dachüberständen) und
						die versiegelten Flächen (alle Flächen, die keine natürliche Erdoberfläche
						wie Erde oder Wiese haben). Die Stadt Wuppertal berücksichtigt, obwohl
						rechtlich nicht zwingend erforderlich, Bauausführungen, die die
						Abflusswirksamkeit reduzieren. Zu diesen gehören Gründächer und Ökopflaster,
						bei denen die Flächen reduziert für die Gebührenerhebung herangezogen
						werden.
					</p>

					<p>
						Da aus den Luftbildern nicht immer eine eindeutige Festlegung der Flächen
						erfolgen kann, wurde bei der Einführung des derzeitigen Gebührenmaßstabs in
						der Satzung die Pflicht der Eigentümer*innen, Änderungen mitzuteilen
						festgelegt, und beschlossen, die Eigentümer*innen bei einer Erfassung zu
						beteiligen.
					</p>
					<p>
						Bei der Beteiligung werden die Flächen vorab an Hand von vorliegenden
						Informationen eingeschätzt. Zu diesen Informationen gehören das
						Vorhandensein öffentlicher und teilweise auch privater Kanäle, die
						Geländeneigung, bereits vorliegende Entwässerungserlaubnisse bzw.
						Befreiungen von der Anschluss- und Benutzungspflicht. Das Ergebnis der
						Einschätzung (die ermittelten Summen der Flächen) wird bei der Beteiligung
						den Eigentümer*innen mitgeteilt.
					</p>
					<p>
						Erfolgt auf die Beteiligung keine Antwort, werden die Flächen wie
						eingeschätzt zur Gebührenveranlagung an das Steueramt weitergegeben.
					</p>
					<p>
						Wurde die Fertigstellung von Flächen nicht durch die Eigentümer*innen
						mitgeteilt, findet eine rechtlich gesicherte, rückwirkende Heranziehung der
						Flächen statt. Die rückwirkende Veranlagung kann bis zu 4 Jahre vor dem
						laufenden Jahr, in besonderen Fällen 10 Jahre vor dem laufenden Jahr,
						vorgenommen werden
					</p>
					<p>
						Bei der Gebühr handelt es sich um eine Umlage aller durch das Regenwasser
						entstandenen Kosten. Da die angeschlossenen Flächen auch als Grundlage zur
						Berechnung der Kanaldimensionierung dienen, entsteht hier bei falschen
						Angaben ein doppelter Schaden für die Allgemeinheit (die Gebühr für die
						anderen Gebührenzahler steigt; Kanäle genügen nicht und laufen über). Aus
						diesen Gründen ist immer ein Nachweis der Entwässerung erforderlich, wenn
						Flächen nicht in den Kanal einleiten.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
