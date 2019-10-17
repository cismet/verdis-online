import React from 'react';
import IconForAttribute from '../commons/IconForAttribute';
import {
	faSpinner,
	faFilePdf,
	faFileWord,
	faFile,
	faFileImage,
	faFileExcel,
	faFileArchive,
	faFileAlt
} from '@fortawesome/free-solid-svg-icons';

const iconAttributeMap = {
	default: faFile,
	pdf: faFilePdf,
	doc: faFileWord,
	docx: faFileWord,
	png: faFileImage,
	jpg: faFileImage,
	jpeg: faFileImage,
	bmp: faFileImage,
	tif: faFileImage,
	tiff: faFileImage,
	zip: faFileArchive,
	xls: faFileExcel,
	xlsx: faFileExcel,
	csv: faFileExcel,
	txt: faFileAlt
};

const Comp = ({ fileEnding }) => {
	if (iconAttributeMap[fileEnding] === undefined) {
		fileEnding = 'default';
	}

	return <IconForAttribute iconAttributeMap={iconAttributeMap} value={fileEnding} />;
};
export default Comp;
