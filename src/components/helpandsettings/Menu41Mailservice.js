import React from "react";
import GenericModalMenuSection from "../commons/GenericModalMenuSection";

const Component = ({
    applicationMenuActiveKey,
    setApplicationMenuActiveKey,
    showOnSeperatePage
}) => {
    return (
        <GenericModalMenuSection
            applicationMenuActiveKey={applicationMenuActiveKey}
            setApplicationMenuActiveKey={setApplicationMenuActiveKey}
            sectionKey="mailservice"
            sectionTitle="Mailservice"
            sectionBsStyle="info"
            showOnSeperatePage={showOnSeperatePage}
            sectionContent={
                <div>
                    <p>
                        Möchten Sie Änderungen an Ihren Flächen vornehmen (siehe „Änderungen
                        vornehmen und übermitteln“) und per Mail über den Stand der Bearbeitung
                        informiert werden, ist es notwendig Ihre Mailadresse zu hinterlassen. Hierzu
                        öffnen Sie die Änderungswünsche und klicken auf das blaue Feld „eMail
                        Benachrichtigungen aktivieren“. Es öffnet sich ein Feld in dem Sie Ihre
                        Mailadresse hinterlegen können. Nach dem Senden der Mailadresse erhalten Sie
                        an diese Adresse eine Mail mit der Aufforderung die Mailadresse durch
                        Anklicken eines Links oder die Eingabe eines Codes zu bestätigen. Sobald
                        dies geschehen ist, werden Sie automatisch informiert, wenn Sie Änderungen
                        eingereicht haben, Informationen/Nachfragen des jeweiligen Sachbearbeiters
                        vorliegen oder die Bearbeitung abgeschlossen ist. Der Punkt „eMail
                        Benachrichtigungen aktivieren“ ändert sich in „eMail Benachrichtigungen
                        verwalten“ sobald hier eine Mailadresse hinterlegt ist. Hier haben Sie dann
                        die Möglichkeit die Mailadresse wieder zu löschen oder zu verändern.
                    </p>
                </div>
            }
        />
    );
};
export default Component;
