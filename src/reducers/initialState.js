import {
  VERSIEGELTE_FLAECHEN
} from '../constants/appModes';
import {
  WAITING_TYPE_MESSAGE
} from '../constants/uiConstants';

export default {
  kassenzeichen: {
    id: -1
  },
  mapping: {
    featureCollection: [],
    bounds: null,
    boundsFittingEnabled: false
  },
  uiState: {
    mainMode: VERSIEGELTE_FLAECHEN,
    infoElementsEnabled: true,
    chartElementsEnabled: true,
    kanalElementsEnabled: false,
    filterElementEnabled: false,
    detailElementsEnabled: true,

    user: null,
    password: null,
    succesfullLogin: false,
    loginInProgress: false,

    settingsVisible: false,

    waitingVisible: false,
    waitingMessage: null,
    waitingType: WAITING_TYPE_MESSAGE,
    waitingUIAnimation: true,

    searchKassenzeichenVisible: false,

    layers: [{
        key: "Osm",
        opacity: 1,
        enabled: true
      },
      {
        key: "StadtgrundKarteABK",
        opacity: 1,
        enabled: false
      },
      {
        key: "Ortho2014",
        opacity: 0.6,
        enabled: false
      }
    ],
  }
};
