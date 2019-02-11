// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { actions as MappingActions } from "../../src/redux/modules/mapping";
import { getFlaechenFeatureCollection } from "../../src/utils/kassenzeichenMappingTools";

Cypress.Commands.add("login", (email, password) => {
    cy.visit("/"); //for app init
    cy.fixture("6043251").then(json => {
        cy.window()
            .its("__store__")
            .then(store => {
                store.dispatch({
                    type: "AUTH/SET_STAC",
                    stac: "XXXXYYYYZZZZ"
                });
                store.dispatch({
                    type: "KASSENZEICHEN/SET_KASSENZEICHEN",
                    kassenzeichenObject: json
                });
                store.dispatch(
                    MappingActions.setFeatureCollection(
                        getFlaechenFeatureCollection(json)
                    )
                );
                store.dispatch(MappingActions.setSelectedFeatureIndex(null));
                cy.visit("/#/meinkassenzeichen");
            });
    });
});

// Cypress.Commands.add('getFeatureCollectionPath',(n)=> {
//     cy.get(
//         ".leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g >"
//     )
// });
