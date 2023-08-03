
// it('assertion demo'),()=>{


//     cy.visit('https://example.cypress.io');

// }



it('assertion demo', ()=>{

    cy.visit('example.cypress.io');
    cy.contains('get').click();

    cy.get('#query-btn').should('contain', 'Button')
    .should('have.class','query-btn'      )
    .and('be.visible' )
     .and('be.enabled' )
     .invoke('attr','id').should('be.equal', 'query-btn')

     expect(true).to.be.true
     let name = 'Faranani'
     expect(name).to.be.equal('Faranani')

     assert.equal('faranani','faranani', 'not equal')


    //  assert.strictEqual(1,'3', 'not equal')
    
  

   

 
})
