const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database/db.json");
const db = low(adapter);

/**
 * make a serializer to user's input.
 *
 * @param {respone.body object} d The desired diameter of the circle.
 * @return {string} The new Circle object.
 */

const serialize = response => {
  return JSON.stringify({
    password: response.password,
    name: response.name,
    birthday: `${response.year}/${response.month}/${response.day}`,
    gender: response.sex,
    email: response.email,
    phone_number: response.phone_number,
    favorate: response.favorate
  });
};

router.post("/", function(req, res, next) {
  console.log(req.body);
  db.set(`users.${req.body.userid}`, `${serialize(req.body)}`).write();
  res.send("success");
});

module.exports = router;
