// page 46
// First we require to call the module that modifies our logger (the "patcher")
require('./patcher');
// Importing our logger
var logger = require('./logger');
// Now we can use the method we imported with the patcher
logger.customMessage();
