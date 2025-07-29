import Main from "../src/main.js";

describe("capitalize function", () => {
  it("Capitalizes a lower case string", () => {
    expect(Main.capitalize("test")).toBe("Test");
  });

  it("Capitalizes a mixed string", () => {
    expect(Main.capitalize("rAnDoM")).toBe("RAnDoM");
  });

  it("Capitalizes an already capitalized string", () => {
    expect(Main.capitalize("Test")).toBe("Test");
  });

  it("Return an empty string from an empty string", () => {
    expect(Main.capitalize("")).toBe("");
  });

  it("Do not change string if the first character isn't alphabetic", () => {
    expect(Main.capitalize("1a")).toBe("1a");
    expect(Main.capitalize("!a")).toBe("!a");
    expect(Main.capitalize(" test")).toBe(" test");
  });

  it("Works with accented characters", () => {
    expect(Main.capitalize("água")).toBe("Água");
  });

  it("Returns the input unchanged if not a string", () => {
    expect(Main.capitalize(123)).toBe(123);
    expect(Main.capitalize(null)).toBe(null);
    expect(Main.capitalize()).toBe();
  });
});

describe("reverseString function", () => {
  it("Reverses a string", () => {
    expect(Main.reverseString("test")).toBe("tset");
    expect(Main.reverseString("tset")).toBe("test");
    expect(Main.reverseString("!@#4")).toBe("4#@!");
  });

  it("Return an empty string from an empty string", () => {
    expect(Main.reverseString("")).toBe("");
  });

  it("Works with accented characters", () => {
    expect(Main.reverseString("água")).toBe("augá");
  });

  it("Returns the input unchanged if not a string", () => {
    expect(Main.reverseString(123)).toBe(123);
    expect(Main.reverseString(null)).toBe(null);
    expect(Main.reverseString()).toBe();
  });
});
