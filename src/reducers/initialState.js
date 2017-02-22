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
        settingsVisible: false,
        waitingVisible: false,
        layers: [
            {
                key: "Osm",
                opacity:  1,
                enabled: true
            },
            {
                key: "StadtgrundKarteABK",
                opacity:  1,
                enabled: false
            },
             {
                key: "Ortho2014",
                opacity:  0.6,
                enabled: false
            }
        ]
    }
};
