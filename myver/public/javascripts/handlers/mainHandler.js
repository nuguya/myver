import router from "../router.js";
import cookieParse from "../utils/cookieParse.js";

const addLogOffMainEvent = () => {
  const login = document.querySelector("#main__loginbtn");
  const signup = document.querySelector("#main__signupbtn");

  login.addEventListener("click", e => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path }, null, path);
    router(path);
  });

  signup.addEventListener("click", e => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path }, null, path);
    router(path);
  });
};

const addLogInMainEvent = () => {
  const logout = document.querySelector("#main__logoutbtn");

  logout.addEventListener("click", e => {
    let cookie = document.cookie;
    const cookieName = cookieParse(cookie).name;
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
    e.preventDefault();
    const path = e.target.getAttribute("href");
    history.pushState({ path: path }, null, path);
    router(path);
  });
};

export { addLogOffMainEvent, addLogInMainEvent };
