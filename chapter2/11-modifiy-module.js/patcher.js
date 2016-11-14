// Page 46
// Here we are modifying the module imported, so customMessage will be globally available next time this module it's imported
require('./logger').customMessage = function () {
  console.log("This is a custom message...");
};
