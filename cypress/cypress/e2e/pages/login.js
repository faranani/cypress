export class Login{

    
   

   

    // login()
    // {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/');

    // }

    
   
   

    Enterusername()
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');


        
    }

    enterpassword(){

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    }

    clicklogin(){

        cy.get('.oxd-button').click();

    }
}

