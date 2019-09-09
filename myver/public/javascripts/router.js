import makeLoginView from "./views/loginView.js";
import makeSignUpView from "./views/signUpView.js";
import makeMainView from "./views/mainView.js";

const routes = {
  "/": function() {
    fetch("http://127.0.0.1:3000/checkcookie")
      .then(function(res) {
        return res.json();
      })
      .then(function(json) {
        makeMainView(json);
      });
    console.log(history.state);
    if (history.state == null) history.pushState({ path: "/" }, null, "/");
  },
  "/login": function() {
    makeLoginView();
  },
  "/signup": function() {
    makeSignUpView();
  }
};

const router = path => {
  console.log(history.state);
  routes[path]();
};

export default router;
