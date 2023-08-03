




before(()=>{

    cy.fixture('example.json').as('test_fara')
})

it("read files using fixtures", ()=>{

    cy.fixture('example.json').then((data)=>{
    cy.log(data.name)
    cy.log(data.email)

    

    })

   

    


})


 it(' Read  using readfile()§§', ()=>{
    cy.readFile('cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    });
 })


 it(' Write file', ()=>{

    cy.writeFile('sample.text' , 'hello world\n')
    cy.writeFile('sample.text' , 'my name is faranani',{flag:'a+'})
   
 })