describe('get calculator', () => {

  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5500/calculator.html')
  })
  it('query root container and its children', () => {
    

    // query root container with it's children
    cy.get('.d-flex').should('exist')
    .find('div')
    .should('exist')
    .and('have.id',"board")
  
  })

  it('query display container and check its children', ()=>{

     cy.get('div#display')
     .should('exist')
     .within(()=>{
       cy.get('div#formulascreen')
       .should('exist')
 
       cy.get('div#outputscreen')
       .should('exist')
     })
  })

  it('query container  with id "#design"', ()=>{
    cy.get('div.design')
    .should('exist')
    .within(()=>{
      cy.get('p').should('exist').and('have.text','Designed by:')

      cy.get('h6').should('exist').and('have.text','Coder')
    })
  })

  it('query buttons',()=>{
    cy.get('button[type="button"]')
    .should('have.length',20)
    .each(button=>{

      // const onclick = button.prop('onclick')
      expect(button).to.have.attr('onclick')
    })
  })

  it('query each button and check its value',()=>{

    cy.get('button[type="button"]').as('btn')

    cy.get('@btn').contains('AC').should('exist').and('have.value','AC').click()
    cy.get('@btn').contains('%').should('exist').and('have.value','%').click()
    cy.get('@btn').contains('DEL').should('exist').and('have.value','DEL').click()
    cy.get('@btn').contains('/').should('exist').and('have.value','/').click()

    cy.get('@btn').contains('7').should('exist').and('have.value','7').click()
    cy.get('@btn').contains('8').should('exist').and('have.value','8').click()
    cy.get('@btn').contains('9').should('exist').and('have.value','9').click()
    cy.get('@btn').contains('x').should('exist').and('have.value','*').click()

    cy.get('@btn').contains('4').should('exist').and('have.value','4').click()
    cy.get('@btn').contains('5').should('exist').and('have.value','5').click()
    cy.get('@btn').contains('6').should('exist').and('have.value','6').click()
    cy.get('@btn').contains('-').should('exist').and('have.value','-').click()

    cy.get('@btn').contains('1').should('exist').and('have.value','1').click()
    cy.get('@btn').contains('2').should('exist').and('have.value','2').click()
    cy.get('@btn').contains('3').should('exist').and('have.value','3').click()
    cy.get('@btn').contains('+').should('exist').and('have.value','+').click()

    cy.get('@btn').contains('00').should('exist').and('have.value','00').click()
    cy.get('button#zero').contains('0').should('exist').and('have.value','0').click()
    cy.get('@btn').contains('.').should('exist').and('have.value','.').click()
    
  })

  it('query botton that have "=" value',()=>{
    cy.get('button#equal').contains('=').should('exist').and('have.value','=').click()
  })
})