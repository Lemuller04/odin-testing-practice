const Main = (() => {
  function capitalize(str) {
    if (typeof str !== "string") return str;
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  }

  return {
    capitalize,
  };
})();

export default Main;
