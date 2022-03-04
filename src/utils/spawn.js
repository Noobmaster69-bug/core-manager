const spawn = require("child_process").spawn;
module.exports = function (command, param, option) {
  return new Promise((resolve, reject) => {
    const thread = spawn(command, param, {
      ...option,
      stdio: ["inherit", "inherit", "inherit"],
    }).on("error", (err) => console.log(err));
    thread.on("close", (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
};
