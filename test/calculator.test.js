import Main from "../src/main.js";

describe("calculator object", () => {
  it("Sums two integers", () => {
    expect(Main.calculator.sum(1, 2)).toBe(3);
    expect(Main.calculator.sum(-1, 2)).toBe(1);
  });

  it("Sums two floats", () => {
    expect(Main.calculator.sum(1.1, 2.2)).toBeCloseTo(3.3);
    expect(Main.calculator.sum(-1.1, 2.2)).toBeCloseTo(1.1);
  });

  it("Subtracts two integers", () => {
    expect(Main.calculator.sub(1, 2)).toBe(-1);
    expect(Main.calculator.sub(-1, 2)).toBe(-3);
  });

  it("Subtracts two floats", () => {
    expect(Main.calculator.sub(1.1, 2.2)).toBeCloseTo(-1.1);
    expect(Main.calculator.sub(-1.1, 2.2)).toBeCloseTo(-3.3);
  });

  it("Divides two integers", () => {
    expect(Main.calculator.divide(10, 2)).toBe(5);
    expect(Main.calculator.divide(-10, 2)).toBe(-5);
  });

  it("Divides two floats", () => {
    expect(Main.calculator.divide(2.2, 2)).toBeCloseTo(1.1);
    expect(Main.calculator.divide(-2.2, 2)).toBeCloseTo(-1.1);
  });

  it("Divigind by zero return NaN", () => {
    expect(Main.calculator.divide(2, 0)).toBe(NaN);
  });

  it("Multiply two integers", () => {
    expect(Main.calculator.multiply(10, 2)).toBe(20);
    expect(Main.calculator.multiply(-10, 2)).toBe(-20);
  });

  it("Multiply two floats", () => {
    expect(Main.calculator.multiply(2.2, 2)).toBeCloseTo(4.4);
    expect(Main.calculator.multiply(-2.2, 2)).toBeCloseTo(-4.4);
  });

  it("Returns NaN on non number unputs", () => {
    expect(Main.calculator.sum("a", 2)).toBe(NaN);
    expect(Main.calculator.sum("", 2)).toBe(NaN);
    expect(Main.calculator.sub("a", 2)).toBe(NaN);
    expect(Main.calculator.sub("", 2)).toBe(NaN);
    expect(Main.calculator.divide("a", 2)).toBe(NaN);
    expect(Main.calculator.divide("", 2)).toBe(NaN);
    expect(Main.calculator.multiply("a", 2)).toBe(NaN);
    expect(Main.calculator.multiply("", 2)).toBe(NaN);
  });
});
