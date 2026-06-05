describe("Carrito Sauce Demo", () => {
  beforeEach(() => {
    // 1. Iniciar sesión y entrar al inventario antes de cada prueba del carrito
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });

  it("Agregar un producto al carrito", () => {;
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
  cy.get('[data-test="shopping-cart-link"]'). should('be.visible', '1')
  });

  it("Agregar multiples productos al carrito",()=>{;
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('have.text', 'Remove');
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove');
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible', '3');
    cy.get('[data-test="remove-sauce-labs-backpack"]'). should('have.text', 'Remove');
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'). should('have.text', 'Remove');
    cy.get('[data-test="remove-sauce-labs-bike-light"]'). should('have.text', 'Remove');
  
  })

  it("eliminar producto desde el carrito",()=>{;
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible', '2');
    cy.get('[data-test="shopping-cart-link"]'). click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove'). click ();
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible', '1');

  });
});
