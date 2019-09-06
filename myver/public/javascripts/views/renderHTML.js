const renderHtml = function(component) {
  const page = document.querySelector(".root");
  page.innerHTML = component;
};

export default renderHtml;
