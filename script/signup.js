const ID_TEXT = {
  occupied: "이미 사용중인 아이디입니다.",
  invalid: "아이디 형식이 유효하지 않습니다.",
  possible: "사용하실 수 있는 아이디입니다."
};

const PASSWORD_TEXT = {
  invalidLength: "8자 이상 16자 이하로 입력해주세요",
  missingCapitalLetter: "영문 대문자를 최소 1개 이상 입력해주세요",
  missingSmallLetter: "영문 소문자를 최소 1개 이상 입력해주세요",
  missingNumber: "숫자를 최소 1개 이상 입력해주세요",
  missingExtra: "특수문자를 최소 1개 이상 입력해주세요",
  safe: "안전한 비밀번호 입니다.",
  notequal: "비밀번호가 일치하지 않습니다",
  equal: "비밀번호가 일치합니다"
};

const EMAIL_TEXT = {
  invalid: "이메일 주소를 다시 확인해주세요"
};

const PHONE_TEXT = {
  invalid: "형식에 맞지 않는 번호입니다."
};

const validateForId = () => {
  const userid = document.querySelector("#userid");
  const comment = document.querySelector("#id__comment");
  userid.addEventListener("change", () => {
    const validation = /^[a-z0-9_-]{5,20}$/;
    let commentary = validation.test(userid.value) ? ID_TEXT.possible : ID_TEXT.invalid;
    comment.innerHTML = commentary;
    if (commentary != ID_TEXT.possible) {
      throw "invalid id";
    }
  });
};

const validateForPassword = () => {
  const password = document.querySelector("#password");
  const comment = document.querySelector("#password__comment");
  const regex = 0;
  const message = 1;
  password.addEventListener("change", () => {
    let pipeLine = [];
    const checkCapitalLetter = /(.*[A-Z])/;
    pipeLine.push([checkCapitalLetter, PASSWORD_TEXT.missingCapitalLetter]);
    const checkSmallLetter = /(.*[a-z])/;
    pipeLine.push([checkSmallLetter, PASSWORD_TEXT.missingSmallLetter]);
    const checkNumber = /(.*[0-9])/;
    pipeLine.push([checkNumber, PASSWORD_TEXT.missingNumber]);
    const checkExtra = /(.*[!@#$%^*+=-?])/;
    pipeLine.push([checkExtra, PASSWORD_TEXT.missingExtra]);
    const checkLength = /^.{8,16}$/;
    pipeLine.push([checkLength, PASSWORD_TEXT.invalidLength]);
    let result = PASSWORD_TEXT.safe;
    pipeLine.forEach(cur => {
      if (!cur[regex].test(password.value)) {
        result = cur[message];
      }
    });
    let commentary = result;
    comment.innerHTML = commentary;
    if (commentary != PHONE_TEXT.safe) {
      throw "invalid password";
    }
  });
};

const validateForPasswordCheck = () => {
  const password = document.querySelector("#password");
  const rePassword = document.querySelector("#re_password");
  const comment = document.querySelector("#passwdcheck__comment");
  rePassword.addEventListener("change", () => {
    let commentary =
      password.value == rePassword.value && password.value != ""
        ? PASSWORD_TEXT.equal
        : PASSWORD_TEXT.notequal;
    comment.innerHTML = commentary;
    if (commentary != PASSWORD_TEXT.equal) {
      throw "invalid password";
    }
  });
};

const validateForEmail = () => {
  const email = document.querySelector("#email");
  const comment = document.querySelector("#email__comment");
  email.addEventListener("change", () => {
    const validation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let commentary = validation.test(email.value) ? "" : EMAIL_TEXT.invalid;
    comment.innerHTML = commentary;
    if (commentary == EMAIL_TEXT.invalid) {
      throw "invalid email";
    }
  });
};

const validPhoneNumber = () => {
  const phoneNumber = document.querySelector("#phone_number");
  const comment = document.querySelector("#phone_number__comment");
  phoneNumber.addEventListener("change", () => {
    const validation = /^(010)[0-9]{7,8}$/;
    let commentary = validation.test(phoneNumber.value) ? "" : PHONE_TEXT.invalid;
    comment.innerHTML = commentary;
    if (commentary == PHONE_TEXT.invalid) {
      throw "invalid phone_number";
    }
  });
};

function init() {
  try {
    validateForId();
    validateForPassword();
    validateForPasswordCheck();
    validateForEmail();
    validPhoneNumber();
  } catch (e) {
    console.log(e);
  }
}

init();
