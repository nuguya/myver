const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const crpyto = require("crypto");
const signinRouter = require("./signin");
const saltLength = 88;
const count = 102313;

/**
 * crypt password with pbkdf2
 *
 * @param {userid,password} req body userid and password
 * @return {Promise} promise pending that sha512
 */

const encryptPassword = (userid, password) => {
  return new Promise(resolve => {
    crpyto.randomBytes(64, (err, buf) => {
      crpyto.pbkdf2(password, buf.toString("base64"), count, 64, "sha512", (err, key) => {
        // console.log((buf.toString("base64") + key.toString("base64")).substr(0, 88));
        resolve(buf.toString("base64") + key.toString("base64"));
      });
    });
  });
};

/**
 * make a serializer to user's input.
 *
 * @param {respone.body object,encryptPassword} d The desired diameter of the circle.
 * @return {string} The new Circle object.
 */

const deSerialize = (req, encryptPassword) => {
  return JSON.stringify({
    password: encryptPassword,
    name: req.name,
    birthday: `${req.year}/${req.month}/${req.day}`,
    gender: req.sex,
    email: req.email,
    phone_number: req.phone_number,
    favorate: req.favorate
  });
};

/**
 * Duplicate Check at Login
 *
 * @param {userid} userid find duplicate userid in database
 * @return {json} if userid is exist then return that else return null
 */

router.get("/:userid", function(req, res, next) {
  const db = low(adapter);
  res.send(db.get("users").value()[req.params.userid]);
});

router.post("/", function(req, res, next) {
  const db = low(adapter);
  encryptPassword(req.body.userid, req.body.password).then(password => {
    db.set(`users.${req.body.userid}`, `${deSerialize(req.body, password)}`).write();
    next("route");
  });
});

router.post("/", signinRouter);

module.exports = router;
