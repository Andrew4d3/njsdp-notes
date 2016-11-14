// Importing our prototype
var Logger = require('./logger');
// Creating an instance of our module prototype
var logger = new Logger('My Name');
// Using the methods
logger.log();
logger.info();

// Here we do not need to use the new keyword.
// Notice how we send our constructor params right away
// This is because we are actually calling the function. Not creating an instance
var logger2 = require('./logger_alternative')('My Name 2');
// Using the methods
logger2.log();
logger2.info();
