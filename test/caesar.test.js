import Main from "../src/main.js";

describe("caesarCipher function", () => {
  it("Ciphers a simple string", () => {
    expect(Main.caesarCipher("abc", 5)).toBe("fgh");
  });

  it("Ignores non alphabetical characters", () => {
    expect(Main.caesarCipher("!abc?", 5)).toBe("!fgh?");
  });

  it("Maintains string original case", () => {
    expect(Main.caesarCipher("AbC", 5)).toBe("FgH");
  });

  it("Loops over the alphabet", () => {
    expect(Main.caesarCipher("xyz", 3)).toBe("abc");
    expect(Main.caesarCipher("XYZ", 3)).toBe("ABC");
    expect(Main.caesarCipher("!xYz?", 3)).toBe("!aBc?");
  });

  it("Handles keys greater than 26", () => {
    expect(Main.caesarCipher("xyza", 27)).toBe("yzab");
  });

  it("Return the same string if key is zero", () => {
    expect(Main.caesarCipher("Hello!", 0)).toBe("Hello!");
  });

  it("Cyphers with negative keys", () => {
    expect(Main.caesarCipher("Def!", -3)).toBe("Abc!");
  });
});
