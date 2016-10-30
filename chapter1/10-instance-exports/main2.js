// Importing an initialized instance of our prototype again.
// This time, cache should work and the instance returned should be the one initialized by main.js
var logger = require('./logger');
// Using the methods. The count must be different now.
logger.log();
logger.info();

// Warning. This is not reliable! A new instance with a new counter may be created when it's used recurrently acrros the same application.
