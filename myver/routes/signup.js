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

const deSerialize = req => {
  return JSON.stringify({
    password: req.password,
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
  res.send(db.get("users").value()[req.params.userid]);
});

router.post("/", function(req, res, next) {
  db.set(`users.${req.body.userid}`, `${deSerialize(req.body)}`).write();
  res.json({ state: "success" });
});

module.exports = router;
