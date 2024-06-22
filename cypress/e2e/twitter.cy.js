describe("Kayıt olmayan kullanıcı için test senaryosu", () => {
  it("Kullanıcı Kayıtlı değilse Kayıt sayfasına yönleniyor", () => {
    cy.visit("http://localhost:5173/");
  });
});
