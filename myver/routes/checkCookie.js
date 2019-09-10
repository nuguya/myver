const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const { isEmpty } = require("../utils/util.js");

const COOKIE_TITLE = "myverCookie";
const SESSION_TABLE = "sessions";
const COOKIE_VALUE_SSID = "session_id";

router.get("/", function(req, res, next) {
  const db = low(adapter);
  if (isEmpty(req.cookies)) {
    res.send({
      login_state: false
    });
  } else {
    const cookie = JSON.parse(req.cookies[COOKIE_TITLE]);
    const ssid = cookie[COOKIE_VALUE_SSID];
    const state = db.get(SESSION_TABLE).value()[ssid];
    const loginState = state != undefined ? true : false;
    res.send({
      login_state: loginState
    });
  }
});

module.exports = router;
