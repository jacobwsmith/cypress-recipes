/// <reference types="Cypress" />

let errorCount = 0

Cypress.on('window:before:load', win => {
  win.addEventListener(
    'error',
    function(e) {
      errorCount++
    },
    true
  )
})

context('Test failed script request', () => {
  beforeEach(() => {
    errorCount = 0
  })

  it('should load with one error', () => {
    cy.visit('http://127.0.0.1:4201/failed-script-request.html')
    cy.window().then(win => {
      expect(errorCount).eq(1)
    })
  })
})
