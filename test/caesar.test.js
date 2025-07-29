import Main from "../src/main.js";

describe("caesarCipher function", () => {
  it("Ciphers a simple string 1 time", () => {
    expect(Main.caesarChipher("abc", 1)).toBe("bcd");
  });
});
