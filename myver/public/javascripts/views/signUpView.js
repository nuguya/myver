import Validation from "../handlers/signupHandler.js";
import SignUp from "../components/signup.js";
import renderHtml from "../utils/renderHTML.js/";

const makeSignUpView = function() {
  let viewPage;
  viewPage = SignUp();
  renderHtml(viewPage, ".root");
  Validation.addSignUpEvent();
};

export default makeSignUpView;
