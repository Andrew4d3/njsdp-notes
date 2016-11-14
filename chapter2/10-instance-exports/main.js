// Importing an initialized instance of our prototype
var logger = require('./logger');
// Using the methods
logger.log();
logger.info();
// Loading a second module to test cache
require('./main2.js');
