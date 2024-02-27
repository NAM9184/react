const Mylib = (() => {
  const createElement = (tag, props, children) => {
    document.createElement(tag);
  };
  return { createElement };
})();

export default Mylib;
