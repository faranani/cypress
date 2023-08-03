///<reference types="cypress">

it('Google seach', ()=>{

    cy.visit('http://google.com');

    cy.get('#APjFqb',{timeout:5000}).type('hello faranani{enter}');
    // cy.contains('Google Search').click()

    cy.contains('Videos').click()

    

 
})