// Loading the module
var logger = require('./logger');

// Calling the main method
logger("This is an info msg (main function)");
// Calling the seconday method
logger.verbose("This is a verbose msg (secondary function)");
