
describe('rest Api',()=>{

    it(' header validation',()=>{
       cy.request('https://pokeapi.co/api/v2/pokemon/60').as('faranani')
       cy.get('@faranani').its('headers').its('content-type')
    //    .should('include', 'application/json; charset=utf-8 ')

    

    })


    it(' statues validation',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/60').as('faranani')
        cy.get('@faranani').its('status')
        .should('equal', 200  )

     //    .should('include', 'application/json; charset=utf-8 ')
 
     
 
     })
})