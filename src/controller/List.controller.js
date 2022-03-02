const fs = require("fs");
const ms = require("../../microservice.list");
module.exports = {
  Installed: function (req, res) {
    const result = fs.readdirSync("../");
    if (res === undefined) {
      return result.filter((e) => ms.list.includes(e));
    } else {
      return res.send(result);
    }
  },
  notInstalled: function (req, res) {
    let list = fs.readdirSync("../");
    let result = ms.list.filter((e) => !list.includes(e));

    if (res === undefined) {
      return result;
    } else {
      return res.send(result);
    }
  },
};
