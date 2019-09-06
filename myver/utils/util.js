const uuidv1 = require("uuid/v1");

const generateID = () => {
  return uuidv1();
};

const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

module.exports = { generateID, isEmpty };
