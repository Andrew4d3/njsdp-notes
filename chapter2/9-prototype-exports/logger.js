// Page 43

// Our constructor
function Logger(name) {
  this.name = name;
}

Logger.prototype.log = function () {
  console.log("This is a log: " + this.name);
};

Logger.prototype.info = function () {
  console.log("This is a info: " + this.name);
};

module.exports = Logger;
