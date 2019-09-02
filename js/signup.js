const Validation = {
  ID_TEXT: {
    occupied: "이미 사용중인 아이디입니다.",
    invalid: "아이디 형식이 유효하지 않습니다.",
    possible: "사용하실 수 있는 아이디입니다."
  },

  PASSWORD_TEXT: {
    invalidLength: "8자 이상 16자 이하로 입력해주세요",
    missingCapitalLetter: "영문 대문자를 최소 1개 이상 입력해주세요",
    missingSmallLetter: "영문 소문자를 최소 1개 이상 입력해주세요",
    missingNumber: "숫자를 최소 1개 이상 입력해주세요",
    missingExtra: "특수문자를 최소 1개 이상 입력해주세요",
    safe: "안전한 비밀번호 입니다.",
    notequal: "비밀번호가 일치하지 않습니다",
    equal: "비밀번호가 일치합니다"
  },

  NAME_TEXT: {
    invalid: "이름이 그게 맞아요?"
  },

  EMAIL_TEXT: {
    invalid: "이메일 주소를 다시 확인해주세요"
  },

  PHONE_TEXT: {
    invalid: "형식에 맞지 않는 번호입니다."
  },

  validateForId: function() {
    const userid = document.querySelector("#userid");
    const comment = document.querySelector("#id__comment");
    userid.addEventListener(
      "input",
      function() {
        const validation = /^[a-z0-9_-]{5,20}$/;
        let commentary = validation.test(userid.value)
          ? this.ID_TEXT.possible
          : this.ID_TEXT.invalid;
        comment.innerHTML = commentary;
      }.bind(this)
    );
    const inputBlock = userid.parentNode;
    userid.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    userid.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  validateForPassword: function() {
    const password = document.querySelector("#password");
    const comment = document.querySelector("#password__comment");
    const regex = 0;
    const message = 1;
    password.addEventListener(
      "input",
      function() {
        let pipeLine = [];
        const checkCapitalLetter = /(.*[A-Z])/;
        pipeLine.push([checkCapitalLetter, this.PASSWORD_TEXT.missingCapitalLetter]);
        const checkSmallLetter = /(.*[a-z])/;
        pipeLine.push([checkSmallLetter, this.PASSWORD_TEXT.missingSmallLetter]);
        const checkNumber = /(.*[0-9])/;
        pipeLine.push([checkNumber, this.PASSWORD_TEXT.missingNumber]);
        const checkExtra = /(.*[!@#$%^*+=-?])/;
        pipeLine.push([checkExtra, this.PASSWORD_TEXT.missingExtra]);
        const checkLength = /^.{8,16}$/;
        pipeLine.push([checkLength, this.PASSWORD_TEXT.invalidLength]);
        let result = this.PASSWORD_TEXT.safe;
        pipeLine.forEach(cur => {
          if (!cur[regex].test(password.value)) {
            result = cur[message];
          }
        });
        let commentary = result;
        comment.innerHTML = commentary;
      }.bind(this)
    );
    const inputBlock = password.parentNode;
    password.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    password.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  validateForPasswordCheck: function() {
    const password = document.querySelector("#password");
    const rePassword = document.querySelector("#re_password");
    const comment = document.querySelector("#passwdcheck__comment");
    rePassword.addEventListener(
      "input",
      function() {
        let commentary =
          password.value == rePassword.value && password.value != ""
            ? this.PASSWORD_TEXT.equal
            : this.PASSWORD_TEXT.notequal;
        comment.innerHTML = commentary;
      }.bind(this)
    );
    const inputBlock = rePassword.parentNode;
    rePassword.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    rePassword.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  validateForName: function() {
    const name = document.querySelector("#name");
    const comment = document.querySelector("#name__comment");

    name.addEventListener(
      "change",
      function() {
        const validation = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-z]{1,30}$/;
        let commentary = validation.test(name.value) ? "" : this.NAME_TEXT.invalid;
        comment.innerHTML = commentary;
      }.bind(this)
    );
    const inputBlock = name.parentNode;
    name.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    name.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  validateForEmail: function() {
    const email = document.querySelector("#email");
    const comment = document.querySelector("#email__comment");
    email.addEventListener(
      "input",
      function() {
        const validation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        let commentary = validation.test(email.value) ? "" : this.EMAIL_TEXT.invalid;
        comment.innerHTML = commentary;
        if (commentary == this.EMAIL_TEXT.invalid) {
          throw "invalid email";
        }
      }.bind(this)
    );
    const inputBlock = email.parentNode;
    email.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    email.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  validPhoneNumber: function() {
    const phoneNumber = document.querySelector("#phone_number");
    const comment = document.querySelector("#phone_number__comment");
    phoneNumber.addEventListener(
      "input",
      function() {
        const validation = /^(010)[0-9]{7,8}$/;
        let commentary = validation.test(phoneNumber.value) ? "" : this.PHONE_TEXT.invalid;
        comment.innerHTML = commentary;
        if (commentary == this.PHONE_TEXT.invalid) {
          throw "invalid phone_number";
        }
      }.bind(this)
    );
    const inputBlock = phoneNumber.parentNode;
    phoneNumber.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    phoneNumber.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  init: function() {
    this.validateForId();
    this.validateForPassword();
    this.validateForPasswordCheck();
    this.validateForName();
    this.validateForEmail();
    this.validPhoneNumber();
  }
};

Validation.init();
