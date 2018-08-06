
describe('Playground tests', () => {
    it('text Input tests', () => {
        cy.visit("/");
        cy.get('input').should('be.enabled');
        cy.get('input').should('have.class', 'form-control');
        cy.get('input').should('have.attr', 'name', 'stac');
        cy.focused().should('have.class', 'form-control');
        cy.get('input').type("111").should('have.value', '');
        cy.get('input').type("%$§").should('have.value', '');
        cy.get('input').type("1aa1").should('have.value', 'AA  -    -    ');
        cy.get('input').type("aaaa").should('have.value', 'AAAA-    -    ');
    });

    it.only('Input invalid STAC', () => {
        cy.visit("/");
        cy.server();
            let nope= {
                nothing: "at all"
            };
            let result={
                res: JSON.stringify(nope)
            };
            cy.route(
                'POST', 
                'http://192.168.178.69:8890/actions/VERDIS_GRUNDIS.getMyKassenzeichen/tasks?role=all&resultingInstanceType=result', 
                result
            );
            cy.get('input').type("WRON-WRON-GWRO");

    });

    it('Input valid STAC', () => {
        cy.fixture('6043251').as('6043251.JSON').then((kassenzeichen) => {
            cy.visit("/");

            cy.server();
            let result={
                res: JSON.stringify(kassenzeichen)
            };
            cy.route(
                'POST', 
                'http:/*:8890/actions/VERDIS_GRUNDIS.getMyKassenzeichen/tasks?role=all&resultingInstanceType=result', 
                result
            ).as('getKasszViaStac');
            cy.get('input').type("STACSTACSTAC");
            cy.wait('@getKasszViaStac');
            cy.hash().should('match', /#\/meinkassenzeichen\?lat=51\..*&lng=7\..*&zoom=.*/); 
            
        });
    });
});


