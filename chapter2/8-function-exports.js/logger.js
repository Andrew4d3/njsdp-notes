// Page 42

// In this case. Our module only has one single function to export
module.exports = function(msg) {
  console.log("info: " + msg);
}

// However, as we know, we can extend the main functionality of a function in JS by adding a propperty to the function already defined
// So that we can have some sort of secondary function
module.exports.verbose = function(msg) {
  console.log("verbose: " + msg);
}
