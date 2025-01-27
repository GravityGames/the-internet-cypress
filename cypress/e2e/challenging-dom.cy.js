describe("Challenging DOM", () => {

    beforeEach(() => {
      cy.viewport(1280, 720)
    })
  
    it("A user can interact with the UI buttons on the left of the page when navigating to the Challenging DOM page from the homepage", {
            defaultCommandTimeout: 10000
        },() => {
        
        //Verify the link to the Challenging DOM UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(5) > a")
        .should("exist")
        .should("have.text", "Challenging DOM").click()

        //Check if the buttons exist, and that the first can be clicked
        cy.get(".button").eq(1)
        .should("exist")

        cy.get(".button").eq(2)
        .should("exist")

        cy.get(".button").eq(0)
        .should("exist")
        .click()
        
        //Check if the buttons still exist, and that the second can be clicked
        cy.get(".button").eq(0)
        .should("exist")

        cy.get(".button").eq(2)
        .should("exist")

        cy.get(".button").eq(1)
        .should("exist")
        .click()

        //Check if the buttons still exist, and that the third can be clicked
        cy.get(".button").eq(0)
        .should("exist")

        cy.get(".button").eq(1)
        .should("exist")

        cy.get(".button").eq(2)
        .should("exist")
        .click()

        //Finally, ensure that all three buttons still exist
        cy.get(".button").eq(0)
        .should("exist")

        cy.get(".button").eq(1)
        .should("exist")

        cy.get(".button").eq(2)
        .should("exist")

      })
    
    it.only("A user can interact with the table on the page when navigating to the Challenging DOM page from the homepage", {
        defaultCommandTimeout: 10000
        },() => {
    
        //Verify the link to the Challenging DOM UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(5) > a")
        .should("exist")
        .should("have.text", "Challenging DOM").click()

        //Verify that the header titles are all correct
        var headers = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Diceret", "Action"];
        for(let i=0; i<headers.length; i++){
            cy.get("thead")
            .find("tr > th").eq(i)
            .should("exist")
            .should("have.text", headers[i])
        }

        //Now confirm the data lines
        var dataLines = ["Iuvaret", "Apeirian", "Adipisci", "Definiebas", "Consequuntur", "Phaedrum"];
        for(let i=0; i<dataLines.length; i++){
            for(let j=0; j<=9; j++){
                //TODO: FINISH THE LINE VERIFICATION
            }
        }
    })
  
    //TODO: ADD LIBRARY FOR CANVAS TESTING AND TEST CASE TO CHECK FOR CANVAS CHANGE WHEN BUTTONS PRESSED

  })
  