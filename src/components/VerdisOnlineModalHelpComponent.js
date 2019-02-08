import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Modal, Button, Panel, PanelGroup, Label} from 'react-bootstrap';
import {actions as UiStateActions} from '../redux/modules/uiState';
import {Icon} from 'react-fa';
import { Link } from 'react-scroll';

function mapStateToProps(state) {
    return {uiState: state.uiState};
}
function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UiStateActions, dispatch)
    };
}

export class VerdisOnlineModalHelpComponent_ extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.close = this
            .close
            .bind(this);
    }



    close() {
        this
            .props
            .uiActions
            .showSettings(false);
    }
    render() {
        let modalBodyStyle = {
            "overflowY": "auto",
            "maxHeight": this.props.uiState.height - 200
        };

        return (
            <Modal
                style={{
                zIndex: 3000000000
            }}
                bsSize="large"
                show={this.props.uiState.settingsVisible}
                onHide={this.close}
                keyboard={false}>
                <Modal.Header >
                    <Modal.Title><Icon name="info"/>&nbsp;&nbsp;&nbsp;Hilfe & Einstellungen von VerDIS-online</Modal.Title>
                </Modal.Header>
                <Modal.Body id="myMenu" style={modalBodyStyle}>

                    Bitte w&auml;hlen Sie eine der folgenden farbigen Schaltfl&auml;chen, um sich
                    weitere Informationen zu dem entsprechenden Thema anzeigen zu lassen:<br/><br/>



               <PanelGroup accordion id="accordion-example">
  <Panel eventKey="1" bsStyle="info">
    <Panel.Heading>
      <Panel.Title toggle>Mein Kassenzeichen</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    Wird mit einer der nächsten Ausbaustufen belegt.
    </Panel.Body>
  </Panel>
  <Panel eventKey="2" bsStyle="success">
    <Panel.Heading>
      <Panel.Title toggle>Einstellungen</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    Wird mit einer der nächsten Ausbaustufen belegt.
    </Panel.Body>
  </Panel>
  <Panel name="help" eventKey="3">
    <Panel.Heading>
      <Panel.Title toggle>Häufig gestellte Fragen</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <font size="3" >
            <Link  to="hintergrund" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="default">Hintergrund</Label>{' '}</Link>

            <Link to="kriterienfrdiebeurteilungvonflchen" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="success">Kriterien für die Beurteilung von Flächen</Label>{' '}</Link>

            <Link to="wasbedeutetversiegelt" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was bedeutet versiegelt?</Label>{' '}</Link>

            <Link to="wasbedeutetindenkanalentwssernd" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was bedeutet „in den Kanal entwässernd“</Label>{' '}</Link>

            <Link to="wannisteineflcheversickernd" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Wann ist eine Fläche versickernd?</Label>{' '}</Link>

            <Link to="wasisteinedirekteinleitungingewsser" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was ist eine „Direkteinleitung in Gewässer“?</Label>{' '}</Link>

            <Link to="mussmanineinenkanalentwssern" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Muss man in einen Kanal entwässern?</Label>{' '}</Link>

            <Link to="wasbedeutetabflusswirksamkeit" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was bedeutet Abflusswirksamkeit?</Label>{' '}</Link>

            <Link to="wasisteinedachflche" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was ist eine Dachfläche?</Label>{' '}</Link>

            <Link to="wasisteingrndach" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was ist ein Gründach?</Label>{' '}</Link>

            <Link to="wasistkopflaster" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Was ist Ökopflaster?</Label>{' '}</Link>

            <Link to="welchenachweisewerdenanerkannt" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Welche Nachweise werden anerkannt?</Label>{' '}</Link>

            <Link to="wannmssennachweiseeingereichtwerden" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="primary">Wann müssen Nachweise eingereicht werden?</Label>{' '}</Link>

            <Link to="regenwasseralsbrauchwasser" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="warning">Regenwasser als Brauchwasser</Label>{' '}</Link>

            <Link to="wasserrechtlicheerlaubnisanzeigeneinerflchenversickerung" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="warning">Wasserrechtliche Erlaubnis/Anzeigen einer Flächenversickerung</Label>{' '}</Link>

            <Link to="anschluss-undbenutzungszwanggebhrengerechtigkeit" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="warning">Anschluss- und Benutzungszwang / Gebührengerechtigkeit</Label>{' '}</Link>

            <Link to="Personalisierung" containerId="myMenu" style={{textDecoration: 'none'}}>
            <Label style={{ cursor: "pointer"}}  bsStyle="warning">Mitwirkungspflicht</Label>{' '}</Link>
           
        </font>


        <div name="hintergrund">
            <br />
        </div>
        <h4 id="hintergrund">Hintergrund&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>
        <p>Die Ermittlung der Dach- und versiegelten Flächen dient zur Verteilung der Kosten, die durch das Kanalsystem und alle damit
            zusammenhängenden Anlagen und Tätigkeiten entstehen. Rechtliche Bedenken bei der Gebührengerechtigkeit machten 2003 eine
            Umstellung von der Heranziehung ausschließlich bebauter Flächen auf die Heranziehung von Dach- und versiegelten Flächen
            erforderlich. Auf Grund der topographischen Lage Wuppertal, des alten Kanalsystems und des erforderlichen Trennsystems
            (Trennung von Schmutz- und Niederschlagswasser) ist ein erheblicher Aufwand zu betreiben um eine geregelte Abwasserentsorgung
            zu gewährleisten und Überschwemmungen in Wuppertal zu vermeiden. Die durchschnittliche jährliche Niederschlagsmenge beträgt
            ca. 1200 Liter/m2. Von dem anfallenden Niederschlagswasser müssen 60 Mio. m³ Regenwasser behandelt werden. Maßgebend
            ist die Satzung über die Abwasserbeseitigung in der Stadt Wuppertal.</p>

        <div name="kriterienfrdiebeurteilungvonflchen">
            <br />
        </div>
        <h4 id="kriterienfrdiebeurteilungvonflchen:">Kriterien für die Beurteilung von Flächen:&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>
        <p>Art der Fläche, ihre Beschaffenheit und Abgrenzung. Ist ein Kanal, verrohrter Bach oder Privatkanal der in einen öffentlichen
            Kanal gelangt vorhanden und liegt eine Anschluss- und Benutzungspflicht vor? Wie entwässert die Fläche bei Starkregen
            (so genannter Jahrhundertregen)? Gelangt Wasser von dieser Fläche direkt oder indirekt in die Kanalisation (nicht die
            Menge ist entscheidend sondern die Tatsache an sich)? Liegt eine Befreiung von der Anschluss- und Benutzungspflicht vor
            oder gibt es eine Entwässerungserlaubnis zur Versickerung bzw. Einleitung in ein offenes Gewässer? Die Flächen werden
            aus dem neuesten, dem Liegenschaftskataster vorliegenden, Luftbild erfasst. Da eine Beurteilung der Flächen aus dem Luftbild
            nicht immer einwandfrei möglich ist, wird der jeweilige Eigentümer/Verwalter bei dem Verfahren beteiligt.</p>

        <div name="wasbedeutetversiegelt">
            <br />
        </div>
        <h4 id="wasbedeutetversiegelt">Was bedeutet versiegelt?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Alle Flächen, die keine natürliche Oberfläche aufweisen gelten als versiegelt. Auch Flächen mit Kies, Split, Rasengittersteinen,
            Holzterrassen usw. sind versiegelte Flächen. Sie werden nach ihrer Art und durch ihre Abflusswirksamkeit unterschieden.</p>

        <div name="wasbedeutetindenkanalentwssernd">
            <br />
        </div>
        <h4 id="wasbedeutetindenkanalentwssernd">Was bedeutet „in den Kanal entwässernd“?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Als „in den Kanal entwässernd“ werden Flächen eingestuft, von denen bei einem Starkregen (Jahrhundertregen) Wasser in einen
            vorhandenen Kanal gelangen kann. Hierbei spielt es keine Rolle, ob die Fläche eine eigene Entwässerung hat oder ob das
            Regenwasser über eine benachbarte Fläche in einen Kanal abläuft. Verrohrte Bäche werden wie Regenwasserkanäle angesehen.</p>

        <div name="wannisteineflcheversickernd">
            <br />
        </div>
        <h4 id="wannisteineflcheversickernd">Wann ist eine Fläche versickernd?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Wenn von ihr kein Regenwasser in den Kanal gelangen kann. Entweder wird das Wasser auf angrenzenden, unversiegelten Flächen
            oder in einer speziellen Anlage zur Versickerung gebracht. Bei größeren Flächen ist eine wasserrechtliche Erlaubnis erforderlich.
            Ansprechpartner ist hier die untere Wasserbehörde. https://www.wuppertal.de/vv/produkte/106/versickerung.php#tab-infos
            Liegt ein Regenwasserkanal in der Straße und Flächen sollen versickern, wird eine Befreiung vom Anschluss- und Benutzungszwang
            benötigt, die formlos beim Eigenbetrieb Wasser und Abwasser Wuppertal beantragt werden kann. https://www.wuppertal.de/vv/oe/waw/102370100000497495.php#tab-infos</p>

        <div name="wasisteinedirekteinleitungingewsser">
            <br />
        </div>
        <h4 id="wasisteinedirekteinleitungingewsser">Was ist eine „Direkteinleitung in Gewässer“?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Das Niederschlagswasser von Flächen wird in einen Bach, Fluss oder anderes Gewässer geleitet. Eine Gebührenbefreiung findet
            aber nur statt, wenn es sich um ein offenes Gewässer handelt und auf dem Weg zu dem offenen Gewässer zu keiner Zeit ein
            städtischer Kanal in Anspruch genommen wird. Verrohrte Gewässer gehören mit zum Kanalnetz und haben keine reduzierende
            Auswirkung auf die Gebührenerhebung. Es wird in jedem Fall eine Einleiterlaubnis benötigt, die bei der Unteren Wasserbehörde
            im Ressort Umweltschutz beantragt werden kann (gebührenpflichtig).</p>

        <div name="mussmanineinenkanalentwssern">
            <br />
        </div>
        <h4 id="mussmanineinenkanalentwssern">Muss man in einen Kanal entwässern?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Ja. Wenn in der Straße ein Kanal anschlussfähig verlegt ist müssen die Dach- und versiegelten Flächen angeschlossen werden.
            In Wuppertal gilt der Anschluss- und Benutzungszwang. In Ausnahmefällen, wenn die Kosten einer Anschlussherstellung unzumutbar
            sind, kann eine Befreiung von dieser Pflicht ausgesprochen werden. Hierfür ist ein Antrag erforderlich, der formlos beim
            Eigenbetrieb Wasser und Abwasser Wuppertal. https://www.wuppertal.de/vv/oe/waw/102370100000497495.php#tab-infos gestellt
            werden kann (gebührenpflichtig).</p>

        <div name="wasbedeutetabflusswirksamkeit">
            <br />
        </div>
        <h4 id="wasbedeutetabflusswirksamkeit">Was bedeutet Abflusswirksamkeit?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Unter Abflusswirksamkeit wird hier verstanden, in welchem Maße eine Fläche Wasser von der Versickerung im Untergrund abhält.
            Je nach Beschaffenheit von Flächen wird angenommen, dass nicht das komplette Regenwasser abgeführt werden muss, sondern
            nur ein Prozentsatz. Bei der Aufstellung der Satzung wurden folgende Sätze festgelegt: Vollversiegelte Flächen sind mit
            100% zu bewerten, Ökopflaster mit 70%, Gründächer mit 50 % und Flächen, die über eine Versickerungsanlage entwässern,
            ebenfalls mit 50 %. Unversiegelte Fläche (naturbelassen und kein Fels) werden als vollständig versickernd betrachtet.
            In gleichem Maße werden die Flächen bei der Gebührenerhebung berücksichtigt, wenn sie in den Kanal entwässern. Hier werden
            Werte nicht miteinander aufgerechnet sondern immer der für den Gebührenzahler günstigere Wert berücksichtigt. Bei der
            Festlegung dieser Werte spielten 2 Gesichtspunkte eine wichtige Rolle. Zum einen galt es den Aufwand für die Feststellung
            von Abflusswirksamkeiten in einem vertretbaren Rahmen zu halten, da dieser Aufwand auf den Gebührenzahler umgelegt werden
            muss. Zum anderen wurde die Dauerhaftigkeit betrachtet. Beispiel: Ökopflaster entwässert nach der Verlegung fast vollständig.
            Es setzt sich aber innerhalb von einigen Jahren immer mehr zu und verdichtet sich so, dass später kaum noch Versickerung
            stattfindet. Sind Flächen festgestellt worden und sie entwässern nicht zu 100% in den Kanal, ist immer ein Nachweis erforderlich.</p>

        <div name="wasisteinedachflche">
            <br />
        </div>
        <h4 id="wasisteinedachflche">Was ist eine Dachfläche?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Als Dachflächen werden alle Flächen bewertet, unter denen man sich aufhalten kann. Es gehören auch Balkone, Vordächer, Carports,
            Wintergärten usw. dazu. Auch bei unterirdischen Gebäuden handelt es sich um Dachflächen. Hier ist aber die Überdeckung
            maßgebend. Ist über dem Gebäude eine Grünfläche, wird sie als Gründach angesehen. Bei der Größenbestimmung von Dachflächen
            wird immer die horizontale Fläche(Ansicht von oben) berechnet und nicht die schräg liegende Fläche.</p>

        <div name="wasisteingrndach">
            <br />
        </div>
        <h4 id="wasisteingrndach">Was ist ein Gründach?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Um Gründächer handelt es sich, wenn Dächer aktiv mit exzessiver Begrünung versehen wurden. Bei einer Kiesbedeckung aus der
            Unkraut hervorgeht handelt es sich „nicht“ um eine Dachbegrünung. Da auch Gründächer mit einer Drainage versehen werden
            und bei Starkregen Teile des Regenwassers in den Kanal entwässern, wird die Fläche für die Gebührenerhebung um 50% reduziert.
            Tiefgaragen werden wie Gründächer betrachtet, wenn sich auf ihnen keine versiegelt Fläche befindet. Für die Anerkennung
            von Gründächern sind entsprechende Nachweise erforderlich. Was ist eine versiegelte Fläche? Jede ebenerdige nicht naturbelassene
            Fläche ist eine versiegelte Fläche. Als vollständig versiegelt gelten Flächen, die asphaltiert, betoniert, mit Platten
            oder mit Pflastersteinen versehen sind.</p>

        <div name="wasistkopflaster">
            <br />
        </div>
        <h4 id="wasistkopflaster">Was ist Ökopflaster?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Flächen können als Ökopflaster eingestuft werden, wenn sie unter Verwendung von nachweislich versickerungsfördernden Materialien
            angelegt sind oder mit offenen mehr als 2 cm breiten Fugen versehen sind. Zu Ökopflaster zählen z.B.: Rasengittersteine,
            offenporige Pflastersteine, Schotter, Kies u.ä.. Kein Ökopflaster sind z.B.: brüchige Asphalt- und Betonflächen, brüchige
            Plattenbeläge u.a.. Soll Ökopflaster gelten gemacht werden ist immer ein Nachweis erforderlich.</p>

        <div name="welchenachweisewerdenanerkannt">
            <br />
        </div>
        <h4 id="welchenachweisewerdenanerkannt">Welche Nachweise werden anerkannt?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Als Nachweis wird eine entsprechende Unternehmerbescheinigung, eine Rechnung, ein Gutachten oder Fotos, welche die Örtlichkeit
            entsprechend wiedergeben, anerkannt. Rechnungsbelege aus Baumärkten werden anerkannt, wenn sie auf den Namen des Grundstückseigentümers
            ausgestellt sind. Bei der Verwendung von Fotos als Nachweis, sollte darauf geachtet werden, dass immer eine Gesamtansicht
            der Fläche und wenn nötig eine Nahaufnahme eingereicht wird. Es sollte erkennbar sein, dass Regenwasser keine Möglichkeit
            hat in den Kanal zu entwässern bzw. welche Struktur die Oberfläche hat.</p>

        <div name="wannmssennachweiseeingereichtwerden">
            <br />
        </div>
        <h4 id="wannmssennachweiseeingereichtwerden">Wann müssen Nachweise eingereicht werden?&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Nachweise werden immer dann benötigt, wenn Flächen nicht vollständig in den Kanal einleiten bzw. mit einer Oberfläche versehen
            sind, bei der die Gebühr nur teilweise abgerechnet wird. (Gründächer 50% der Fläche, Ökopflaster usw,). Auch wenn eine
            Fläche im Flächenerfassungsbogen abgebildet aber tatsächlich nicht vorhanden ist, sollte das belegt werden. Was ist eine
            Versickerungsanlage? Einrichtungen, die der Versickerung von Wasser dienen. Hierzu gehören Rigolen, Mulden, Sickerschächte
            usw. . Sollen Flächen neu zur Versickerung gebracht werden, ist vorher eine Befreiung vom Anschluss- und Benutzungszwang
            bzw. eine wasserrechtliche Erlaubnis erforderlich. Genauere Informationen: http://www.wuppertal-intra.de/vv/produkte/106/versickerung.php#tab-unterlagen
            Versickerungsanlagen werden unterschieden zwischen vollständiger Versickerung und einer Versickerung mit Notüberlauf.
            Notüberläufe werden bei Versickerungsanlagen benötigt, wenn die Versickerungsfähigkeit des Bodens nicht ausreicht um
            das Regenwasser bei Starkregen vollständig aufzunehmen und das überschüssige Wasser in den Kanal abgeleitet wird. Bei
            Notüberläufen werden 50% der Fläche zur Gebührenerhebung herangezogen.
            <strong>Soll eine Versickerungsanlage (mit oder ohne Notüberlauf) geltend gemacht werden, ist ein entsprechender Nachweis erforderlich.</strong>
        </p>

        <div name="regenwasseralsbrauchwasser">
            <br />
        </div>
        <h4 id="regenwasseralsbrauchwasser">Regenwasser als Brauchwasser&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Vermehrt wird Regenwasser als Brauchwasser für Toiletten, Waschmaschinen usw. genutzt. Das führt allerdings nicht zu einer
            Berücksichtigung bei der Erhebung der Abwasserbeseitigungsgebühr Niederschlagswasser. Der Spareffekt für den Nutzer ergibt
            sich aus der Reduzierung des Trinkwasserverbrauchs und dadurch einer geringeren Trinkwassergebühr und daraus, dass sich
            die Schmutzwassergebühr nach dem Verbrauch des Trinkwassers berechnet wird obwohl das aufgefangene Regenwasser hier zum
            Schmutzwasser wird. Da hier das städtische Kanalsystem in Anspruch genommen wird, bleibt die Niederschlagswassergebühr
            unberührt.</p>

        <div name="wasserrechtlicheerlaubnisanzeigeneinerflchenversickerung">
            <br />
        </div>
        <h4 id="wasserrechtlicheerlaubnisanzeigeneinerflchenversickerung">Wasserrechtliche Erlaubnis/Anzeigen einer Flächenversickerung&nbsp;
            <Link to="help" containerId="myMenu" style={{ color:
                '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Unterliegen Flächen nicht dem Anschluss- und Benutzungszwang und sollen dennoch, ggf. mit Hilfe einer Versickerungsanlage
            zur Versickerung gebracht werden, ist für sie eine wasserrechtliche Erlaubnis (Versickerungsgenehmigung) erforderlich.
            Grundvoraussetzung ist, dass das Wasser unbelastet ist und ohne Beeinträchtigung der Natur und anderer Nachbarn versickern
            kann. http://www.wuppertal-intra.de/vv/produkte/106/versickerung.php#tab-links . (gebührenpflichtig).</p>

        <div name="anschluss-undbenutzungszwanggebhrengerechtigkeit">
            <br />
        </div>
        <h4 id="anschluss-undbenutzungszwanggebhrengerechtigkeit">Anschluss- und Benutzungszwang / Gebührengerechtigkeit&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Um das von der Stadt dauerhaft und leistungsfähig vorzuhaltende Entwässerungssystem auf breiter, stabiler und gerechter Grundlage
            zu finanzieren, gibt es den so genannten Anschluss- und Benutzungszwang: Grundstückseigentümer/innen haben somit die
            Pflicht, aber auch das Recht, bebaute bzw. versiegelte Flächen an die öffentliche Kanalisation anzuschließen. Zu den
            bebauten Flächen gehören auch eventuell vorhandene Dachüberstände. Befreiungen von dieser Anschlusspflicht sind nur in
            begründeten Ausnahmefällen möglich. Dadurch werden die Kosten im Sinne einer Solidargemeinschaft auf viele verteilt und
            für die einzelnen Grundstückseigentümer/innen möglichst gering gehalten. Eine vollständige Abkopplung von Flächen vom
            städtischen Kanalnetz, verbunden mit einer vollständigen Gebührenabsetzung schwächt diese Solidargemeinschaft und ist
            deshalb nicht möglich. Dem Anschluss- und Benutzungszwang unterliegen alle Grundstücke, die an einer Straße liegen in
            der ein Kanal anschlussfähig verlegt ist. Liegen größere Flächen nicht an einer Straße in der ein Kanal verlegt ist,
            wird eine wasserrechtliche Erlaubnis benötigt.</p>

        <div name="mitwirkungspflicht">
            <br />
        </div>
        <h4 id="mitwirkungspflicht">Mitwirkungspflicht&nbsp;
            <Link to="help" containerId="myMenu" style={{ color: '#00000044'}}>
            <Icon name="arrow-circle-up" />
            </Link>
        </h4>

        <p>Grundstückseigentümer/innen sind nach der Satzung verpflichtet größere Änderungen mitzuteilen und auf Anforderung Auskünfte
            und Nachweise über Ihre Flächen zu erbringen. Werden Flächenänderungen vom Ressort Vermessung, Katasteramt und Geodaten
            oder vom Steueramt festgestellt, kann das Steueramt die Gebühr des laufenden und der 4 vorhergehenden Jahre nachfordern.</p>
    </Panel.Body>
  </Panel>
</PanelGroup>     

                </Modal.Body>

                <Modal.Footer>
                    <table style={{
                        width: '100%'
                    }}><tbody>
                        <tr>
                            <td
                                style={{
                                textAlign: 'left',
                                verticalAlign: 'top',
                                paddingRight: "30px"
                            }}>
                                <span
                                    style={{
                                    fontSize: "11px"
                                }}>
                                    <b>Hintergrundkarte</b>: in Detailma&szlig;st&auml;ben&nbsp;
                                    <a>Amtliche Basiskarte (ABK) der Stadt Wuppertal</a>, in &Uuml;bersichtsma&szlig;st&auml;ben&nbsp;
                                    <a>WebAtlasDE &copy; GeoBasis-DE / BKG 2017</a>, jeweils &uuml;berlagert mit
                                    den jeweils für Ihr Kassenzeichen erfassten versiegelten Flächen.<br/>
                                    <b>Technische Realisierung</b>: <a href="https://cismet.de/" target="_cismet">cismet GmbH</a> auf Basis von <a  href="http://leafletjs.com/" target="_leaflet">Leaflet</a> und <a href="https://cismet.de/#refs" target="_cismet">cids | WuNDa</a><br/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://cismet.de/datenschutzerklaerung.html">Datenschutzerklärung (Privacy Policy)</a>
                                    </span>
                            </td>
                            <td>
                                <Button bsStyle="primary" type="submit" onClick={this.close}>Ok</Button>
                            </td>
                        </tr>
                        </tbody></table>
                </Modal.Footer>

            </Modal>
        );
    }
}

const VerdisOnlineModalHelpComponent = connect(mapStateToProps, mapDispatchToProps)(VerdisOnlineModalHelpComponent_);
export default VerdisOnlineModalHelpComponent;

VerdisOnlineModalHelpComponent_.propTypes = {
    uiActions: PropTypes.object,
    uiState: PropTypes.object
};
