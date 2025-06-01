
class RegisterForm {
  elements = {
    descriptionInput: () => cy.get("#description"),
    pricetionInput: () => cy.get("#price"),
    earningsRadio: () => cy.get("#earnings"),
    loosesRadio: () => cy.get("#looses"),
    categoryInput: () => cy.get("#category"),
    submitBtn: () => cy.get("#btnSubmit")
  }

  typeDescriptionInput(text: string) {
    if(!text) return
    this.elements.descriptionInput().type(text)
  }
  
  typePricetionInput(text: string) {
    if(!text) return
    this.elements. pricetionInput().type(text)
  }
  
  typeCategoryInput(text: string) {
    if(!text) return
    this.elements.categoryInput().type(text)
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }
}

const registerForm =  new RegisterForm()

class RegisterList {
  elements = {
    emptyList: () => cy.get("#empty-list"),
  }

  textemptyList() { 
    this.elements.emptyList()
  }

}


const list = new RegisterList()



describe('Financial Records Management', () => {
  describe('View financial records listing', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    it(`Given I'm on the application's homepage`, () => {
      cy.visit('/')
    })

    it("When the system loads the financial records", () => {
      cy.get("#empty-list").should('contains.text', 'Nenhum data foi encontra.')
    })

    it("Then I should see a list of all registered records", () => {

    })

    it("And I should see the total income calculated correctly", () => {

    })

    it("And I should see the total expenses calculated correctly", () => {

    })

    it("And I should see the total balance calculated as (income - expenses)", () => {

    })
  })
})