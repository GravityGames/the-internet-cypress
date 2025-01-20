describe("Add/Remove Elements", () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it("A user can add and remove elements when navigating to the Add/Remove Elements page from the homepage", {
          defaultCommandTimeout: 10000
      },() => {
      
        //Verify the link to the Add/Remove Elements UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(2) > a")
        .should("exist")
        .should("have.text", "Add/Remove Elements").click()

        //Verify the button to add elements exists
        cy.get('[onclick="addElement()"]')
        .should("exist")
        .should("have.text", "Add Element")
        .click()

        //Verify that the added element exists, and can be removed
        cy.get('#elements > :nth-child(1)')
        .should("exist")
        .should("have.text", "Delete")
        .click()
        .should("not.exist")

        //Time to repeat the above, but this time making sure adding multiple elements works
        cy.get('[onclick="addElement()"]')
        .should("exist")
        .should("have.text", "Add Element")
        .click()
        .click()
        .click()

        //Verify that all added elements exist
        cy.get('#elements')
        .should("exist")
        .children()
        .should("have.length", 3)

        //Finally, verify that they all have the proper text, and can be removed, using a for-loop
        for(let i=2; i>=0; i--){
          cy.get('#elements').children().eq(i)
          .should("have.text", "Delete")
          .click()
        }

        cy.get('#elements')
        .should("exist")
        .children()
        .should("have.length", 0)
    })

    it("A user can add and remove elements when navigating to the Add/Remove Elements page directly", {
      defaultCommandTimeout: 10000
      },() => {
  
        //Navigate directly to the Add/Remove Elements UI
        cy.visit("http://the-internet.herokuapp.com/add_remove_elements/")

       //Verify the button to add elements exists
        cy.get('[onclick="addElement()"]')
        .should("exist")
        .should("have.text", "Add Element")
        .click()

      //Verify that the added element exists, and can be removed
      cy.get('#elements > :nth-child(1)')
      .should("exist")
      .should("have.text", "Delete")
      .click()
      .should("not.exist")

      //Time to repeat the above, but this time making sure adding multiple elements works
      cy.get('[onclick="addElement()"]')
      .should("exist")
      .should("have.text", "Add Element")
      .click()
      .click()
      .click()

      //Verify that all added elements exist
      cy.get('#elements')
      .should("exist")
      .children()
      .should("have.length", 3)

      //Finally, verify that they all have the proper text, and can be removed, using a for-loop
      for(let i=2; i>=0; i--){
        cy.get('#elements').children().eq(i)
        .should("have.text", "Delete")
        .click()
      }

      cy.get('#elements')
      .should("exist")
      .children()
      .should("have.length", 0)
    })

})
