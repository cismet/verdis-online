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
    width: -1,
    height: -1,
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
        key: "ABK in Graustufen",
        opacity: 0.5,
        enabled: true
      },
      {
        key: "ABK in Farbe",
        opacity: 0.5,
        enabled: false
      },
      {
        key: "Luftbilder (NRW)",
        opacity: 0.5,
        enabled: false
      }
    ],
  }
};
