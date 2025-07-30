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

  function caesarCipher(str, key) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      let keyCopy = key;

      if (isAlphabetical(char)) {
        if (loopsAlphabet(char, key)) {
          let max = char <= 90 ? 90 : 122;
          let diff = max - char;
          keyCopy -= diff;
          char = max - 26;
        }

        res += String.fromCharCode(char + keyCopy);
      } else {
        res += str[i];
      }
    }

    function loopsAlphabet(code, key) {
      return code <= 90 ? code + key > 90 : code + key > 122;
    }

    function isAlphabetical(code) {
      return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
    }

    return res;
  }

  return {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
  };
})();

export default Main;
