import objectAssign from 'object-assign';
import { SERVICE, DOMAIN, STAC_SERVICE } from '../../constants/cids';

import { appModes as APP_MODES } from '../../constants/uiConstants';
import { actions as UiStateActions, CLOUDSTORAGESTATES } from './uiState';
import { actions as AuthActions } from './auth';
import { actions as MappingActions } from './mapping';
import { routerActions as RoutingActions } from 'react-router-redux';
import {
	getFlaechenFeatureCollection,
	getFrontenFeatureCollection,
	getKassenzeichenInfoFeatureCollection,
	getAnnotationFeatureCollection
} from '../../utils/kassenzeichenMappingTools';
import { changeKassenzeichenInLocation } from '../../utils/routingHelper';
import { mockchangerequests } from './mockData';

import { toArabic, toRoman } from 'roman-numerals';

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
								const flaechenFC = getFlaechenFeatureCollection(kassenzeichenData);
								const annoFC = getAnnotationFeatureCollection(
									state.kassenzeichen.aenderungsanfrage
								);
								dispatch(
									MappingActions.setFeatureCollection([
										...flaechenFC,
										...annoFC
									])
								);
								break;
							case APP_MODES.ESW:
								dispatch(
									MappingActions.setFeatureCollection(
										getFrontenFeatureCollection(kassenzeichenData)
									)
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
									MappingActions.setFeatureCollection(
										getFlaechenFeatureCollection(kassenzeichenData)
									)
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
		const state = getState();
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
			STAC_SERVICE +
			'/actions/' +
			DOMAIN +
			'.getMyKassenzeichen/tasks?role=all&resultingInstanceType=result';

		fetch(url, {
			method: 'post',
			body: fd
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(actionResult) {
						const kassenzeichenData = JSON.parse(actionResult.res);

						// kassenzeichenData.aenderungsanfrage =
						// 	mockchangerequests[kassenzeichenData.kassenzeichennummer8];

						//console.log('XXXX', kassenzeichenData);
						//console.log(JSON.stringify(kassenzeichenData,2,null))
						if (kassenzeichenData.nothing) {
							dispatch(AuthActions.logout());
							if (typeof callback === 'function') {
								callback(false);
							}
						} else {
							dispatch(setKassenzeichenObject(kassenzeichenData));
							const flaechenFC = getFlaechenFeatureCollection(kassenzeichenData);
							const annoFC = getAnnotationFeatureCollection(
								kassenzeichenData.aenderungsanfrage
							);

							dispatch(
								MappingActions.setFeatureCollection([ ...flaechenFC, ...annoFC ])
							);

							// dispatch(
							// 	MappingActions.setFeatureCollection(
							// 		getFlaechenFeatureCollection(kassenzeichenData)
							// 	)
							// );
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

		const url =
			STAC_SERVICE +
			'/actions/' +
			DOMAIN +
			'.getMyFEB/tasks?role=all&resultingInstanceType=result';
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
							dispatch(
								searchByKassenzeichenId(
									queryResult.$collection[0].LEGACY_OBJECT_ID,
									fitBounds
								)
							);
						} else if (queryResult.$collection.length < 1) {
							dispatch(
								UiStateActions.showError(
									'Es konnte kein Kassenzeichen ' +
										kassenzeichen +
										' gefunden werden.'
								)
							);
						} else {
							dispatch(
								UiStateActions.showError(
									'Kassenzeichen ' +
										kassenzeichen +
										' lieferte keinen eindeutigen Treffer.'
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
							dispatch(
								searchByKassenzeichenId(
									queryResult.$collection[0].LEGACY_OBJECT_ID,
									fitBounds
								)
							);
						} else if (queryResult.$collection.length < 1) {
							dispatch(
								UiStateActions.showInfo(
									'Hier konnte kein Kassenzeichen gefunden werden.'
								)
							);
							setTimeout(() => {
								dispatch(UiStateActions.showWaiting(false));
							}, 1000);
						} else {
							//TODO: could show a list with hits but for now just the first hit
							dispatch(
								searchByKassenzeichenId(
									queryResult.$collection[0].LEGACY_OBJECT_ID,
									fitBounds
								)
							);
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
						'Bei der Suche an dem Punkt ' +
							x +
							' ,' +
							y +
							' ist ein Fehler aufgetreten. (' +
							err +
							')'
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

function setChangeRequests(crs) {
	return function(dispatch, getState) {
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));
		newKassz.aenderungsanfrage = crs;
		dispatch(setKassenzeichenObject(newKassz));
		dispatch(storeCR(newKassz.aenderungsanfrage));
	};
}

function setChangeRequestsForFlaeche(flaeche, crs) {
	return function(dispatch, getState) {
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));
		if (newKassz.aenderungsanfrage === undefined || newKassz.aenderungsanfrage === null) {
			newKassz.aenderungsanfrage = {
				kassenzeichen: newKassz.kassenzeichennummer8,
				flaechen: {},
				nachrichten: [],
				annotations: []
			};
		} else if (newKassz.aenderungsanfrage.flaechen === undefined) {
			newKassz.aenderungsanfrage.flaechen = {};
		}
		newKassz.aenderungsanfrage.flaechen[flaeche.flaechenbezeichnung] = crs;
		dispatch(setKassenzeichenObject(newKassz));
		dispatch(storeCR(newKassz.aenderungsanfrage));
	};
}
function addChangeRequestMessage(msg) {
	return function(dispatch, getState) {
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));

		if (newKassz.aenderungsanfrage === undefined || newKassz.aenderungsanfrage === null) {
			newKassz.aenderungsanfrage = {
				kassenzeichen: newKassz.kassenzeichennummer8,
				flaechen: [],
				nachrichten: [ msg ],
				geometrien: {}
			};
		} else {
			if (
				newKassz.aenderungsanfrage.nachrichten === undefined ||
				newKassz.aenderungsanfrage.nachrichten === null
			) {
				newKassz.aenderungsanfrage.nachrichten = [];
			}
			const sMsgs = newKassz.aenderungsanfrage.nachrichten.sort(
				(a, b) => a.timestamp - b.timestamp
			);
			if (
				sMsgs.length !== 0 &&
				sMsgs[sMsgs.length - 1].typ === 'CITIZEN' &&
				sMsgs[sMsgs.length - 1].draft === true
			) {
				//last Message is from citizen, so add stuff to it

				//1. Messagetext
				if (msg.nachricht !== undefined && msg.nachricht !== '') {
					if (
						sMsgs[sMsgs.length - 1].nachricht != undefined &&
						sMsgs[sMsgs.length - 1].nachricht.trim() != ''
					) {
						sMsgs[sMsgs.length - 1].nachricht =
							sMsgs[sMsgs.length - 1].nachricht + '\n' + msg.nachricht;
					} else {
						sMsgs[sMsgs.length - 1].nachricht = msg.nachricht;
					}
				}

				//2. Messageatachments
				if (msg.anhang !== undefined) {
					if (sMsgs[sMsgs.length - 1].anhang != undefined) {
						msg.anhang.forEach((doc) => sMsgs[sMsgs.length - 1].anhang.push(doc));
					} else {
						sMsgs[sMsgs.length - 1].anhang = msg.anhang;
					}
				}
			} else if (
				(msg.anhang !== undefined && msg.anhang.length > 0) ||
				(msg.nachricht !== undefined && msg.nachricht.trim() !== '')
			) {
				newKassz.aenderungsanfrage.nachrichten.push(msg);
			}
		}
		dispatch(setKassenzeichenObject(newKassz));
		dispatch(storeCR(newKassz.aenderungsanfrage));
	};
}
function removeLastChangeRequestMessage() {
	return function(dispatch, getState) {
		console.log('removeLastChangeRequestMessage');

		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));
		const sMsgs = newKassz.aenderungsanfrage.nachrichten.sort(
			(a, b) => a.timestamp - b.timestamp
		);
		const lastMsg = sMsgs[sMsgs.length - 1];
		if (lastMsg.typ === 'CITIZEN' && lastMsg.draft === true) {
			sMsgs.length = sMsgs.length - 1;
			newKassz.aenderungsanfrage.nachrichten = sMsgs;
		}

		dispatch(storeCR(newKassz.aenderungsanfrage));
		dispatch(setKassenzeichenObject(newKassz));
	};
}

function addCRDoc(file, callback) {
	return function(dispatch, getState) {
		const stac = getState().auth.stac;

		let taskParameters = {
			parameters: {
				fileName: file.name,
				stac
			}
		};
		console.log('taskParameters', taskParameters);

		let fd = new FormData();
		fd.append('file', new Blob([ file ]));

		fd.append(
			'taskparams',
			new Blob([ JSON.stringify(taskParameters) ], {
				type: 'application/json'
			})
		);

		const STAC_SERVICE_ = 'https://eneywvj94f7b6.x.pipedream.net/';
		const url =
			STAC_SERVICE +
			'/actions/' +
			DOMAIN +
			'.uploadChangeRequestAnhang/tasks?role=all&resultingInstanceType=result';

		fetch(url, {
			method: 'post',
			body: fd
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(result) {
						callback(result.res);
					});
				}
			})
			.catch(function(err) {
				// dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. (" + err + ")"));
				// dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				console.log('Error in action' + err);
				dispatch(AuthActions.logout());
				if (typeof callback === 'function') {
					//callback(false);
				}
			});
	};
}

function storeCR(
	cr,
	callback = (payload) => {
		console.log('Stored CR', payload);
	}
) {
	console.log('__CR', cr);

	return function(dispatch, getState) {
		dispatch(UiStateActions.setCloudStorageStatus(CLOUDSTORAGESTATES.CLOUD_STORAGE_UP));
		const stac = getState().auth.stac;
		let taskParameters = {
			parameters: {
				changerequestJson: cr,
				stac,
				email: 'max.mustermann@cismet.de'
			}
		};

		let fd = new FormData();

		fd.append(
			'taskparams',
			new Blob([ JSON.stringify(taskParameters) ], {
				type: 'application/json'
			})
		);
		const STAC_SERVICE_ = 'https://eneywvj94f7b6.x.pipedream.net/';

		const url =
			STAC_SERVICE +
			'/actions/' +
			DOMAIN +
			'.kassenzeichenChangeRequest/tasks?role=all&resultingInstanceType=result';

		fetch(url, {
			method: 'post',
			body: fd
		})
			.then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					response.json().then(function(result) {
						callback(result.res);
						setTimeout(() => {
							dispatch(UiStateActions.setCloudStorageStatus(undefined));
						}, 100);
					});
				}
			})
			.catch(function(err) {
				// dispatch(UiStateActions.showError("Bei der Suche nach dem Kassenzeichen " + kassenzeichen + " ist ein Fehler aufgetreten. (" + err + ")"));
				// dispatch(UiStateActions.setKassenzeichenSearchInProgress(false));
				console.log('Error in action' + err);
				dispatch(AuthActions.logout());
				if (typeof callback === 'function') {
					//callback(false);
				}
			});
	};
}

function submitCR() {
	return function(dispatch, getState) {
		dispatch(UiStateActions.setCloudStorageStatus(CLOUDSTORAGESTATES.CLOUD_STORAGE_UP));
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));

		const state = getState();
		const stac = state.auth.stac;
		if (
			newKassz.aenderungsanfrage !== undefined &&
			newKassz.aenderungsanfrage !== null &&
			newKassz.aenderungsanfrage.flaechen !== undefined
		) {
			if (newKassz.aenderungsanfrage.nachrichten === undefined) {
				newKassz.aenderungsanfrage.nachrichten = [];
			}
			const changerequestBezeichnungsArray = Object.keys(newKassz.aenderungsanfrage.flaechen);
			changerequestBezeichnungsArray.map((flaechenbezeichnung, index) => {
				newKassz.aenderungsanfrage.flaechen[flaechenbezeichnung].draft = false;
			});

			const changerequestMessagesArray = newKassz.aenderungsanfrage.nachrichten;
			changerequestMessagesArray.map((msg) => {
				if (msg.draft === true) {
					msg.draft = false;
				}
			});

			dispatch(setKassenzeichenObject(newKassz));
			dispatch(storeCR(newKassz.aenderungsanfrage));
		}
	};
}

export function getNumberOfPendingChanges(cr) {
	let crCounter = 0;
	let crDraftCounter = 0;
	if (cr !== undefined && cr !== null) {
		if (cr.flaechen !== undefined && cr.flaechen != null) {
			const changerequestBezeichnungsArray = Object.keys(cr.flaechen);
			changerequestBezeichnungsArray.map((flaechenbezeichnung, index) => {
				const crf = cr.flaechen[flaechenbezeichnung];
				if (crf.draft === true) {
					if (crf.groesse != undefined) {
						crDraftCounter++;
					}
					if (crf.flaechenart != undefined) {
						crDraftCounter++;
					}
					if (crf.anschlussgrad != undefined) {
						crDraftCounter++;
					}
				} else {
					if (crf.groesse != undefined) {
						crCounter++;
					}
					if (crf.flaechenart != undefined) {
						crCounter++;
					}
					if (crf.anschlussgrad != undefined) {
						crCounter++;
					}
				}
			});
		}
		if (cr.nachrichten !== undefined && cr.nachrichten !== null) {
			const changerequestMessagesArray = cr.nachrichten;
			changerequestMessagesArray.map((msg) => {
				if (msg.draft === true) {
					if (msg.nachricht !== undefined && msg.nachricht.trim() !== '') {
						crDraftCounter++;
					}
					if (msg.anhang !== undefined && msg.anhang.length > 0) {
						crDraftCounter += msg.anhang.length;
					}
				}
			});
		}
	}
	return { crDraftCounter, crCounter };
}

function addAnnotation(annotationFeature) {
	return function(dispatch, getState) {
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));
		const feature = JSON.parse(JSON.stringify(annotationFeature));

		const annotationCount = Object.keys((newKassz.aenderungsanfrage || {}).geometrien || {})
			.length;
		feature.id = 'anno.' + (annotationCount + 1);
		const annotationName = toRoman(annotationCount + 1);
		feature.properties.name = annotationName;
		feature.properties.id = feature.id;

		feature.properties.draft = true;

		if (newKassz.aenderungsanfrage === undefined || newKassz.aenderungsanfrage === null) {
			newKassz.aenderungsanfrage = {
				kassenzeichen: newKassz.kassenzeichennummer8,
				flaechen: [],
				nachrichten: [],
				geometrien: { annotationName: feature }
			};
		} else {
			if (
				newKassz.aenderungsanfrage.geometrien === undefined ||
				newKassz.aenderungsanfrage.geometrien === null
			) {
				newKassz.aenderungsanfrage.geometrien = {};
			}
			newKassz.aenderungsanfrage.geometrien[annotationName] = feature;
		}
		dispatch(setKassenzeichenObject(newKassz));
		dispatch(storeCR(newKassz.aenderungsanfrage));
	};
}

function changeAnnotation(annotation) {
	return function(dispatch, getState) {
		const kassenzeichen = getState().kassenzeichen;
		const newKassz = JSON.parse(JSON.stringify(kassenzeichen));
		if (newKassz.aenderungsanfrage.geometrien !== undefined) {
			newKassz.aenderungsanfrage.geometrien[annotation.properties.name] = annotation;
		}
		dispatch(storeCR(newKassz.aenderungsanfrage));
		dispatch(setKassenzeichenObject(newKassz));
	};
}
// console.log('acceptedFiles', acceptedFiles);
// const reader = new FileReader();

// reader.onabort = () => console.log('file reading was aborted');
// reader.onerror = () => console.log('file reading has failed');
// reader.onload = (x) => {
// 	// Do whatever you want with the file contents
// 	const binaryStr = reader.result;
// 	console.log('acceptedFiles', x);
// 	//uploadCRDoc()
// };

//acceptedFiles.forEach((file) => reader.readAsBinaryString(file));

export const actions = {
	setKassenzeichenObject,
	searchByKassenzeichenId,
	searchByKassenzeichen,
	searchByPoint,
	openD3,
	d3AvailabilityCheck,
	getKassenzeichenbySTAC,
	getFEBByStac,
	setChangeRequests,
	setChangeRequestsForFlaeche,
	addChangeRequestMessage,
	removeLastChangeRequestMessage,
	addCRDoc,
	storeCR,
	submitCR,
	addAnnotation,
	changeAnnotation
};
