const spawn = require("child_process").spawn;
module.exports = function (command, option) {
  return new Promise((resolve, reject) => {
    const thread = spawn(
      /^win/.test(process.platform) ? "npm.cmd" : "npm",
      command,
      { ...option, stdio: ["inherit", "inherit", "inherit"] }
    );
    thread.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
};
