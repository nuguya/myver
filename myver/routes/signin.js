const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const { generateID } = require("../utils/util.js");
const COOKIE_TITLE = "myverCookie";
const SESSION_TABLE = "sessions";
const COOKIE_VALUE_SSID = "session_id";
const crpyto = require("crypto");

const decryptPassword = (password, encryptPassword) => {
  const saltLength = 88;
  const count = 102313;

  return new Promise((resolve, reject) => {
    crpyto.pbkdf2(
      password,
      encryptPassword.substr(0, saltLength),
      count,
      64,
      "sha512",
      (err, key) => {
        resolve(encryptPassword.substr(0, saltLength) + key.toString("base64"));
        reject("실패");
      }
    );
  });
};

/**
 * comapre input of userid and password to db data
 *
 * @param {respone.body object} {userid : XXXXX , password :XXXXX}
 * @return {boolean} match userid and password
 */

const compare = async reqJson => {
  const db = low(adapter);
  const userTable = db.get("users");
  const sourceID = reqJson.userid;
  const targetID = userTable.value()[sourceID];
  if (targetID) {
    let sourcePassword = reqJson.password;
    const targetPassword = JSON.parse(targetID).password;
    sourcePassword = await decryptPassword(sourcePassword, targetPassword);
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
  const db = low(adapter);
  db.set(`${SESSION_TABLE}.${ssid}`, `${userid}`).write();
};

/**
 * Creates a cookie contents.
 *
 * @param {ssid,username,userid} ssid,userid and username that saved in db
 * @return {Object} object that fullfilled cookie value
 */

const makeCookieValue = (id, name, uid) => {
  return { session_id: id, username: name, user_id: uid };
};

router.post("/", function(req, res, next) {
  compare(req.body).then(valid => {
    if (valid) {
      const id = generateID();
      establishSession(id, req.body.userid);
      res.send(makeCookieValue(id, req.body.name, req.body.userid));
    } else res.send({ login: false });
  });
});

module.exports = router;
