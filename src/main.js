const Main = (() => {
  function capitalize(str) {
    if (typeof str !== "string") return str;
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  }

  function reverseString(str) {
    return typeof str === "string" ? [...str].reverse().join("") : str;
  }

  const calculator = {
    sum: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") return NaN;
      return a + b;
    },
    sub: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") return NaN;
      return a - b;
    },
    divide: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number" || b === 0) return NaN;
      return a / b;
    },
    multiply: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") return NaN;
      return a * b;
    },
  };

  function caesarCipher(str, key) {}

  return {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
  };
})();

export default Main;
