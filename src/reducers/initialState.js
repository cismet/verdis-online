import {VERSIEGELTE_FLAECHEN} from '../constants/appModes';

export default {
    kassenzeichen: {
        id: -1
    },
    featureCollection: [],
    uiState: {
        mainMode: VERSIEGELTE_FLAECHEN,
        infoElementsEnabled: true,
        chartElementsEnabled: true,
        kanalElementsEnabled: false,
        filterElementEnabled: false,
        detailElementsEnabled: true,
        user: null,
        layers: [
            {
                key: "Osm",
                opacity:  0.8,
                enabled: true
            },
            {
                key: "StadtgrundKarteABK",
                opacity:  0.55,
                enabled: false
            },
        ]
    }
};