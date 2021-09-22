const chalk = require("chalk");
const log = console.log;

const success = (...args) => {
  // log(chalk.green("√ "), ...args);
  log(chalk.green("√", ...args));
};

const error = (...args) => {
  log(chalk.red("X", ...args));
};

module.exports = { success, error };
