const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const db = low(adapter);

/**
 * comapre input of userid and password to db data
 *
 * @param {respone.body object} {userid : XXXXX , password :XXXXX}
 * @return {boolean} match userid and password
 */
const compare = reqJson => {
  const userTable = db.get("users");
  const sourceID = reqJson.userid;
  const targetID = JSON.parse(userTable.value()[sourceID]);
  if (targetID) {
    const sourcePassword = reqJson.password;
    const targetPassword = targetID.password;
    const result = sourcePassword === targetPassword ? true : false;
    return result;
  }
  return false;
};

/* GET home page. */
router.post("/", function(req, res, next) {
  const jsonResponse = compare(req.body) ? { state: "success" } : { state: "fail" };
  res.json(jsonResponse);
});

module.exports = router;
