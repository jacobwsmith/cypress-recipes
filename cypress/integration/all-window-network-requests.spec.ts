/// <reference types="Cypress" />

context('Test all window network requests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:4201/all-window-network-requests.html')
    })
  
    it('should load the request.js', () => {
      cy.window().then(win => {
        // More info: https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName
        expect(
          win.performance.getEntriesByName('http://127.0.0.1:4201/helpers/request.js')
            .length
        ).eq(1)
      })
    })

    it('should not load the foo.js', () => {
        cy.window().then(win => {
          // More info: https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName
          expect(
            win.performance.getEntriesByName('http://127.0.0.1:4201/helpers/foo.js')
              .length
          ).eq(0)
        })
      })
  })