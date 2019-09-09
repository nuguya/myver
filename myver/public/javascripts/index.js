import router from "./router.js";

(function() {
  window.addEventListener("popstate", function(e) {
    if (e.state) router(e.state.path);
    else history.back();
  });

  router("/");
})();
