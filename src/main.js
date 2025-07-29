const Main = (() => {
  function capitalize(str) {
    if (typeof str !== "string") return str;
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  }

  function reverseString(str) {
    return typeof str === "string" ? [...str].reverse().join("") : str;
  }

  return {
    capitalize,
    reverseString,
  };
})();

export default Main;
