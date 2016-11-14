// Page 44

// Our constructor now can return the instance initicialized so that we can avoid using the keyword new
function Logger(name) {
  // We check if our this object is an instance of our prototype Function
  if (!(this instanceof Logger)) {
    // if not, it means we still need to create an instance of our Logger
    return new Logger(name);
  }
  // Otherwise, it means we ned to initialize our constructor
  this.name = name;
}

Logger.prototype.log = function () {
  console.log("This is a log: " + this.name);
};

Logger.prototype.info = function () {
  console.log("This is a info: " + this.name);
};

module.exports = Logger;
