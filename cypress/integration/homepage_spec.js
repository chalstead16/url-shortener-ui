describe('urlShortener homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: 'mock_get_data.json' })
    cy.visit('http://localhost:3000')
  })

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.contains('URL Shortener')
    cy.get('.card').first().contains('example 2 - waterfall')
    cy.get('.card').first().contains('http://localhost:3001/useshorturl/2')
    cy.get('.card').first().contains('https://images.unsplash.com/photo-1650944471530-b4074337e32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80')
    cy.get('.card').last().contains('example 1 - mountains')
    cy.get('.card').last().contains('http://localhost:3001/useshorturl/1')
    cy.get('.card').last().contains('https://images.unsplash.com/photo-1650912374615-9b25f9ae1deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.contains('URL Shortener')
    cy.get('.title-input')
    cy.get('.url-input')
    cy.get('.submit-button')
  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.contains('URL Shortener')
    cy.get('.title-input').type('example 3 - flowers')
    cy.get('.url-input').type('https://images.unsplash.com/photo-1650912967019-6adee95d5540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.contains('URL Shortener')
    cy.get('.title-input').type('example 3 - flowers')
    cy.get('.url-input').type('https://images.unsplash.com/photo-1650912967019-6adee95d5540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', { fixture: 'mock_post_data.json' })
    cy.get('.submit-button').click()
  })
})