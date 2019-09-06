const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const db = low(adapter);
const { generateID } = require("../utils/util.js");
/**
 * comapre input of userid and password to db data
 *
 * @param {respone.body object} {userid : XXXXX , password :XXXXX}
 * @return {boolean} match userid and password
 */

const compare = reqJson => {
  const userTable = db.get("users");
  const sourceID = reqJson.userid;
  const targetID = userTable.value()[sourceID];
  if (targetID) {
    const sourcePassword = reqJson.password;
    const targetPassword = JSON.parse(targetID).password;
    const result = sourcePassword === targetPassword ? true : false;
    return result;
  }
  return false;
};

/**
 * Creates a cookie contents.
 *
 * @param {string,srting} ssesion id is unique id, userid is login_id
 * @return {} save session info to db.
 */

const establishSession = (ssid, userid) => {
  db.set(`sessions.${ssid}`, `${userid}`).write();
};

/**
 * Creates a cookie contents.
 *
 * @param {username,userid} userid and username that saved in db
 * @return {Object} object that fullfilled cookie value
 */

const setCookie = id => {
  return { sesssion_id: id, username: "김근영", user_id: "emsud12" };
};

router.post("/", function(req, res, next) {
  if (compare(req.body)) {
  }
  const id = generateID();
  establishSession(id, req.body.userid);
  res.send(setCookie(id));
});

module.exports = router;
