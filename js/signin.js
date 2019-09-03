const registLoginButton = function() {
  const loginBtn = document.querySelector("#loginbtn");
  const signUpBtn = document.querySelector("#signupbtn");
  const signInMain = document.querySelector("#signin__main");
  const signUpMain = document.querySelector("#signup__main");
  const userid = document.querySelector("#login_userid");
  const comment = document.querySelector("#login_id__comment");
  const password = document.querySelector("#login_password");
  const comment2 = document.querySelector("#login_password__comment");

  const ID_TEXT = {
    possible: ["올바른 ID입니다.", "green"],
    invalid: ["유효하지 않습니다.", "red"]
  };
  const PASSWORD_TEXT = {
    possible: ["올바른 패스워드 입니다.", "green"],
    invalid: ["유효하지 않습니다.", "red"]
  };
  const TEXT = 0,
    COLOR = 1;
  userid.addEventListener("change", function() {
    const validation = /^[a-z0-9_-]{5,20}$/;
    let validTestValue = validation.test(userid.value);
    let commentary = validTestValue ? ID_TEXT.possible : ID_TEXT.invalid;
    comment.innerHTML = commentary[TEXT];
    comment.style.color = commentary[COLOR];
  });
  userid.addEventListener("focus", function() {
    const inputBlock = userid.parentNode;
    inputBlock.style.border = "solid #2db400 0.063em";
  });
  userid.addEventListener("blur", function() {
    const inputBlock = userid.parentNode;
    inputBlock.style.border = "";
  });

  password.addEventListener("change", function() {
    const validation = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    let validTestValue = validation.test(password.value);
    let commentary = validTestValue ? PASSWORD_TEXT.possible : PASSWORD_TEXT.invalid;
    comment2.innerHTML = commentary[TEXT];
    comment2.style.color = commentary[COLOR];
  });

  password.addEventListener("focus", function() {
    const inputBlock = password.parentNode;
    inputBlock.style.border = "solid #2db400 0.063em";
  });
  password.addEventListener("blur", function() {
    const inputBlock = password.parentNode;
    inputBlock.style.border = "";
  });

  loginBtn.addEventListener("click", function() {});
  signUpBtn.addEventListener("click", function() {
    signInMain.style.display = "none";
    signUpMain.style.display = "block";
  });
};

registLoginButton();
