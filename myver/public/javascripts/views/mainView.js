import Main from "../components/main.js";
import { addLogInMainEvent, addLogOffMainEvent } from "../handlers/mainHandler.js";
import renderHtml from "../utils/renderHTML.js";
import cookieParse from "../utils/cookieParse.js";
/**
 * rendering mainview page
 *
 * @param {login_state} state is json that if cookie is exist or not exist.
 * @return {None} this function result is rendering view page
 */

const LOGIN = 0,
  LOGOFF = 1;

const makeList = function(object) {
  let result = "";
  for (let i in object) result += `<li>${object[i]}</li>`;
  return result;
};

const makeMainView = async function(login_state) {
  let viewPage;
  let handler = null;
  let state = login_state.login_state ? LOGIN : LOGOFF;
  let keywords;
  let keywordList;
  await fetch("http://127.0.0.1:3000/hotkeword")
    .then(res => {
      return res.json();
    })
    .then(res => {
      keywords = res;
    });
  keywordList = makeList(keywords);
  switch (state) {
    case LOGOFF:
      viewPage = `${Main(keywordList)} 
    <div class="main__container">
      <div class="main__container__buttonarea">
        <div class="main__container__buttonarea__login">
          <a href="/login" type="button" id="main__loginbtn" class="linkLikeButton">로그인</a>
        </div>
        <div class="main__container__buttonarea__signup">
          <a href="/signup" type="button" id="main__signupbtn" class="linkLikeButton">회원가입</a>
        </div>
      </div>
    </div>`;
      handler = addLogOffMainEvent;
      break;
    case LOGIN:
      let cookie = cookieParse(document.cookie);
      viewPage = `${Main(keywordList)}
    <div class="main__container">
      <div class="main__container__columns">
        <div class="main__container__userinfo">
          <p class="main__container__userinfo__userid">${cookie.value.user_id}님 안녕하세요</p>
        </div>
        <div class="main__container__buttonarea">
        <a href="/" type="button" id="main__logoutbtn" class="linkLikeButton">로그아웃</a>
        </div>
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
