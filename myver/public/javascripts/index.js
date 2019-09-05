import Main from "./components/main.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import addMainEvent from "./handlers/mainHandler.js";

(function() {
  const renderHtml = function(component) {
    const page = document.querySelector(".root");
    page.innerHTML = component();
  };

  const routes = {
    "/": function() {
      renderHtml(Main);
      addMainEvent(router);
    },
    "/login": function() {
      renderHtml(Login);
    },
    "/signup": function() {
      renderHtml(Signup);
    }
  };

  const router = path => {
    routes[path](path);
  };

  router("/");
})();
