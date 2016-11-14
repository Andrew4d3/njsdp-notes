// Page 32

var module = (function() {
  // These variables are private and cannot be accessed outside of the module scope
  var privateMultiplier = 2
  var privateArray = [5,2,7];
  // This returning object is public and we can access whichever method we define here
  return {
    publicFoo: function(param) {
      return privateMultiplier * param;
    },
    publicBar: function(index) {
      return  privateArray[index]
    }
  };
})();

console.log(module.publicFoo(3));
console.log(module.publicBar(1));
