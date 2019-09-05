const signup = () => {
  return `<header class="header">
        <div class="signup__title">
          <h1>회원가입</h1>
        </div>
      </header>
      <form id="signup_form" method="POST" action="http://127.0.0.1:3000/users">
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">아이디</span>
          <div class="signup__main__contents__input">
            <input type="text" name="userid" id="userid" class="input__box" />
          </div>
          <div class="signup__main__contents__comment">
            <p id="id__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">비밀번호</span>
          <div class="signup__main__contents__input">
            <input type="password" name="password" id="password" class="input__box" />
          </div>
          <div class="signup__main__contents__comment">
            <p id="password__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">비밀번호 재확인</span>
          <div class="signup__main__contents__input">
            <input type="password" name="re_password" id="re_password" class="input__box" />
          </div>
          <div class="signup__main__contents__comment">
            <p id="passwdcheck__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">이름</span>
          <div class="signup__main__contents__input">
            <input type="text" name="name" id="name" class="input__box" />
          </div>
          <div class="signup__main__contents__comment">
            <p id="name__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">생년월일</span>
          <div class="signup__main__contents__birthday">
            <div class="signup__main__contents__birthday__element">
              <input
                type="text"
                name="year"
                id="birthday_year"
                class="birthday"
                placeholder="년(4자)"
              />
            </div>
            <div class="signup__main__contents__birthday__element">
              <select name="month" id="birthday_month" class="birthday">
                <option selected>월</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="signup__main__contents__birthday__element">
              <input type="text" name="day" id="birthday_date" class="birthday" placeholder="일" />
            </div>
          </div>
          <div class="signup__main__contents__comment">
            <p id="birthday__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">성별</span>
          <div class="signup__main__contents__input">
            <select name="sex" id="sex">
              <option selected>성별</option>
              <option value="1">남</option>
              <option value="2">녀</option>
            </select>
          </div>
          <div class="signup__main__contents__comment">
            <p id="sex__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">이메일</span>
          <div class="signup__main__contents__input">
            <input type="text" name="email" id="email" class="input__box" />
          </div>
          <div class="signup__main__contents__comment">
            <p id="email__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">전화번호</span>
          <div class="signup__main__contents__input">
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              class="input__box"
              placeholder="- 없이 입력해주세요 예) 01012345678"
            />
          </div>
          <div class="signup__main__contents__comment">
            <p id="phone_number__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents">
          <span class="signup__main__contents__text">관심사</span>
          <div class="signup__main__contents__catecory">
            <ul class="signup__main__contents__catecory__content"></ul>
            <div class="signup__main__content__category__input">
              <input type="text" name="favorate" id="favorate" />
            </div>
          </div>
          <div class="signup__main__contents__comment">
            <p id="favorate__comment" class="commentary"></p>
          </div>
        </div>
        <div class="signup__main__contents" id="endarea">
          <button type="button" class="signup__main__checkarea__text">약관에 동의합니다.</button>
          <div class="signup__main__checkarea_checkbox">
            <input type="checkbox" name="agreement" id="agreement" onclick="return false;" />
          </div>
          <div class="signup__buttonarea">
            <div class="signup__buttonarea__reset">
              <button type="button" name="resetbtn" id="resetbtn" class="button">초기화</button>
            </div>
            <div class="signup__buttonarea__submit">
              <button type="button" name="submitbtn" id="submitbtn" class="button"><a href="/">가입하기</a>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="modal">
        <div class="modal__contents">
          <div class="modal__contents__close">&times;</div>
          <div class="modal__contents__text">이용약관 안내</div>
          <div class="modal__contents__box">
            <p>
              Google에 오신 것을 환영합니다. Google 제품 및 서비스(‘서비스’)를 이용해 주셔서
              감사합니다. 서비스는 1600 Amphitheatre Parkway, Mountain View, CA 94043, United
              States에 소재한 Google LLC(‘Google’)에서 제공합니다. 서비스를 이용함으로써 귀하는 본
              약관에 동의하게 되므로 본 약관을 주의 깊게 읽어보시기 바랍니다. Google 서비스는 매우
              다양하므로 때로 추가약관 또는 제품 요구사항(연령 요건 포함)이 적용될 수 있습니다.
              추가약관은 관련 서비스에 대하여 제공되며, 귀하가 해당 서비스를 이용하는 경우 이
              추가약관은 귀하와 Google 간 계약의 일부가 됩니다. Google 서비스 이용 귀하는 서비스
              내에서 적용되는 모든 정책을 준수해야 합니다. Google 서비스의 오용을 삼가시기 바랍니다.
              예를 들어 서비스를 방해하거나 Google이 제공하는 인터페이스 및 안내사항 이외의 다른
              방법을 사용하여 액세스를 시도하지 않아야 합니다. 귀하는 관련 수출 및 재수출 통제 법규
              및 규정 등 오직 법률상 허용되는 범위에서만 Google 서비스를 이용할 수 있습니다. 귀하가
              Google 약관이나 정책을 준수하지 않거나 Google이 부정행위 혐의를 조사하고 있는 경우,
              Google 서비스 제공이 일시 중지 또는 중단될 수 있습니다. Google 서비스를 사용한다고
              해서 Google 서비스 또는 액세스하는 콘텐츠의 지적재산권을 소유하게 되는 것은 아닙니다.
              콘텐츠 소유자로부터 허가를 받거나 달리 법률에 따라 허용되는 경우를 제외하고, Google
              서비스의 콘텐츠를 사용할 수 없습니다. 본 약관은 귀하에게 Google 서비스에 사용된
              브랜드나 로고를 사용할 권리를 부여하지 않습니다. Google 서비스에 또는 Google 서비스와
              함께 게재된 어떠한 법적 고지도 삭제하거나 감추거나 변경하지 마십시오. Google 서비스는
              Google이 소유하지 않은 일부 콘텐츠를 표시할 수 있습니다. 콘텐츠를 제공하는 주체는 해당
              콘텐츠가 본 약관, 추가 약관 및 정책에 부합하도록 해야 하며, 그러한 콘텐츠에 대해서는
              법률에 따라 Google이 책임지는 경우를 제외하고, 제공한 주체가 단독으로 책임지게 됩니다.
              콘텐츠가 위법하거나(예를 들어, 저작권 침해 또는 인신매매를 유도하는 콘텐츠), 소송의
              위험을 야기하거나(예를 들어, 명예훼손), 기타 본 약관이나 추가 약관을 중대하게
              위반하거나 개별 서비스별로 공개된 정책을 위반한다고(예를 들어, 희롱, 괴롭힘 또는
              위협적인 행동) 합리적으로 판단되는 경우, Google은 그러한 콘텐츠의 전부 또는 일부를
              삭제하거나 차단할 수 있습니다. 그렇다고 반드시 콘텐츠를 검토한다는 의미는 아니므로,
              콘텐츠를 검토할 것이라고 간주하지 마십시오. Google은 통지가 법적 이유로 금지되거나,
              또는 이용자, 제3자, Google 및 그 계열사에 위해를 야기할 수 있다고 합리적으로 판단되는
              경우(예를 들어, 통지하는 것이 법령 또는 규제당국의 명령을 위반하는 경우, 조사를
              방해하는 경우, 본 서비스의 보안을 해하는 경우 등)를 제외하고, 귀하에게 해당 조치의
              이유를 통지할 것입니다. 서비스 이용과 관련하여 Google은 귀하에게 서비스 고지, 관리
              메시지 및 기타 정보를 발송할 수 있습니다. 귀하는 메시지 수신을 거부할 수 있습니다.
              일부 Google 서비스는 휴대기기에서 사용할 수 있습니다. 트래픽 또는 보안 관련 법규
              준수를 방해하거나 막는 방식으로 서비스를 사용해서는 안 됩니다. 귀하의 Google 계정
              귀하가 Google 서비스를 이용하기 위해서는 Google 계정이 필요할 수 있습니다. 귀하가
              Google 계정을 직접 만들 수도 있고, 고용주 또는 교육기관과 같은 관리자가 귀하에게
              Google 계정을 배정할 수도 있습니다. 관리자가 배정한 Google 계정을 사용하고 있는 경우,
              별도의 약관 또는 추가약관이 적용될 수 있으며 관리자가 귀하의 계정에 액세스하거나
              계정을 해지할 수 있습니다. Google 계정을 보호하려면 비밀번호를 비공개로 유지하십시오.
              귀하는 Google 계정에서 또는 Google 계정을 통해 이루어지는 활동에 대한 책임이 있습니다.
              타사 애플리케이션에서 Google 계정 비밀번호를 재사용하지 마십시오. 귀하의 비밀번호나
              Google 계정이 무단으로 사용되고 있음을 알게 되는 경우 다음 도움말을 참조하시기
              바랍니다. 개인정보 보호 및 저작권 보호 Google 개인정보처리방침은 귀하가 Google
              서비스를 사용할 때 Google이 개인정보를 어떻게 취급하고 보호하는지에 대해 설명합니다.
              Google은 미국 디지털 밀레니엄 저작권법(US Digital Millennium Copyright Act)에 규정된
              절차에 따라 저작권침해를 주장하는 신고에 대응하고, 반복 침해자의 계정을 해지합니다.
              Google은 저작권자가 온라인상에서 자신의 지적 재산을 관리할 수 있도록 정보를
              제공합니다. 누군가 귀하의 저작권을 침해하고 있다고 생각되어 Google에 통지하고자 하는
              경우, Google 도움말 센터에서 신고서 제출 방법 및 저작권 침해 신고에 대한 Google 대응
              정책 관련 정보를 확인하실 수 있습니다.
            </p>
          </div>
          <div class="modal__btn">
            <button class="modal__contents__btn">동의</button>
          </div>
        </div>
      </div>`;
};

export default signup;
