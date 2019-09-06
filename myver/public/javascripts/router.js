import Main from "./components/main.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import addMainEvent from "./handlers/mainHandler.js";
import addLoginEvent from "./handlers/loginHandler.js";
import Validation from "./handlers/signupHandler.js";

const renderHtml = function(component) {
  const page = document.querySelector(".root");
  page.innerHTML = component();
};

const routes = {
  "/": function(res) {
    if (res == undefined) {
      renderHtml(Main);
      addMainEvent(router);
      history.pushState({ path: "/" }, null, "/");
    }
  },
  "/login": function() {
    renderHtml(Login);
    addLoginEvent(router);
  },
  "/signup": function() {
    renderHtml(Signup);
    Validation.addSignUpEvent(router);
  }
};

const router = (path, res) => {
  routes[path](res);
};

export default router;
