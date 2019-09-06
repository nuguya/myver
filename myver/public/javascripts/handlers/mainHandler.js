import router from "../router.js";

const addMainEvent = function() {
  const login = document.querySelector("#main__loginbtn");
  const signup = document.querySelector("#main__signupbtn");

  login.addEventListener("click", function(e) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
    router(path);
  });

  signup.addEventListener("click", function(e) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
    router(path);
  });
};

export default addMainEvent;
