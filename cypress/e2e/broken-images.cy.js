describe("Add/Remove Elements", () => {

    beforeEach(() => {
      cy.viewport(1280, 720)
    })
  
    it("Image #1 loads properly when accessed from home page.", {
        defaultCommandTimeout: 10000
    },() => {
    
        //Verify the link to the Broken Images UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(4) > a")
        .should("exist")
        .should("have.text", "Broken Images").click()

        //And now verify that the image exists
        //since this image is intentionally broken in the-internet, this case should fail
        cy.get('[src="asdf.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })

    it("Image #1 loads properly when accessed from a direct link to the UI.", {
        defaultCommandTimeout: 10000
    },() => {
    
        //First, navigate to the Broken Images UI directly
        cy.visit("https://the-internet.herokuapp.com/broken_images")

        //And now verify that the image exists
        //since this image is intentionally broken in the-internet, this case should fail
        cy.get('[src="asdf.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    
    it("Image #2 loads properly when accessed from home page.", {
        defaultCommandTimeout: 10000
    },() => {
    
        //Verify the link to the Broken Images UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(4) > a")
        .should("exist")
        .should("have.text", "Broken Images").click()

        //And now verify that the image exists
        //since this image is intentionally broken in the-internet, this case should fail
        cy.get('[src="hjkl.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })

    it("Image #2 loads properly when accessed from a direct link to the UI.", {
        defaultCommandTimeout: 10000
    },() => {
    
        //First, navigate to the Broken Images UI directly
        cy.visit("https://the-internet.herokuapp.com/broken_images")

        //And now verify that the image exists
        //since this image is intentionally broken in the-internet, this case should fail
        cy.get('[src="hjkl.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    
    it("Image #3 loads properly when accessed from home page.", {
            defaultCommandTimeout: 10000
        },() => {
        
        //Verify the link to the Broken Images UI appears on the homepage
        cy.visit("http://the-internet.herokuapp.com/")
        cy.get("ul > :nth-child(4) > a")
        .should("exist")
        .should("have.text", "Broken Images").click()

        //And now verify that the image exists
        cy.get('[src="img/avatar-blank.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    
    it("Image #3 loads properly when accessed from a direct link to the UI.", {
        defaultCommandTimeout: 10000
    },() => {
    
        //First, navigate to the Broken Images UI directly
        cy.visit("https://the-internet.herokuapp.com/broken_images")

        //And now verify that the image exists
        cy.get('[src="img/avatar-blank.jpg"]')
        .should("exist")
        .should("be.visible")
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
  
  })
  