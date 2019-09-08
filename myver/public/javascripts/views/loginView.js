import Login from "../components/login.js";
import renderHtml from "../utils/renderHTML.js";
import addLoginEvent from "../handlers/loginHandler.js";

const makeLoginView = function() {
  let viewPage;
  viewPage = Login();
  renderHtml(viewPage, ".root");
  addLoginEvent();
};

export default makeLoginView;
