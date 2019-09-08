/**
 * rend HTML at root tag.
 *
 * @param {component,root} component the component that want to render, root is root tag for insert component
 * @return {None} this function result rendering component in root html
 */

const renderHtml = function(component, root) {
  const page = document.querySelector(root);
  page.innerHTML = component;
};

export default renderHtml;
