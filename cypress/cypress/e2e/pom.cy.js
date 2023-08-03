
import {Login} from "./pages/login"

var login =new Login()


describe('All Login Tests',()=>{

    beforeEach(()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/');


    })

    it ('pom demo', ()=>{


        
        login.Enterusername;
        // login.enterpassword;
        // login.clicklogin;
        // login.
        // login.clicklogin;
    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-name').click();
    })
    
    it('pom demo1', ()=>{
    
    
        login.Enterusername;
        // login.enterpassword;
        // login.clicklogin;
        // login.
        // login.clicklogin;
    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-name').click();
    })
    


})