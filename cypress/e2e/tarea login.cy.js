describe("Login Sauce Demo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login con usuario bloqueado", () => {
    // cy.log ('test 3')
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
  it("Logout menú hamburguesa", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });
});
