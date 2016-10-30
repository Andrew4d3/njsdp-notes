// Page 44

// Our constructor
function Logger(name) {
  this.count = 0;
  this.name = name;
}

Logger.prototype.log = function () {
  this.count++;
  console.log("This is a log: " + this.name + " count: " + this.count);
};

Logger.prototype.info = function () {
  this.count++;
  console.log("This is a info: " + this.name + " count: " + this.count);
};

module.exports = new Logger('DEFAULT');
