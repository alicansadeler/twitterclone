describe("Login sayfası validasyon kontrolleri", () => {
  it("Ana Sayfa/Sidebar'da kullanıcı bilgisi var", () => {
    cy.visit("http://localhost:5173/");
    cy.get(`[name="email"]`).type("alicansadelergmail.com");
    cy.get(`[name="password"]`).type("asdadadsa");
    cy.contains("Giriş").click();
    cy.contains("Lütfen geçerli bir e-mail adresi girin.").should("be.visible");
    cy.contains("Lütfen geçerli bir şifre girin.").should("be.visible");
    cy.contains("Lütfen sözleşmeyi kabul edin.").should("be.visible");
  });
});

describe("Kullanıcı kayıt sayfası validasyon kontrolleri", () => {
  it("Ana Sayfa/Sidebar'da kullanıcı bilgisi var", () => {
    cy.visit("http://localhost:5173/error");
    cy.get(`[name="email"]`).type("alicansadelergmail.com");
    cy.get(`[name="password"]`).type("asdadadsa");
    cy.get(`[name="userName"]`).type("as");
    cy.contains("Lütfen geçerli bir e-mail adresi girin.").should("be.visible");
    cy.contains("Lütfen geçerli bir şifre girin.").should("be.visible");
    cy.contains("Lütfen geçerli bir kullanıcı adı girin.").should("be.visible");
    cy.contains("Lütfen sözleşmeyi kabul edin.").should("be.visible");
  });
});

describe("Kayıtlı kullanıcılar için test senaryosu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.get(`[name="email"]`).type("alicansadeler@gmail.com");
    cy.get(`[name="password"]`).type("4244aCs.");
    cy.get(`[type="checkbox"]`).click();
    cy.contains("Giriş").click();
    cy.url().should("eq", "http://localhost:5173/home");
  });

  it("Ana Sayfa/Sidebar'da kullanıcı bilgisi var", () => {
    cy.contains("Ali Can Sadeler").should("be.visible");
    cy.contains("@acsadelerr").should("be.visible");
  });

  it("Yeni tweet paylaşımı başarılır bir şekilde gerçekleşiyor", () => {
    cy.get(`[name="textarea"]`).type("workintech twitter clone cypress test");
    cy.get("[data-cy=tweet-button]").click();
    cy.contains("workintech twitter clone cypress test").should("be.visible");
  });
});
