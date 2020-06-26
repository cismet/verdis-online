import React from 'react';
import GenericModalMenuSection from '../commons/GenericModalMenuSection';
import { Icon } from 'react-fa';

const Component = ({ applicationMenuActiveKey, setApplicationMenuActiveKey }) => {
	return (
		<GenericModalMenuSection
			applicationMenuActiveKey={applicationMenuActiveKey}
			setApplicationMenuActiveKey={setApplicationMenuActiveKey}
			sectionKey='aenderungen'
			sectionTitle='Änderungen vornehmen und übermitteln'
			sectionBsStyle='success'
			sectionContent={
				<div>
					<p>
						<strong>Grundsätzliches</strong>
					</p>
					<p>
						Nach Aktivierung des Änderungsmodus erscheinen 4 gekennzeichnete Bereiche.
					</p>
					<ul>
						<li>
							Der Bereich „Ihre Kommunikation“ (blaue Kopfzeile und blau umrandet)
							bietet Ihnen die Möglichkeit, mit uns in Kontakt zu treten und
							Informationen weiterzugeben. Es handelt sich hier nicht um die
							Möglichkeit eines Chats. Eingänge werden nach ihrer Reihenfolge
							bearbeitet. Auf Grund des Arbeitsvolumens ist nicht immer eine zeitnahe
							Antwort möglich. Siehe &quot;Ihre Kommunikation“ das ist kein Satz
							(s.u.)
						</li>
						<li>
							Mit einer gelben Kopfzeile bzw. gelb umrandet ist der Bereich „Ihre
							Änderungsvorschläge“. Hier erscheinen erst dann Eintragungen, wenn an
							bestehenden Flächen Änderungen vorgenommen wurden. Siehe „Änderungen an
							bestehenden Flächen“.
						</li>
						<li>
							Die Farbe Grün kennzeichnet den Bereich &quot;Ihre Anmerkungen in der
							Karte&quot;. Hier sind die grafischen Änderungen aufgelistet, die Sie in
							der Karte vorgenommen haben. Siehe &quot;Grafische Änderung&quot;
						</li>
						<li>
							Mit roter Kennzeichnung ist der Bereich „Ihre Dokumente“ versehen. Hier
							werden Dokumente aufgeführt, die Sie entweder im Bereich der
							Kommunikation oder bei der Änderung einer Fläche hochgeladen haben.
						</li>
					</ul>
					<p>
						Die Änderungen, die Sie hier anbringen, werden im Kartenbild, in der
						Flächentabelle und dem Informationsdiagramm dargestellt, wenn der
						Änderungsmodus eingeschaltet ist. Verlassen Sie den Änderungsmodus, sehen
						Sie wieder die ursprünglichen Angaben. Eine direkte Auswirkung auf die
						Gebührenerhebung ergibt sich daraus nicht. Flächen müssen erst akzeptiert
						und zur Veranlagung weitergegeben werden.
					</p>
					<p>
						Alle Änderungen, Eintragungen oder Dokumente, die Sie hochladen, bleiben
						erhalten, auch wenn Sie den Änderungsmodus verlassen. Alle Informationen
						werden erst dann zur Bearbeitung an uns weitergegeben, wenn Sie von Ihnen
						eingereicht werden. Zum Einreichen klicken Sie bitte im Fenster
						&quot;Änderungswünsche und Kommentare&quot; am unteren Rand auf die orange
						Schaltfläche „Entsperren zum Einreichen“. Hierdurch werden Ihre Änderungen
						freigegeben Die Schaltfläche färbt sich grün, wenn die Angaben einer ersten
						Prüfung standgehalten haben, und der Text ändert sich in „Einreichen der
						Änderungswünsche“. Durch Betätigung dieser Schaltfläche werden Ihre Angaben
						und Dokument an uns übermittelt.
					</p>

					<p>
						<strong> Ihre Kommunikation</strong>
					</p>
					<p>
						Ihre Mitteilungen, automatische Systemmeldungen und Mitteilungen von uns
						werden hier abgebildet und farbig unterschieden. Ihre Mitteilungen können
						Sie in der grauen Eingabezeile am Ende des Felds eintragen. Sie werden nach
						Betätigung der Enter-Taste oder Anklicken des Pfeils rechts in der
						Eingabezeile hellgelb im Kommunikationsfenster dargestellt. Die Eingabe ist
						dann noch nicht an uns weitergegeben. Neben der Weitergabe von Text besteht
						hier auch die Möglichkeit, Nachweise wie Fotos oder Rechnungen durch Ziehen
						und Fallenlassen (drag and drop) hochzuladen. Es sind nur PDF- und
						Bilddateien zulässig. Ihre Dokumente erscheinen dann mit Ihrem Dateinamen in
						der Kommunikationsbox und sind ebenfalls hellgelb hinterlegt. Möchten Sie
						einen gemachten Eintrag wieder ändern, klicken Sie in das grau hinterlegte
						Feld. Anschließend können Sie durch die Betätigung der &quot;Pfleil nach
						oben&quot; Taste diesen Eintrag wieder aufrufen und ändern.
					</p>
					<p>
						Um Informationen an uns weiterzugeben, müssen sie erst entsperrt und
						eingereicht werden. Entsperren und Einreichen sollten Sie Ihre
						Änderungswünsche erst, wenn Sie die Bearbeitung abgeschlossen haben. Sobald
						Sie die Informationen eingereicht haben, werden Ihre Mitteilungen und ggf.
						Bilder mit einem dunkleren Gelbton hinterlegt. Änderungen sind dann nicht
						mehr möglich.
					</p>
					<p>
						Systemmeldungen werden automatisch generiert und werden nur grau hinterlegt
						dargestellt, wenn von Ihnen der Schalter &quot;Systemnachrichten
						einblenden&quot;, der sich rechts unterhalb des Ein/Aus- Schalters des
						Änderungsmodus befindet, auf &quot;Ein&quot; gestellt wurde. Eine dieser
						Meldungen könnte zum Beispiel sein: Ihr Sachbearbeiter hat die Fläche 1
						geändert.
					</p>
					<p>
						Gibt es Rückfragen oder Hinweise Ihres Ansprechpartners, so sind diese blau
						hinterlegt.
					</p>
					<p>
						Eine Reaktion kann leider nicht immer kurzfristig erfolgen. Es empfiehlt
						sich daher, eine Mailadresse in der Kommunikation einzutragen, über die wir
						Sie informieren können oder regelmäßig nachzusehen. Sind alle Flächen
						zwischen Ihnen und Ihrem Ansprechpartner*in abgestimmt, erhalten Sie nach
						ein bis zwei Wochen einen Gebührenänderungsbescheid.
					</p>

					<p>
						<strong>Änderungen an bestehenden Flächen</strong>
					</p>
					<p>
						Um Änderungen an einer Fläche vorzunehmen, klicken Sie bitte auf den
						Hintergrund neben dem Fenster „Änderungswünsche und Kommentare“. Der
						Hintergrund rückt nach vorne. Wählen Sie eine Fläche durch Anklicken in der
						Karte oder in der Auflistung auf der rechten Seite aus. Die ausgewählte
						Fläche wird sowohl in der Karte wie auch in der Auflistung blau umrandet
						dargestellt. Klicken Sie nun auf den Bleistift in der rechten oberen Ecke
						des blau umrandeten Felds der Auflistung. Es öffnet sich ein neues Fenster
						„Änderung der …….fläche …“. In diesem Fenster haben Sie die Möglichkeit, die
						Flächenart (z.B.: Dachfläche in Gründach), den Anschlussgrad (z.B.: von „An
						den Kanal angeschlossen“ auf „versickernd“) oder die Flächengröße zu ändern.
					</p>
					<p>
						ACHTUNG!!! Änderungen können grundsätzlich nur dann angenommen werden, wenn
						ein entsprechender Nachweis beigefügt wird. Flächen, die auf eine Messung
						eines öffentlich bestellten Vermessungsingenieurs basieren, können auch nur
						durch eine neuerliche Messung korrigiert werden.
					</p>
					<p>
						Unter dem Punkt „Ihre Dokumente“ (rot hinterlegt) haben Sie die Möglichkeit,
						Nachweise wie Fotos oder Rechnungen durch Ziehen und Fallenlassen (drag and
						drop) hochzuladen oder sehen ggf. Dokumente, die schon hochgeladen wurden.
						Wurde hier ein Nachweis neu abgelegt, erscheint er grau hinterlegt. In dem
						grauen Bereich befindet sich rechts ein „X&quot;, mit dem dieser Upload
						wieder gelöscht werden kann. Sind alle Änderungen an dieser Fläche
						vollzogen, wählen Sie bitte die Schaltfläche „Übernehmen“ aus. Die
						Änderungen werden in die Übersicht übernommen und das Fenster geschlossen.
						Durch Auswählen der Schaltfläche &quot;Abbrechen&quot; werden alle
						Änderungen verworfen und das Fenster geschlossen. Auf diese Art können Sie
						alle Flächen bearbeiten, bei denen Sie eine Änderung anbringen möchten.
						Möchten Sie zu den Flächen Kommentare abgeben, können Sie durch erneutes
						Auswählen der Schaltfläche &quot;Änderungswünsche&quot; dorthin zurückkehren
						und eine entsprechende Eingabe tätigen.
					</p>
					<p>
						Damit Flächen an uns übermittelt werden, müssen sie eingereicht werden. Das
						sollte geschehen, wenn Sie alle Änderungswünsche vorgenommen haben.
					</p>
					<p>
						Sind Sie der Meinung, dass eine Fläche die falsche Form hat, ganz fehlt oder
						aufgeteilt werden sollte, nutzen Sie bitte die Symbole links im
						Kartenfenster unter dem Auswahlknopf für die Hintergrundkarte.
					</p>

					<p>
						<strong>
							Grafische Änderungen/Hinweise - Flächen anlegen, aufteilen oder deren
							Form verändern
						</strong>
					</p>
					<p>
						An den vorgegebenen Flächen können keine direkten Veränderungen vorgenommen
						werden. Es ist immer erforderlich eine neue Fläche, anzulegen und mit einem
						entsprechenden Kommentar zu versehen. Soll eine bestehende Fläche verändert
						werden, müssen Sie eine oder mehrere neue Flächen über der bestehenden
						erzeugen. Neue grafische Änderungen/Hinweise werden als Anmerkungen in der
						Flächenliste aufgenommen.
					</p>
					<p>
						<Icon name='draw-polygon' /> "Fläche anlegen": Durch Anklicken dieses
						Symbols wird es ermöglicht, eine Fläche anzulegen. Der Mauszeiger wird zu
						einem Kreuz, sobald Sie sich von der Schaltfläche fortbewegen. Klicken Sie
						nun einmal auf den ersten Punkt der Fläche, die Sie anlegen möchten und auf
						jeden weiteren Eckpunkt. Mit einem Doppelklick auf den letzten Eckpunkt
						schließt sich die Fläche. Die Eckpunkte werden als Quadrat angezeigt. Mittig
						zwischen 2 Eckpunkten wird ein Hilfspunkt angelegt, der es vereinfacht, die
						Fläche nachträglich zu verändern.
					</p>
					<p>
						Bewegen Sie sich mit dem Mauszeiger in die Nähe einer bestehenden Fläche,
						werden dort die Eckpunkte und Linien eingefangen. Es erscheint ein kleines
						Quadrat. Durch Anklicken wird an diesen Stellen ein Punkt erzeugt.
					</p>
					<p>
						Wenn Punkte verschoben werden sollen, können die Quadrate durch Anklicken
						und Halten mit der linken Maustaste an die gewünschte Stelle bewegt werden.
					</p>
					<p>
						Wurde die Erfassung einer Fläche mit einem Doppelklick abgeschlossen,
						erscheint sie auch in der Liste der Flächen und ist dort blau umrandet.
						Durch Anklicken des Stifts oben rechts in der markierten Fläche wird ein
						Fenster geöffnet, in dem die neue bzw. geänderte Fläche genauer beschrieben
						werden kann. Mindestens die Angabe, um welche Flächenart es sich handelt und
						wohin die Fläche entwässert, ist zur Bearbeitung notwendig.
					</p>
					<p>
						Wurde die Fläche irrtümlich angelegt, kann sie hier durch Betätigung der
						Schaltfläche &quot;Anmerkung entfernen&quot; gelöscht werden.
					</p>
					<p>
						<Icon name='map-marker' /> "Punkt anlegen" Mit dieser Funktion kann eine
						Lageinformation weitergegeben werden. Zum Beispiel der Standort eines Gullys
						oder einer Versickerungsanlage. Hierzu ist zuerst das Symbol anzuklicken.
						Anschließend klickt man in der Karte an die Stelle, die markiert werden
						soll. Es erscheint ein Ballon in der Karte und eine Anmerkung in der
						Flächenliste. Eine Fläche wird hier natürlich nicht angegeben. Auch hier
						kann der Stift oben rechts angeklickt werden. Eine Eintragung in dem sich
						öffnenden Fenster ist notwendig. Ohne Eintragung muss diese Information
						ignoriert werden.
					</p>
					<p>
						<Icon name='edit' /> "Veränderung der selektierten Anmerkung": Diese
						Funktion ermöglicht es, schon angelegte, selbst erzeugte Anmerkungen weiter
						zu verändern. Wenn das Symbol aktiviert wurde, kann ein Objekt ausgewählt
						werden. Wurde eine Fläche ausgewählt, erscheinen wieder die kleinen
						Quadrate. Bewegt man den Mauszeiger über eins dieser Quadrate oder den
						Ballon verändert er sich in einen Zeigefinger. Durch Anklicken und
						Gedrücktehalten der linken Maustaste kann jetzt das Quadrat oder der Ballon
						so verschoben werden, wie es gewünscht ist.
					</p>
				</div>
			}
		/>
	);
};
export default Component;
