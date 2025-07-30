import Main from "../src/main.js";

describe("caesarCipher function", () => {
  it("Ciphers a simple string", () => {
    expect(Main.caesarCipher("abc", 5)).toBe("fgh");
  });

  it("Ignores non alphabetical characters", () => {
    expect(Main.caesarCipher("!abc?", 5)).toBe("!fgh?");
  });
});
