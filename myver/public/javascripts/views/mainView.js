import Main from "../components/main.js";
import addMainEvent from "../handlers/mainHandler.js";
import renderHtml from "./renderHTML.js";
/**
 * rendering mainview page
 *
 * @param {login_state} state is json that if cookie is exist or not exist.
 * @return {None} this function result is rendering view page
 */

const LOGIN = 0,
  LOGOFF = 1;

const makeMainView = function(login_state) {
  let viewPage;
  let handler = null;
  let state = login_state.login_state ? LOGIN : LOGOFF;
  switch (state) {
    case LOGOFF:
      viewPage = `${Main()}<div class = "main__container"> 
          <button type="button" id="main__loginbtn"><a href="/login">로그인</a></button>
          <button type="button" id="main__signupbtn"><a href="/signup">회원가입</a></button></div>`;
      handler = addMainEvent;
      break;
    case LOGIN:
      console.log(document.cookie);
      viewPage = `${Main()}<p>fuck you</p>`;
      break;
  }
  renderHtml(viewPage);
  if (handler == null) return;
  handler();
  return;
};

export default makeMainView;
