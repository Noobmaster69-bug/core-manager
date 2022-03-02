const express = require("express");
const router = express.Router();
const controller = require("../controller/List.controller");
router.use("/installed", controller.Installed);
router.use("/notinstalled", controller.notInstalled);
module.exports = router;
