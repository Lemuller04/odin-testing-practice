import Main from "../src/main.js";

describe("analyzeArray function", () => {
  it("Returns an object with average, min, max, and length", () => {
    expect(Main.analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
