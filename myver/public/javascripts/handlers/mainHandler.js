import router from "../router.js";

const addLogOffMainEvent = () => {
  const login = document.querySelector("#main__loginbtn");
  const signup = document.querySelector("#main__signupbtn");

  login.addEventListener("click", e => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
    router(path);
  });

  signup.addEventListener("click", e => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
    router(path);
  });
};

const addLogInMainEvent = () => {
  const logout = document.querySelector("#main__logoutbtn");

  logout.addEventListener("click", e => {
    let cookie = document.cookie;
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
  });
};

export { addLogOffMainEvent, addLogInMainEvent };
