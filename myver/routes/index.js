const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const db = low(adapter);
const { isEmpty } = require("../utils/util.js");

/* GET home page. */

router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
