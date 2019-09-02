const TEXT_COLOR = {
  wrong: "red",
  right: "green"
};

const Validation = {
  ID_TEXT: {
    occupied: ["이미 사용중인 아이디입니다.", TEXT_COLOR.wrong],
    invalid: ["아이디 형식이 유효하지 않습니다.", TEXT_COLOR.wrong],
    possible: ["사용하실 수 있는 아이디입니다.", TEXT_COLOR.right]
  },

  PASSWORD_TEXT: {
    invalidLength: ["8자 이상 16자 이하로 입력해주세요", TEXT_COLOR.wrong],
    missingCapitalLetter: ["영문 대문자를 최소 1개 이상 입력해주세요", TEXT_COLOR.wrong],
    missingSmallLetter: ["영문 소문자를 최소 1개 이상 입력해주세요", TEXT_COLOR.wrong],
    missingNumber: ["숫자를 최소 1개 이상 입력해주세요", TEXT_COLOR.wrong],
    missingExtra: ["특수문자를 최소 1개 이상 입력해주세요", TEXT_COLOR.wrong],
    safe: ["안전한 비밀번호 입니다.", TEXT_COLOR.right],
    notequal: ["비밀번호가 일치하지 않습니다", TEXT_COLOR.wrong],
    equal: ["비밀번호가 일치합니다", TEXT_COLOR.right]
  },

  NAME_TEXT: {
    invalid: ["이름이 그게 맞아요?", TEXT_COLOR.wrong],
    valid: ["", TEXT_COLOR.right]
  },

  BIRTHDAY_TEXT: {
    invalid_year: ["태어난 연도 4자리를 정확히 입력하세요", TEXT_COLOR.wrong],
    invalid_date: ["태어난 날짜를 확인해주세요", TEXT_COLOR.wrong],
    invalid_month: ["태어난 월을 확인해주세요", TEXT_COLOR.wrong],
    missingAge: ["만 14세 이상만 가입 가능합니다.", TEXT_COLOR.wrong],
    valid: ["", TEXT_COLOR.right]
  },

  EMAIL_TEXT: {
    invalid: ["이메일 주소를 다시 확인해주세요", TEXT_COLOR.wrong],
    valid: ["", TEXT_COLOR.right]
  },

  PHONE_TEXT: {
    invalid: ["형식에 맞지 않는 번호입니다.", TEXT_COLOR.wrong],
    valid: ["", TEXT_COLOR.right]
  },

  SEX_TEXT: {
    invalid: ["성별을 확인하세요", TEXT_COLOR.wrong],
    valid: ["", TEXT_COLOR.right]
  },

  validateForId: function() {
    const userid = document.querySelector("#userid");
    const comment = document.querySelector("#id__comment");
    const TEXT = 0,
      COLOR = 1;
    userid.addEventListener(
      "input",
      function() {
        const validation = /^[a-z0-9_-]{5,20}$/;
        let commentary = validation.test(userid.value)
          ? this.ID_TEXT.possible
          : this.ID_TEXT.invalid;
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
      }.bind(this)
    );

    userid.addEventListener("focus", function() {
      const inputBlock = userid.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    userid.addEventListener("blur", function() {
      const inputBlock = userid.parentNode;
      inputBlock.style.border = "";
    });
  },

  validateForPassword: function() {
    const TEXT = 0,
      COLOR = 1;
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
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
      }.bind(this)
    );

    password.addEventListener("focus", function() {
      const inputBlock = password.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    password.addEventListener("blur", function() {
      const inputBlock = password.parentNode;
      inputBlock.style.border = "";
    });
  },

  validateForPasswordCheck: function() {
    const TEXT = 0,
      COLOR = 1;
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
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
      }.bind(this)
    );

    rePassword.addEventListener("focus", function() {
      const inputBlock = rePassword.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    rePassword.addEventListener("blur", function() {
      const inputBlock = rePassword.parentNode;
      inputBlock.style.border = "";
    });
  },

  validateForName: function() {
    const name = document.querySelector("#name");
    const comment = document.querySelector("#name__comment");
    const TEXT = 0,
      COLOR = 1;

    name.addEventListener(
      "change",
      function() {
        const validation = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-z]{1,30}$/;
        let commentary = validation.test(name.value)
          ? this.NAME_TEXT.valid
          : this.NAME_TEXT.invalid;
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
      }.bind(this)
    );

    name.addEventListener("focus", function() {
      const inputBlock = name.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    name.addEventListener("blur", function() {
      const inputBlock = name.parentNode;
      inputBlock.style.border = "";
    });
  },

  validateForBirthday: function() {
    const birthdayYear = document.querySelector("#birthday_year");
    const birthdayMonth = document.querySelector("#birthday_month");
    const birthdayDate = document.querySelector("#birthday_date");
    const validationForBirthday = [false, false, false];
    const comment = document.querySelector("#birthday__comment");
    const YEAR = 0,
      MONTH = 1,
      DAY = 2;
    const TEXT = 0,
      COLOR = 1;
    birthdayYear.addEventListener(
      "change",
      function() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let age = currentYear - parseInt(birthdayYear.value);
        if (age < 14 || age > 99) {
          let commentary = this.BIRTHDAY_TEXT.missingAge;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
          validationForBirthday[MONTH] = false;
        } else {
          validationForBirthday[YEAR] = true;
          let commentary = this.BIRTHDAY_TEXT.valid;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
        }
      }.bind(this)
    );
    birthdayYear.addEventListener("focus", function() {
      const inputBlock = birthdayYear.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    birthdayYear.addEventListener("blur", function() {
      const inputBlock = birthdayYear.parentNode;
      inputBlock.style.border = "";
    });

    birthdayMonth.addEventListener(
      "change",
      function() {
        if (birthdayMonth.value == "월") {
          let commentary = this.BIRTHDAY_TEXT.invalid_month;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
          validationForBirthday[MONTH] = false;
        } else {
          validationForBirthday[MONTH] = true;
          let commentary = this.BIRTHDAY_TEXT.valid;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
        }
      }.bind(this)
    );

    birthdayMonth.addEventListener("focus", function() {
      const inputBlock = birthdayMonth.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    birthdayMonth.addEventListener("blur", function() {
      const inputBlock = birthdayMonth.parentNode;
      inputBlock.style.border = "";
    });

    birthdayDate.addEventListener(
      "change",

      function() {
        let lastOfMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).getDate();
        if (birthdayDate.value >= 1 && birthdayDate.value <= lastOfMonth) {
          validationForBirthday[DAY] = true;
          let commentary = this.BIRTHDAY_TEXT.valid;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
        } else {
          let commentary = this.BIRTHDAY_TEXT.invalid_date;
          comment.innerHTML = commentary[TEXT];
          comment.style.color = commentary[COLOR];
          validationForBirthday[DAY] = false;
        }
      }.bind(this)
    );

    birthdayDate.addEventListener("focus", function() {
      const inputBlock = birthdayDate.parentNode;
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    birthdayDate.addEventListener("blur", function() {
      const inputBlock = birthdayDate.parentNode;
      inputBlock.style.border = "";
    });
  },

  validateForEmail: function() {
    const email = document.querySelector("#email");
    const comment = document.querySelector("#email__comment");
    const TEXT = 0,
      COLOR = 1;

    email.addEventListener(
      "input",
      function() {
        const validation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        let commentary = validation.test(email.value)
          ? this.EMAIL_TEXT.valid
          : this.EMAIL_TEXT.invalid;
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
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

  validateForPhoneNumber: function() {
    const TEXT = 0,
      COLOR = 1;
    const phoneNumber = document.querySelector("#phone_number");
    const comment = document.querySelector("#phone_number__comment");
    phoneNumber.addEventListener(
      "input",
      function() {
        const validation = /^(010)[0-9]{7,8}$/;
        let commentary = validation.test(phoneNumber.value)
          ? this.PHONE_TEXT.valid
          : this.PHONE_TEXT.invalid;
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
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

  validateForSex: function() {
    const sex = document.querySelector("#sex");
    const comment = document.querySelector("#sex__comment");
    const TEXT = 0,
      COLOR = 1;

    sex.addEventListener(
      "change",
      function() {
        let commentary = sex.value == "성별" ? this.SEX_TEXT.invalid : this.SEX_TEXT.valid;
        comment.innerHTML = commentary[TEXT];
        comment.style.color = commentary[COLOR];
      }.bind(this)
    );

    const inputBlock = sex.parentNode;
    sex.addEventListener("focus", function() {
      inputBlock.style.border = "solid #2db400 0.063em";
    });
    sex.addEventListener("blur", function() {
      inputBlock.style.border = "";
    });
  },

  init: function() {
    this.validateForId();
    this.validateForPassword();
    this.validateForPasswordCheck();
    this.validateForName();
    this.validateForEmail();
    this.validateForPhoneNumber();
    this.validateForBirthday();
    this.validateForSex();
  }
};

Validation.init();
