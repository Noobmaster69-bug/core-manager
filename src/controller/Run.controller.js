const _ = require("lodash");
const microservice = _.zipObject(
  ...Object.values(require("../../microservice.list"))
);
const List = require("./List.controller");
const gitExec = require("../utils/git");
const npm = require("../utils/npm");
const spawn = require("../utils/spawn");
module.exports = {
  getInstall: function (req, res) {},
  getInstallAll: async function (req, res) {
    let notInstalled = List.notInstalled();
    for (const service of notInstalled) {
      await gitExec(["clone", microservice[service]], {
        cwd: "../",
      });
      await npm(["install"], {
        cwd: "../" + service,
      });
    }

    res.sendStatus(200);
  },
  startAll: async function (req, res) {
    let Installed = List.Installed().filter((e) => e !== "core-manager");
    for (const service of Installed) {
      await spawn(
        /^win/.test(process.platform) ? "pm2.cmd" : "pm2",
        ["start", "index.js", "--name", service],
        {
          cwd: "../" + service,
        }
      );
    }
    res.sendStatus(200);
  },
};
