import router from "./router.js";

(function() {
  window.addEventListener("popstate", function(e) {
    this.console.log(e);
    router(e.state.path);
  });

  router("/");
})();
