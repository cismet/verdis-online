import React from "react";

import {
    Dachflaeche,
    Gruendachflaeche,
    Oekopflaster,
    StaedtStrassenflaeche,
    StaedtStrassenflaecheOekopflaster,
    VersiegelteFlaeche
} from "../components/kurzinfos/flaechenart";
import {
    AmKanalAngeschlossen,
    DirekteinleitungInVerrohrtesGewaesser,
    DirekteinleitungOffenesGewaesser,
    Versickernd,
    VersickerungsanlageMitNotueberlauf
} from "../components/kurzinfos/anschlussgrad";

export const kassenzeichenFlaechenSorter = (fa, fb) => {
    if (!isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
        return +fa.flaechenbezeichnung - +fb.flaechenbezeichnung;
    } else if (!isNaN(fa.flaechenbezeichnung) && isNaN(fb.flaechenbezeichnung)) {
        return -1;
    } else if (isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
        return 1;
    } else {
        if (fa.flaechenbezeichnung < fb.flaechenbezeichnung) {
            return -1;
        } else {
            return 1;
        }
    }
};

export const getOverlayTextForFlaeche = flaeche => {
    return (
        <div>
            {getInfoTextForFlaechenart(flaeche)}
            <br />
            {getInfoTextForAnschlussgrad(flaeche)}
        </div>
    );
};

export const getInfoTextForFlaechenart = flaeche => {
    let flaechenart;
    let switcher;

    if (flaeche.flaechenart) {
        switcher = flaeche.flaechenart;
    } else {
        switcher = flaeche.flaecheninfo.flaechenart.art;
    }

    switch (switcher) {
        case "Dachfläche":
            flaechenart = <Dachflaeche />;
            break;
        case "Gründach":
            flaechenart = <Gruendachflaeche />;
            break;
        case "versiegelte Fläche":
            flaechenart = <VersiegelteFlaeche />;
            break;
        case "städtische Straßenfläche":
            flaechenart = <StaedtStrassenflaeche />;
            break;
        case "städtische Straßenfläche (Ökopflaster)":
            flaechenart = <StaedtStrassenflaecheOekopflaster />;
            break;
        case "Ökopflaster":
            flaechenart = <Oekopflaster />;
            break;
    }

    return flaechenart;
};

export const getInfoTextForAnschlussgrad = flaeche => {
    let anschlussgrad;

    let switcher;
    if (flaeche.anschlussgrad) {
        switcher = flaeche.anschlussgrad;
    } else {
        switcher = flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung;
    }
    switch (switcher) {
        case "angeschl.":
            anschlussgrad = <AmKanalAngeschlossen />;
            break;
        case "vers.":
            anschlussgrad = <Versickernd />;
            break;
        case "direkt OG":
            anschlussgrad = <DirekteinleitungOffenesGewaesser />;
            break;
        case "Va-Über":
            anschlussgrad = <VersickerungsanlageMitNotueberlauf />;
            break;
        case "Bach verrohrt":
            anschlussgrad = <DirekteinleitungInVerrohrtesGewaesser />;
    }

    return anschlussgrad;
};
