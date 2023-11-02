describe('template spec', () => {
  it('passes', () => {
    // visit page
    cy.visit('https://cs.wikipedia.org/wiki/Hlavn%C3%AD_strana')
    // input string into text field searched by elements class
    cy.get('input.cdx-text-input__input').type('Schwarzenegger')
    // click search button if containing key word 'Hledat'
    cy.contains('Hledat').click()
    // Verify
    cy.contains('Arnold Alois Schwarzenegger').should('be.visible');
  })
})