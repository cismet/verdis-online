import React from 'react';

import {
	Dachflaeche,
	Gruendachflaeche,
	Oekopflaster,
	StaedtStrassenflaeche,
	StaedtStrassenflaecheOekopflaster,
	VersiegelteFlaeche
} from '../components/kurzinfos/flaechenart';
import {
	AmKanalAngeschlossen,
	DirekteinleitungInVerrohrtesGewaesser,
	DirekteinleitungOffenesGewaesser,
	Versickernd,
	VersickerungsanlageMitNotueberlauf
} from '../components/kurzinfos/anschlussgrad';

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

export const getOverlayTextForFlaeche = (flaeche) => {
	return (
		<div>
			{getInfoTextForFlaechenart(flaeche)}
			<br />
			{getInfoTextForAnschlussgrad(flaeche)}
		</div>
	);
};

export const getInfoTextForFlaechenart = (flaeche) => {
	let flaechenart;
	let switcher;

	if (flaeche.flaechenart) {
		switcher = flaeche.flaechenart;
	} else {
		switcher = flaeche.flaecheninfo.flaechenart.art;
	}

	switch (switcher) {
		case 'Dachfläche':
			flaechenart = <Dachflaeche />;
			break;
		case 'Gründach':
			flaechenart = <Gruendachflaeche />;
			break;
		case 'versiegelte Fläche':
			flaechenart = <VersiegelteFlaeche />;
			break;
		case 'städtische Straßenfläche':
			flaechenart = <StaedtStrassenflaeche />;
			break;
		case 'städtische Straßenfläche (Ökopflaster)':
			flaechenart = <StaedtStrassenflaecheOekopflaster />;
			break;
		case 'Ökopflaster':
			flaechenart = <Oekopflaster />;
			break;
	}

	return flaechenart;
};

export const getInfoTextForAnschlussgrad = (flaeche) => {
	let anschlussgrad;

	let switcher;
	if (flaeche.anschlussgrad) {
		switcher = flaeche.anschlussgrad;
	} else {
		switcher = flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung;
	}
	switch (switcher) {
		case 'angeschl.':
			anschlussgrad = <AmKanalAngeschlossen />;
			break;
		case 'vers.':
			anschlussgrad = <Versickernd />;
			break;
		case 'direkt OG':
			anschlussgrad = <DirekteinleitungOffenesGewaesser />;
			break;
		case 'Va-Über':
			anschlussgrad = <VersickerungsanlageMitNotueberlauf />;
			break;
		case 'Bach verrohrt':
			anschlussgrad = <DirekteinleitungInVerrohrtesGewaesser />;
	}

	return anschlussgrad;
};

export const flaechenarten = [
	{ art_abkuerzung: 'DF', art: 'Dachfläche' },
	{ art_abkuerzung: 'GDF', art: 'Gründach' },
	{ art_abkuerzung: 'VF', art: 'versiegelte Fläche' },
	{ art_abkuerzung: 'VFS', art: 'städtische Straßenfläche' },
	{ art_abkuerzung: 'VSÖ', art: 'städtische Straßenfläche (Ökopflaster)' },
	{ art_abkuerzung: 'VFÖ', art: 'Ökopflaster' },
	{ art_abkuerzung: 'VV', art: 'vorläufige Veranlagung' }
];

export const anschlussgrade = [
	{ grad_abkuerzung: 'angeschl.', grad: 'Am Kanal angeschlossen' },
	{ grad_abkuerzung: 'vers.', grad: 'versickernd' },
	{ grad_abkuerzung: 'direkt OG', grad: 'Direkteinleitung in ein offenes Gewässer' },
	{ grad_abkuerzung: 'Va-Über', grad: 'Versickerungsanlage mit Notüberlauf' },
	{ grad_abkuerzung: 'Bach verrohrt', grad: 'Direkteinleitung in ein verrohrtes Gewässer' }
];

export const colorUnchanged = 'black';
export const colorChanged = '#436F8C';
export const colorAccepted = '#3D7844';
export const colorRejected = '#B11623';

export const getProcessedFlaechenCR = (flaeche, flaechenCR) => {
	let groesse, art, anschlussgrad;
	let changeCounter = 0;
	let edited = false;
	let validationStates = {
		groesse: null, //means 'pending'
		flaechenart: null, //means 'pending'
		anschlussgrad: null //means 'pending'
	};
	let colors = {
		groesse: 'black',
		flaechenart: 'black',
		anschlussgrad: 'black'
	};
	if (
		flaechenCR.groesse !== undefined &&
		flaechenCR.groesse !== flaeche.flaecheninfo.groesse_korrektur
	) {
		groesse = flaechenCR.groesse;
		setValidationStringForAttr(validationStates, 'groesse', flaechenCR, 'error');
		setColorForAttr(colors, 'groesse', flaechenCR, colorRejected, colorChanged);
		if (!isProcessedByClerk('groesse', flaechenCR)) {
			changeCounter++;
		}
	} else {
		groesse = flaeche.flaecheninfo.groesse_korrektur;
		setValidationStringForAttr(validationStates, 'groesse', flaechenCR, 'success');
		setColorForAttr(colors, 'groesse', flaechenCR, colorAccepted, colorUnchanged);
	}
	if (
		flaechenCR.flaechenart !== undefined &&
		flaechenCR.flaechenart.art_abkuerzung !== flaeche.flaecheninfo.flaechenart.art_abkuerzung
	) {
		art = flaechenCR.flaechenart;
		setValidationStringForAttr(validationStates, 'flaechenart', flaechenCR, 'error');
		setColorForAttr(colors, 'flaechenart', flaechenCR, colorRejected, colorChanged);
		if (!isProcessedByClerk('flaechenart', flaechenCR)) {
			changeCounter++;
		}
	} else {
		art = flaeche.flaecheninfo.flaechenart;
		setValidationStringForAttr(validationStates, 'flaechenart', flaechenCR, 'success');
		setColorForAttr(colors, 'flaechenart', flaechenCR, colorAccepted, colorUnchanged);
	}

	if (
		flaechenCR.anschlussgrad !== undefined &&
		flaechenCR.anschlussgrad.grad_abkuerzung !==
			flaeche.flaecheninfo.anschlussgrad.grad_abkuerzung
	) {
		anschlussgrad = flaechenCR.anschlussgrad;
		setValidationStringForAttr(validationStates, 'anschlussgrad', flaechenCR, 'error');
		setColorForAttr(colors, 'anschlussgrad', flaechenCR, colorRejected, colorChanged);
		if (!isProcessedByClerk('anschlussgrad', flaechenCR)) {
			changeCounter++;
		}
	} else {
		anschlussgrad = flaeche.flaecheninfo.anschlussgrad;
		setValidationStringForAttr(validationStates, 'anschlussgrad', flaechenCR, 'success');
		setColorForAttr(colors, 'anschlussgrad', flaechenCR, colorAccepted, colorUnchanged);
	}
	if (changeCounter > 0) {
		edited = true;
	}

	return {
		groesse,
		art,
		anschlussgrad,
		validationStates,
		changeCounter,
		colors,
		edited
	};
};

const isProcessedByClerk = (attr, cr) => {
	console.log('XXcr', cr);

	try {
		if (
			cr !== undefined &&
			cr[attr] !== undefined &&
			cr.pruefung !== undefined &&
			cr.pruefung[attr] !== undefined &&
			cr.pruefung[attr].value !== undefined
		) {
			const crValue = cr[attr];
			const checkValue = cr.pruefung[attr].value;
			console.log('crValue === checkValue', [ crValue, checkValue, crValue === checkValue ]);

			switch (attr) {
				case 'groesse':
					return crValue === checkValue;
				case 'flaechenart':
					return (
						crValue.art_abkuerzung === checkValue.art_abkuerzung &&
						crValue.art === checkValue.art
					);
				case 'anschlussgrad':
					return (
						crValue.grad_abkuerzung === checkValue.grad_abkuerzung &&
						crValue.grad === checkValue.grad
					);
				default:
					return false;
			}
		} else {
			return false;
		}
	} catch (e) {
		console.log('error in isChecked', e);
		console.log('cr', cr);

		return false;
	}
};

const setValidationStringForAttr = (validationStates, attr, flaechenCR, validationString) => {
	if (isProcessedByClerk(attr, flaechenCR)) {
		validationStates[attr] = validationString;
	}
};

const setColorForAttr = (colorStates, attr, flaechenCR, colorProcessed, colorUnprocessed) => {
	if (isProcessedByClerk(attr, flaechenCR)) {
		colorStates[attr] = colorProcessed;
	} else {
		colorStates[attr] = colorUnprocessed;
	}
};

export const getLinkForUUID = (uuid) => {
	return 'https://drive.google.com/file/d/1lgWGVvgG5N7iwINFEQ6OCmG-G-_8jnxe/view?usp=sharing';
};
