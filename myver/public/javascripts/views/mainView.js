import Main from "../components/main.js";
import { addLogInMainEvent, addLogOffMainEvent } from "../handlers/mainHandler.js";
import renderHtml from "../utils/renderHTML.js/";
import cookieParse from "../utils/cookieParse.js";
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
      viewPage = `${Main()} 
    <div class="main__container">
      <div class="main__container__buttonarea">
        <button type="button" id="main__loginbtn"><a href="/login">로그인</a></button>
        <button type="button" id="main__signupbtn"><a href="/signup">회원가입</a></button>
      </div>
    </div>`;
      handler = addLogOffMainEvent;
      break;
    case LOGIN:
      console.log(document.cookie);
      let cookie = cookieParse(document.cookie);
      viewPage = `${Main()}
    <div class="main__container">
      <div class="main__container__userinfo">
        <div class="main__container__userinfo__userid">${cookie.value.user_id}님 안녕하세요</div>
      </div>
      <div class="main__container__buttonarea">
        <button type="button" id="main__logoutbtn"><a href="/">로그아웃</a></button>
      </div>
    </div>`;
      handler = addLogInMainEvent;
      break;
  }
  renderHtml(viewPage, ".root");
  if (handler == null) return;
  handler();
  return;
};

export default makeMainView;
