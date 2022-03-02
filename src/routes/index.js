const getServiceList = require("./getServiceList");
const Run = require("../controller/Run.controller");
module.exports = function (app) {
  app.use("/getServiceList", getServiceList);
  app.use("/getInstall/:app", Run.getInstall);
  app.use("/getInstallAll", Run.getInstallAll);
  app.use("/getStartAll", Run.startAll);
};
