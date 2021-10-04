// pull in get area
const { getArea, getPerimeter } = require('./square');
const chalk = require('chalk');

// calculate the area
console.log(getArea(4)); // 16

console.log(chalk.blue(getPerimeter(20)));
