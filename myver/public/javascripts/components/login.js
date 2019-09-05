const login = () => {
  return ` <header class="header">
    <div class="signin__title">
        <h1>로그인</h1>
    </div>
    </header>
      <form id="signin_form" class="pure-form">
        <div class="signin__main__contents">
          <span class="signin__main__contents__text">아이디</span>
          <div class="signin__main__contents__input">
            <input
              type="text"
              name="login_userid"
              id="login_userid"
              placeholder="아이디"
              class="input__box"
            />
          </div>
          <div class="signin__main__contents__comment">
            <p id="login_id__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signin__main__contents">
          <span class="signin__main__contents__text">비밀번호</span>
          <div class="signin__main__contents__input">
            <input
              type="password"
              name="login_password"
              id="login_password"
              placeholder="비밀번호"
              class="input__box"
            />
          </div>
          <div class="signin__main__contents__comment">
            <p id="login_password__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents" id="endarea">
          <div class="signin__buttonarea">
            <div class="signin__buttonarea__login">
              <button type="button" name="loginbtn" id="loginbtn" class="button">
                로그인
              </button>
            </div>
            <div class="signin__buttonarea__signup">
              <button type="button" name="signupbtn" id="signupbtn" class="button">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </form> `;
};

export default login;
