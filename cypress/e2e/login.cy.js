describe("Kayıt olmayan kullanıcı için test senaryosu", () => {
  it("Kullanıcı Kayıtlı değilse Kayıt sayfasına yönleniyor", () => {
    cy.visit("http://localhost:5173/");
    cy.get(`[name="email"]`).type("Kara_Monahan@example.com");
    cy.get(`[name="password"]`).type("4244aCs.");
    cy.get(`[type="checkbox"]`).click();
    cy.contains("Giriş").click();
    cy.url().should("eq", "http://localhost:5173/error");
  });

  it("Yeni kullanıcı başarılı bir şekilde oluşturuluyor ve Login sayfasına yönleniyor", () => {
    cy.visit("http://localhost:5173/error");
    cy.get(`[name="email"]`).type("alicansadeler@gmail.com");
    cy.get(`[name="password"]`).type("4244aCs.");
    cy.get(`[name="name"]`).type("Ali Can Sadeler");
    cy.get(`[name="userName"]`).type("acsadelerr");
    cy.get(`[name="adres"]`).type("Ankara");
    cy.get(`[type="checkbox"]`).click();
    cy.contains("Sign in").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
