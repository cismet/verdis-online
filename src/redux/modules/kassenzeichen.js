import objectAssign from 'object-assign';
import { SERVICE, DOMAIN, STAC_SERVICE } from '../../constants/cids';

import { appModes as APP_MODES } from '../../constants/uiConstants';
import { actions as UiStateActions } from './uiState';
import { actions as AuthActions } from './auth';
import { actions as MappingActions } from './mapping';
import { routerActions as RoutingActions } from 'react-router-redux';
import {
	getFlaechenFeatureCollection,
	getFrontenFeatureCollection,
	getKassenzeichenInfoFeatureCollection
} from '../../utils/kassenzeichenMappingTools';
import { changeKassenzeichenInLocation } from '../../utils/routingHelper';

///TYPES
export const types = {
	SET_KASSENZEICHEN: 'KASSENZEICHEN/SET_KASSENZEICHEN'
};

///INITIAL STATE
const initialState = {
	id: -1
};

///REDUCER
export default function kassenzeichenReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case types.SET_KASSENZEICHEN: {
			newState = objectAssign({}, state);
			let test = action.kassenzeichenObject;
			if (test) {
				newState = test;
			}
			return newState;
		}
		default:
			return state;
	}
}

///SIMPLEACTIONCREATORS
function setKassenzeichenObject(kassenzeichenObject) {
	return {
		type: types.SET_KASSENZEICHEN,
		kassenzeichenObject
	};
}

//ACTIONS
function searchByKassenzeichenId(kassenzeichenId, fitBounds) {
	return function(dispatch, getState) {
		dispatch(d3AvailabilityCheck());
		dispatch(UiStateActions.setKassenzeichenSearchInProgress(true));
		dispatch(UiStateActions.showWaiting(true, 'Kassenzeichen laden ...'));
		const state = getState();
		let username = state.auth.user;
		let pass = state.auth.password;
		fetch(
			SERVICE +
				'/' +
				DOMAIN +
				'.KASSENZEICHEN/' +
				kassenzeichenId +
				'?role=all&omitNullValues=true&deduplicate=false',
			{
				method: 'GET',
				headers: {
					Authorization: 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
					'Content-Type': 'application/json'
				}
			}
		)
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(kassenzeichenData) {
						dispatch(UiStateActions.showWaiting(false));
						dispatch(setKassenzeichenObject(kassenzeichenData));
						dispatch(
							RoutingActions.push(
								changeKassenzeichenInLocation(
									state.routing.location,
									kassenzeichenData.kassenzeichennummer8
								)
							)
						);
						switch (state.uiState.mode) {
							case APP_MODES.VERSIEGELTE_FLAECHEN:
								dispatch(
									MappingActions.setFeatureCollection(getFlaechenFeatureCollection(kassenzeichenData))
								);
								break;
							case APP_MODES.ESW:
								dispatch(
									MappingActions.setFeatureCollection(getFrontenFeatureCollection(kassenzeichenData))
								);
								break;
							case APP_MODES.INFO:
								dispatch(
									MappingActions.setFeatureCollection(
										getKassenzeichenInfoFeatureCollection(kassenzeichenData)
									)
								);
								break;
							case APP_MODES.VERSICKERUNG:
								dispatch(
									MappingActions.setFeatureCollection(getFlaechenFeatureCollection(kassenzeichenData))
								);
								break;
							default:
						}
						dispatch(MappingActions.setSelectedFeatureIndex(null));

						dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
						if (fitBounds) {
							dispatch(MappingActions.fitAll());
						}
					});
				} else if (response.status === 401) {
					dispatch(UiStateActions.showWaiting(false));
					dispatch(AuthActions.invalidateLogin(username, pass, false));
					dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				}
			})
			.catch(function(err) {
				dispatch(
					UiStateActions.showError(
						'Bem Öffnen des Kassenzeichens mit der Id ' +
							kassenzeichenId +
							' ist ein Fehler aufgetreten. (' +
							err +
							')'
					)
				);
				dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
			});
	};
}

function getKassenzeichenbySTAC(stac, callback) {
	return function(dispatch, getState) {
		let taskParameters = {
			parameters: {
				STAC: stac
			}
		};

		let fd = new FormData();
		fd.append(
			'taskparams',
			new Blob([ JSON.stringify(taskParameters) ], {
				type: 'application/json'
			})
		);
		dispatch(AuthActions.logout());
		dispatch(AuthActions.setLoginInProgress('Anmelden ...'));
		const url =
			STAC_SERVICE + '/actions/' + DOMAIN + '.getMyKassenzeichen/tasks?role=all&resultingInstanceType=result';

		fetch(url, {
			method: 'post',
			body: fd
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(actionResult) {
						const kassenzeichenData = JSON.parse(actionResult.res);
						
						//console.log(JSON.stringify(kassenzeichenData,2,null))
						if (kassenzeichenData.nothing) {
							dispatch(AuthActions.logout());
							if (typeof callback === 'function') {
								callback(false);
							}
						} else {
							dispatch(setKassenzeichenObject(kassenzeichenData));
							dispatch(
								MappingActions.setFeatureCollection(getFlaechenFeatureCollection(kassenzeichenData))
							);
							dispatch(MappingActions.setSelectedFeatureIndex(null));
							dispatch(MappingActions.fitAll());
							dispatch(AuthActions.setStac(stac));
							dispatch(
								getFEBByStac(
									stac,
									(blob) => {
										dispatch(UiStateActions.setFebBlob(blob));
									},
									true
								)
							);

							if (typeof callback === 'function') {
								callback(true);
							}
						}
					});
				} else {
					//Errorhandling
					dispatch(AuthActions.logout());
					if (typeof callback === 'function') {
						callback(false);
					}
					// dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. ( ErrorCode: " + response.status + ")"));
					// dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				}
			})
			.catch(function(err) {
				// dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. (" + err + ")"));
				// dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				console.log('Error in action' + err);
				dispatch(AuthActions.logout());
				if (typeof callback === 'function') {
					callback(false);
				}
			});
	};
}

function getFEBByStac(stac, callback, silent = false) {
	return function(dispatch, getState) {
		if (silent === false) {
			dispatch(UiStateActions.showInfo('FEB wird erzeugt'));
		}
		let taskParameters = {
			parameters: {
				STAC: stac
			}
		};

		let fd = new FormData();
		fd.append(
			'taskparams',
			new Blob([ JSON.stringify(taskParameters) ], {
				type: 'application/json'
			})
		);

		const url = STAC_SERVICE + '/actions/' + DOMAIN + '.getMyFEB/tasks?role=all&resultingInstanceType=result';
		fetch(url, {
			method: 'post',
			body: fd
		})
			.then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				} else {
					console.log('Error:' + response.status + ' -> ' + response.statusText);
				}
			})
			.catch((e) => {
				console.log(e);
			})
			.then((result) => {
				if (result && !result.error && result.res !== '{"nothing":"at all"}') {
					let byteCharacters = atob(result.res);
					let byteNumbers = new Array(byteCharacters.length);
					for (let i = 0; i < byteCharacters.length; i++) {
						byteNumbers[i] = byteCharacters.charCodeAt(i);
					}

					let byteArray = new Uint8Array(byteNumbers);

					var blob = new Blob([ byteArray ], { type: 'application/pdf' });
					callback(blob);
					if (silent === false) {
						dispatch(UiStateActions.showWaiting(false));
					}
				} else {
					if (silent === false) {
						dispatch(UiStateActions.showWaiting(false));
					}
					console.log(result);
				}
			});
	};
}

function searchByKassenzeichen(kassenzeichen, fitBounds) {
	return function(dispatch, getState) {
		dispatch(UiStateActions.setKassenzeichenSearchInProgress(true));
		dispatch(UiStateActions.showWaiting(true, 'Kassenzeichen suchen ...'));
		const query = {
			list: [
				{
					key: 'searchString',
					value: kassenzeichen + ''
				}
			]
		};
		const state = getState();
		let username = state.auth.user;
		let pass = state.auth.password;

		fetch(
			SERVICE +
				'/searches/VERDIS_GRUNDIS.de.cismet.verdis.server.search.KassenzeichenSearchStatement/results?role=all&limit=100&offset=0',
			{
				method: 'post',
				headers: {
					Authorization: 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(query)
			}
		)
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(queryResult) {
						if (queryResult.$collection.length === 1) {
							dispatch(UiStateActions.setKassenzeichenToSearchFor(null));
							dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID, fitBounds));
						} else if (queryResult.$collection.length < 1) {
							dispatch(
								UiStateActions.showError(
									'Es konnte kein Kassenzeichen ' + kassenzeichen + ' gefunden werden.'
								)
							);
						} else {
							dispatch(
								UiStateActions.showError(
									'Kassenzeichen ' + kassenzeichen + ' lieferte keinen eindeutigen Treffer.'
								)
							);
						}
					});
				} else if (response.status === 401) {
					dispatch(UiStateActions.showWaiting(false));
					dispatch(UiStateActions.setKassenzeichenToSearchFor(kassenzeichen));
					dispatch(AuthActions.invalidateLogin(username, pass, false));
					dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				} else {
					//Errorhandling
					dispatch(
						UiStateActions.showError(
							'Bei der Suche nach dem Kassenzeichen ' +
								kassenzeichen +
								' ist ein Fehler aufgetreten. ( ErrorCode: ' +
								response.status +
								')'
						)
					);
					dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				}
			})
			.catch(function(err) {
				dispatch(
					UiStateActions.showError(
						'Bei der Suche nach dem Kassenzeichen ' +
							kassenzeichen +
							' ist ein Fehler aufgetreten. (' +
							err +
							')'
					)
				);
				dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
			});
	};
}

function searchByPoint(x, y, fitBounds) {
	return function(dispatch, getState) {
		dispatch(UiStateActions.setKassenzeichenSearchInProgress(true));
		dispatch(UiStateActions.showWaiting(true, 'Kassenzeichen suchen ...'));
		const query = {
			list: [
				{
					key: 'wktString',
					value: 'POINT (' + x + ' ' + y + ');'
				},
				{
					key: 'flaecheFilter',
					value: true
				}
			]
		};
		const state = getState();
		let username = state.auth.user;
		let pass = state.auth.password;
		fetch(
			SERVICE +
				'/searches/VERDIS_GRUNDIS.de.cismet.verdis.server.search.KassenzeichenNodeByWKTSearch/results?role=all&limit=100&offset=0',
			{
				method: 'post',
				headers: {
					Authorization: 'Basic ' + btoa(username + '@' + DOMAIN + ':' + pass),
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(query)
			}
		)
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(queryResult) {
						if (queryResult.$collection.length === 1) {
							dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID, fitBounds));
						} else if (queryResult.$collection.length < 1) {
							dispatch(UiStateActions.showInfo('Hier konnte kein Kassenzeichen gefunden werden.'));
							setTimeout(() => {
								dispatch(UiStateActions.showWaiting(false));
							}, 1000);
						} else {
							//TODO: could show a list with hits but for now just the first hit
							dispatch(searchByKassenzeichenId(queryResult.$collection[0].LEGACY_OBJECT_ID, fitBounds));
						}
					});
				} else if (response.status === 401) {
					dispatch(UiStateActions.showWaiting(false));
					dispatch(AuthActions.invalidateLogin(username, pass, false));
				} else {
					//Errorhandling
					dispatch(
						UiStateActions.showError(
							'Bei der Suche an dem Punkt ' +
								x +
								' ,' +
								y +
								' ist ein Fehler aufgetreten. ( ErrorCode: ' +
								response.status +
								')'
						)
					);
				}
			})
			.catch(function(err) {
				dispatch(
					UiStateActions.showError(
						'Bei der Suche an dem Punkt ' + x + ' ,' + y + ' ist ein Fehler aufgetreten. (' + err + ')'
					)
				);
			});
	};
}
function openD3() {
	return function(dispatch, getState) {
		const state = getState();

		fetch(
			'https://localhost.certified.by.cismet.de:3033/open-d3?kassenzeichen=' +
				state.kassenzeichen.kassenzeichennummer8,
			{ method: 'get' }
		)
			.then(function(response) {
				if (response.status === 200) {
					//console.log(response);
				} else {
					dispatch(UiStateActions.setD3Availability(false));
				}
			})
			.catch(() => {
				dispatch(UiStateActions.setD3Availability(false));
			});
	};
}
function d3AvailabilityCheck() {
	return function(dispatch) {
		fetch('https://localhost.certified.by.cismet.de:3033/open-d3-available', { method: 'head' })
			.then(function(response) {
				dispatch(UiStateActions.setD3Availability(response.status === 200));
			})
			.catch(() => {
				dispatch(UiStateActions.setD3Availability(false));
			});
	};
}

export const actions = {
	setKassenzeichenObject,
	searchByKassenzeichenId,
	searchByKassenzeichen,
	searchByPoint,
	openD3,
	d3AvailabilityCheck,
	getKassenzeichenbySTAC,
	getFEBByStac
};
