import React from "react";
import GenericModalMenuSection from "../commons/GenericModalMenuSection";
import { Icon } from "react-fa";

const Component = ({
    applicationMenuActiveKey,
    setApplicationMenuActiveKey,
    showOnSeperatePage
}) => {
    return (
        <GenericModalMenuSection
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            sectionKey="anleitung"
            sectionTitle="Kurzanleitung"
            sectionBsStyle="success"
            showOnSeperatePage={showOnSeperatePage}
            sectionContent={
                <div>
                    <p>
                        <strong>Fensteraufbau</strong>
                    </p>

                    <p>
                        Das Fenster von VerDIS-online hat 3 Bereiche: Die Kopfzeile mit
                        grundsätzlichen Funktionen, den Kartenbereich und den Informationsbereich.
                        Können im Informationsbereich nicht alle Informationen abgebildet werden,
                        erscheinen die üblichen Scrollbereiche, die eine Verschiebung des
                        Informationsbereichs ermöglichen.
                    </p>

                    <p>
                        <strong>Darstellung der Flächen</strong>
                    </p>

                    <p>
                        Im Kartenbereich werden die Flächen dargestellt, die unter dem Kassenzeichen
                        erfasst worden sind. Besitzen Sie auch ein benachbartes Kassenzeichen,
                        können Sie die Flächen erst durch einen erneuten Aufruf und Eingabe eines
                        anderen Zugangscodes angezeigt bekommen. Die Anzeige mehrerer Kassenzeichen
                        in einem Fenster ist nicht möglich. Jede Fläche ist mit einer Zahl oder
                        einem Buchstaben versehen. Zahlen dienen zur Nummerierung von Dachflächen
                        und Buchstaben zur Aufzählung von versiegelten Flächen. Zusätzlich werden
                        unterschiedliche Flächenarten durch ihre Farbgebung unterschieden.
                        Dachflächen werden rot/braun, Gründachflächen in einem kräftigen Grün,
                        versiegelte Flächen in grau und leicht versiegelte Flächen (Ökopflaster,
                        etc.) in grau/grün dargestellt. Die Nummern und Buchstaben werden ab einem
                        bestimmten Maßstab aus- bzw. eingeblendet, um die Übersicht nicht zu
                        verlieren. Vergrößern oder verkleinern kann man die Ansicht durch die
                        Nutzung der Symbole + und - im Kartenfenster oder durch die Nutzung des
                        Mausrades. Das Verschieben des Fensters ist durch Anklicken und Halten der
                        linken Maustaste und gleichzeitigem Bewegen der Maus möglich. Um zur
                        Gesamtansicht zurückzukehren, klicken Sie auf die Kopfzeile "VerDIS-online
                        (Kassenzeichen: xxxxxxxx) oder in das Feld "Kassenzeichen".
                    </p>

                    <p>
                        <strong>Informationsbereich</strong>
                    </p>

                    <p>
                        In der Grundeinstellung werden hier der Ansprechpartner mit
                        Kontaktinformationen, das Kassenzeichen mit dem Datum der ersten Erfassung,
                        eine Statistik (Tortendiagramm) und eine Aufstellung der Flächen angezeigt.
                        In der Statistik sehen Sie die Summen aller Flächen, die nach dem
                        dargestellten Stand zur Gebührenerhebung herangezogen würden und den Anteil
                        der einzelnen Flächenarten. Beim Bewegen der Maus über das Tortendiagramm
                        werden die m² der einzelnen Flächenarten angezeigt. In der Aufstellung der
                        Flächen wird Ihnen zu jeder einzelnen Fläche neben der Flächenart und
                        -bezeichnung auch die Größe der Fläche, ob sie angeschlossen ist oder
                        versickert und manchmal auch eine Kurzbeschreibung (z.B.: Gartenweg)
                        angezeigt.
                    </p>

                    <p>
                        <strong>Kopfzeile</strong>
                    </p>

                    <p>
                        Neben dem Namen der Oberfläche mit dem derzeit aufgerufenen Kassenzeichen
                        haben Sie die Möglichkeit "Hilfe &amp; Einstellungen" (hier finden Sie auch
                        diese Kurzanleitung) aufzurufen, über das Feld &quot;Änderungswünsche&quot;
                        den Bereich aufzurufen, in dem Sie Änderungswünsche mitteilen können, einen
                        ausdruckbaren Flächenerfassungsbogen zu erzeugen und Bestandteile des
                        Fensters ein- bzw. auszublenden.
                    </p>

                    <p>
                        <strong>Fläche auswählen und abfragen</strong>{" "}
                    </p>

                    <p>
                        Bewegen Sie den Mauszeiger im Kartenfenster über eine Fläche. Klicken Sie
                        jetzt die Fläche einmal an. Die Fläche wird in der Karte und in der Liste
                        markiert. Es öffnet sich ein Bereich mit detaillierteren Informationen zur
                        ausgewählten Fläche. Klicken Sie doppelt auf eine Fläche, zoomt das
                        Kartenfenster auf diese Fläche. Hierbei ist es unerheblich, ob Sie in der
                        Karte oder in der Liste doppelklicken. In der Liste werden zu jeder Fläche
                        die Informationen Art der Fläche (z.B.: Dachfläche), die Flächengröße und
                        der Anschlussgrad angezeigt. In manchen Fällen gibt es noch eine
                        Kurzbeschreibung (z.B.: Gartenweg). Um zur Gesamtansicht zurückzukehren,
                        klicken Sie auf die Kopfzeile "VerDIS-online (Kassenzeichen: xxxxxxxx) oder
                        in das Feld "Kassenzeichen".
                    </p>

                    <p>
                        <strong>Funktionen in der Kopfzeile</strong>
                    </p>

                    <p>
                        Über "Hilfe &amp; Einstellungen" haben Sie die Möglichkeit, neben dieser
                        Kurzanleitung weitere Informationen zu erhalten und unterschiedliche
                        Kartenhintergründe auszuwählen.
                    </p>
                    <p>
                        Durch Anklicken des Felds &quot;Änderungswünsche&quot; gelangen Sie auf ein
                        Fenster, in dem Sie die Möglichkeit haben, den Änderungsmodus ein- und
                        auszuschalten. Wurden dort Änderungen eingetragen, erscheint hinter dem Feld
                        Änderungswünsche die Zahl der von Ihnen angegebenen Änderungen. Eine Hilfe
                        zur Einarbeitung von gewünschten Änderungen finden Sie unter der
                        entsprechenden Rubrik und können Sie aus dem Änderungsmodus heraus aufrufen.
                    </p>

                    <p>
                        <Icon name="file-pdf" /> Durch Anklicken dieses Symbols wird ein
                        Flächenerfassungsbogen im PDF-Format angefordert und geöffnet. Der
                        Flächenerfassungsbogen steht bereit, sobald das Symbol weiß erscheint. Bei
                        größeren Kassenzeichen kann dies etwas dauern. Um diese Funktion ausüben zu
                        können, muss der Adobe Acrobat Reader installiert sein.
                    </p>
                    <p>
                        <Icon name="info-circle" /> Wurde eine Fläche ausgewählt, erscheint ein gelb
                        hinterlegter Bereich mit näheren Informationen zur ausgewählten Fläche. Mit
                        der Funktion "Flächeninfo ausblenden/einblenden" können Sie diesen Bereich
                        aktivieren oder deaktivieren, um eine bessere Sicht auf das Kartenfenster zu
                        erhalten.
                    </p>

                    <p>
                        <Icon name="chart-pie" /> Das im Informationsbereich angezeigte Fenster mit
                        den Informationen zu einer möglichen Veranlagung kann mit dieser Funktion
                        ein- oder ausgeblendet werden.
                    </p>
                    <p>
                        <Icon name="user" /> Das im Informationsbereich angezeigte Fenster mit den
                        Informationen zum Ansprechpartner kann mit dieser Funktion ein- oder
                        ausgeblendet werden.
                    </p>

                    <p>
                        <Icon name="power-off" /> Mit dieser Funktion verlassen Sie das aufgerufene
                        Kassenzeichen und gelangen wieder auf das Startfenster der Anwendung.
                        Sollten Sie Eigentümer mehrerer Grundstücke/Kassenzeichen sein, haben Sie
                        hier die Möglichkeit, erneut einen Zugangscode einzugeben.
                    </p>
                </div>
            }
        />
    );
};
export default Component;
