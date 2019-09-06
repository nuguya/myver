const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const db = low(adapter);
const { isEmpty } = require("../utils/util.js");

router.get("/", function(req, res, next) {
  if (isEmpty(req.cookies)) {
    res.send({
      login_state: false
    });
  } else {
    res.send({
      login_state: true
    });
  }
});

module.exports = router;
