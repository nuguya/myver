import Validation from "../handlers/signupHandler.js";
import SignUp from "../components/signup.js";
import renderHtml from "./renderHTML.js";

const makeSignUpView = function() {
  let viewPage;
  viewPage = SignUp();
  renderHtml(viewPage);
  Validation.addSignUpEvent();
};

export default makeSignUpView;
