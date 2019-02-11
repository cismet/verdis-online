

describe('Common tests', () => {

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

    it('logs in via command', () => {
        cy.login();
        cy.hash().should('match', /#\/meinkassenzeichen\?lat=51\..*&lng=7\..*&zoom=.*/); 
    });

    it('find menu buttons with id', () => {
        cy.login();
        cy.get('#verdis_online_brand').should('be.visible');
        cy.get('#navitem_showSettings').should('be.visible');
        cy.get('#navitem_downloadFEB').should('be.visible');
        cy.get('#navitem_infoElementsEnabled').should('be.visible');
        cy.get('#navitem_chartElementsEnabled').should('be.visible');
        cy.get('#navitem_detailElementsEnabled').should('be.visible');
        cy.get('#navitem_logout').should('be.visible');
    });
});
