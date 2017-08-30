import * as actionTypes from '../constants/actionTypes';
import {
  SERVICE,
  DOMAIN
} from '../constants/cids';
import {
  WAITING_TYPE_ERROR, WAITING_TYPE_INFO
} from '../constants/uiConstants';
import 'whatwg-fetch';

export function toggleInfoElements() {
  return {
    type: actionTypes.TOGGLE_INFO_ELEMENTS
  };
}

export function toggleChartsElements() {
  return {
    type: actionTypes.TOGGLE_CHART_ELEMENTS
  };
}

export function toggleKanalElements() {
  return {
    type: actionTypes.TOGGLE_KANAL_ELEMENTS
  };
}

export function toggleFilterElements() {
  return {
    type: actionTypes.TOGGLE_FILTER_ELEMENT
  };
}

export function toggleDetailsElements() {
  return {
    type: actionTypes.TOGGLE_DETAIL_ELEMENTS
  };
}

export function showSettings(visible) {
  return {
    type: actionTypes.SHOW_SETTINGS,
    visible
  };
}

export function showKassenzeichenSearch(visible) {
  return {
    type: actionTypes.SHOW_KASSENZEICHEN_SEARCH,
    visible
  };
}

export function showWaiting(visible, message, waitingtype) {
  return {
    type: actionTypes.SHOW_WAITING,
    visible,
    message,
    waitingtype
  };
}

export function showInfo(message) {
  return {
    type: actionTypes.SHOW_WAITING,
    visible: true,
    message,
    waitingtype: WAITING_TYPE_INFO
  };
}

export function showError(message) {
  return {
    type: actionTypes.SHOW_WAITING,
    visible: true,
    message,
    waitingtype: WAITING_TYPE_ERROR
  };
}

export function login(user, password) {
  return function (dispatch) {
    dispatch(setLoginInProgress());
    fetch(SERVICE + '/classes?domain=local&limit=1&offset=0&role=all', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa(user + '@' + DOMAIN + ':' + password),
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        dispatch(setLoginInformation(user, password, true));
      } else {
        dispatch(setLoginInformation(user, password, false));
      }
    }).catch(function (err) {
      console.log(err);
        dispatch(showError("Beim Login ist ein Fehler aufgetreten. (" + err + ")"));
        dispatch(invalidateLogin(user, password));
        });
    };
  }

  export function invalidateLogin(username, pass) {
    return function (dispatch) {
      dispatch(setLoginInformation(username, pass, false));
    };
  }

  export function logout() {
    return function (dispatch) {
      dispatch(setLoginInformation(null, null, false));
    };
  }
  export function setLoginInProgress() {
    return {
      type: actionTypes.SET_LOGIN_IN_PROGRESS
    };
  }

  function setLoginInformation(user, password, status) {
    return {
      type: actionTypes.SET_LOGIN_INFORMATION,
      user,
      password,
      status
    };

  }

  export function changeLayerOpacitySetting(key, opacity) {
    return {
      type: actionTypes.CHANGE_LAYER_OPACITY,
      key,
      opacity
    };
  }
  export function changeLayerEnabledSetting(key, enabled) {
    return {
      type: actionTypes.CHANGE_LAYER_ENABLED,
      key,
      enabled
    };
  }

  export function screenResize(height,width) {
    return {
        type: actionTypes.SCREEN_RESIZE,
        width: width,
        height: height,
    };
}