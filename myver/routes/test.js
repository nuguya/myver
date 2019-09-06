var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.cookies);
  res.send("asdfasfd");
});

module.exports = router;
