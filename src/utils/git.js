const spawn = require("child_process").spawn;

const gitExec = (command, option) =>
  new Promise((resolve, reject) => {
    const thread = spawn("git", command, {
      ...option,
      stdio: ["inherit", "inherit", "inherit"],
    });
    // const stdOut = [];
    // const stdErr = [];

    // thread.stdout.on("data", (data) => {
    //   stdOut.push(data.toString("utf8"));
    // });

    // thread.stderr.on("data", (data) => {
    //   stdErr.push(data.toString("utf8"));
    // });

    thread.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });

module.exports = gitExec;
