import Main from "../src/main.js";

describe("analyzeArray function", () => {
  it("Returns an object with average, min, max, and length", () => {
    expect(Main.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("Handles array with one number", () => {
    expect(Main.analyzeArray([42])).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });

  it("Handles array with negative and float values", () => {
    expect(Main.analyzeArray([-1, 2.5, 0, 8])).toEqual({
      average: 2.375,
      min: -1,
      max: 8,
      length: 4,
    });
  });

  it("Handles empty array", () => {
    expect(Main.analyzeArray([])).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });
});
