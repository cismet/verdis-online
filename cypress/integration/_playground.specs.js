import { actions as MappingActions } from "../../src/redux/modules/mapping";
import { getFlaechenFeatureCollection } from "../../src/utils/kassenzeichenMappingTools";
import L from "leaflet";
import "proj4leaflet";

import { kassenzeichenFlaechenSorter } from "../../src/utils/kassenzeichenHelper";
import { getRelativeInnerPointFromSVGString } from '../support/helper';

const UNSELECTED_COLOR = "#000000";
const SELECTED_COLOR = "#0C7D9D";

describe("Playground tests", () => {
    it("connects to the store", () => {
        cy.visit("/"); //for app init
        cy.window()
            .its("__store__")
            .then(store => {
                const s = store.getState();
                expect(s).to.be.an("object");
                expect(s).to.have.property("kassenzeichen");
                expect(s).to.have.property("auth");
                expect(s).to.have.property("mapping");
                expect(s).to.have.property("uiState");
            });
    });

    it("Fake logged in state", () => {
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
                    store.dispatch(
                        MappingActions.setSelectedFeatureIndex(null)
                    );
                    cy.visit("/#/meinKassenzeichen");
                });
        });
    });

    it.only("logs in via command", () => {
        cy.login();
        cy.window()

            .its("__store__")
            .then(store => {
                const s = store.getState();
                const mapping = s.mapping;
                const flaechen = s.kassenzeichen.flaechen
                    .concat()
                    .sort(kassenzeichenFlaechenSorter);
                cy.wait(500);
                for (let f of flaechen) {
                    cy.wait(50);
                    cy.get(
                        ".leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > .verdis-flaeche-" +
                            f.flaechenbezeichnung
                    ).as("fPathCheck");
                    cy.get("@fPathCheck").then(result => {
                        //calculate a point that lies within the svg path
                        const relPl=getRelativeInnerPointFromSVGString(result[0].attributes.d.nodeValue);
                        
                        cy.get(
                            ".leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > .verdis-flaeche-" +
                                f.flaechenbezeichnung
                        ).as("fPath");
                        
                        // Check that the feature is not selected
                        expect(result[0].attributes.stroke.nodeValue).to.equal(
                            UNSELECTED_COLOR
                        );

                        // Click the  feature
                        cy.get("@fPath").click(relPl[0], relPl[1], {
                            force: true
                        });
                        
                        // Check that the feature has been selected
                        cy.get("@fPath").should(result => {
                            expect(
                                result[0].attributes.stroke.nodeValue
                            ).to.equal(SELECTED_COLOR);
                        });
                    });
                }
            });
    });

    // it("logs in via command", () => {
    //     cy.login();
    //     // cy.get('.leaflet-container').should('be.visible');
    //     // cy.get('.leaflet-control-container')
    //     // cy.get('.leaflet-pane').its('length').should('eq', 7)
    //     // //cy.get('.leaflet-container').click('center');
    //     // cy.get('.leaflet-container').within(()=> {
    //     //     cy.get('.leaflet-pane  .leaflet-overlay-pane').find('.leaflet-interactive').its('length').should('eq', 20);
    //     //     // cy.get('.leaflet-pane  .leaflet-overlay-pane').find('.leaflet-interactive').should((result)=>{
    //     //     //     console.log("-----------------------")
    //     //     //     console.log(result)
    //     //     //     console.log("-----------------------")

    //     //     // });
    //     //     // cy.get('.leaflet-pane  .leaflet-overlay-pane').first('.leaflet-interactive').should((result)=>{
    //     //     //     let path=result[0];
    //     //     //     console.log("-----------------------")
    //     //     //     console.log(path)
    //     //     //     console.log("-----------------------")

    //     //     // });
    //     // });
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(1) ').should((result)=>{
    //     //     console.log(result[0]);
    //     //     console.log(result[0].attributes.stroke.nodeValue)
    //     // });
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(2) ').should((result)=>{
    //     //     console.log(result[0]);
    //     //     console.log(result[0].attributes.stroke.nodeValue)

    //     // });

    //     // for (let i=2; i<17; ++i) {
    //     //     cy.wait(500);
    //     //     cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child('+i+') ').should((result)=>{
    //     //         //expect(result[0].attributes.stroke.nodeValue).to.equal('#000000');
    //     //         console.log(result[0].attributes.stroke.nodeValue)
    //     //     });
    //     //     cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child('+2+') ').click(1,1,{ force: true });
    //     //     cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child('+i+') ').should((result)=>{
    //     //       //  expect(result[0].attributes.stroke.nodeValue).to.equal('##0C7D9D');
    //     //       console.log(result[0].attributes.stroke.nodeValue)
    //     //       console.log("-----")

    //     //     });
    //     // }

    //     // cy.wait(1000);
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(2) ').click({ force: true });
    //     // cy.wait(1000);
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(3) ').click({ force: true });
    //     // cy.wait(1000);
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(4) ').click({ force: true });
    //     // cy.wait(1000);
    //     // cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(5) ').click({ force: true });
    //      cy.wait(1000);
    //      cy.get('.leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g > :nth-child(1) ').click(1,1,{ force: true });

    //     // cy.get(
    //     //     ".leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g >"
    //     // ).as('featureCollection');

    //     // cy.get('@featureCollection').should(result => {
    //     //         console.log(result);

    //     //     });

    //     cy.get(
    //         ".leaflet-container > .leaflet-pane  .leaflet-overlay-pane >> g >"
    //     ).should(result => {
    //         console.log(result);
    //         for (let p of result){
    //             cy.get(p).click({ force: true });
    //         }
    //     });
    // });
});
