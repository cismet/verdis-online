describe('Setting dialog tests', () => {

    it('opens the settings dialog', () => {
        cy.login();
        cy.get('#navitem_showSettings').click({force: true});
        cy.get('.modal-title').contains("h4", "Hilfe & Einstellungen von VerDIS-online").should('be.visible');
    });
});
