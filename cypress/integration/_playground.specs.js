import {
    actions as MappingActions
} from '../../src/redux/modules/mapping';
import {
    getFlaechenFeatureCollection,
} from '../../src/utils/kassenzeichenMappingTools';




describe('Playground tests', () => {

    it('connects to the store', () => {
        cy.visit("/") //for app init
        cy.window().its('__store__').then((store) => {
            const s=store.getState();
            expect(s).to.be.an('object');
            expect(s).to.have.property('kassenzeichen')
            expect(s).to.have.property('auth')
            expect(s).to.have.property('mapping')
            expect(s).to.have.property('uiState')
        })
        
    });

    it('Fake logged in state', () => {
        cy.visit("/") //for app init
        cy.fixture('6043251').then((json) => {
            cy.window().its('__store__').then((store) => {
                store.dispatch({
                    type: "AUTH/SET_STAC",
                    stac: "XXXXYYYYZZZZ"
                });
                store.dispatch({
                    type: "KASSENZEICHEN/SET_KASSENZEICHEN",
                    kassenzeichenObject: json
                });
                store.dispatch(MappingActions.setFeatureCollection(getFlaechenFeatureCollection(json)));
                cy.visit("/#/meinKassenzeichen");
            })
        })
    });
    it.only('logs in via command', () => {
        cy.login();
    });
});
