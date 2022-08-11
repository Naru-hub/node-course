const chalk = require('chalk');
const getNotes = require('./notes');
const log = console.log;

const msg = getNotes();
console.log(msg);
log(chalk.green('Success!'));
log(chalk.bold.green.inverse('Success!'));
log(chalk.cyan('Hello!'));
log(chalk.bgBlue.bold('Success2!'));

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text hold and inversed.


