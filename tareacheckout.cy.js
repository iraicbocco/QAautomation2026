describe("Carrito Sauce Demo", () => {
  beforeEach(() => {
    // 1. Iniciar sesión y entrar al inventario antes de cada prueba del carrito
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });

  it("checkout con datos invalidos", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').should("be.visible", "1");
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').should("be.visible", "checkout");
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should("be.visible", "error-button");
  });

  it("checkout con datos validos", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').should("be.visible", "1");
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').should("be.visible", "checkout");
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Juan");
    cy.get('[data-test="lastName"]').type("Perez");
    cy.get('[data-test="postalCode"]').type("500");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').should("be.visible", "finish");
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should(
      "be.visible",
      "Thank you for your order!")
    })
})
