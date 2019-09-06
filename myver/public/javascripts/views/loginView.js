import Login from "../components/login.js";
import renderHtml from "./renderHTML.js";
import addLoginEvent from "../handlers/loginHandler.js";

const makeLoginView = function() {
  let viewPage;
  viewPage = Login();
  renderHtml(viewPage);
  addLoginEvent();
};

export default makeLoginView;
