// Page 28

// callback must be always last on the list of params
function myAsyncCall (param, callback) {
  setTimeout(function(){
    if (typeof param !== 'number') {
      // Error must be always be an instance of the Error class
      var error = new Error("Boom!")
      // It mus always be the first param of the callback
      callback(error)
    }
    // In case of not error. First param must be always null and second the final result
    callback(null, param + 1)
  }, 1)
}

function handler(error, result){
  // We must always check first if we got an Error
  if(error){
    // We can either throw the error or do something different here
    throw error;
  }
  console.log("The result is " + result);
}

myAsyncCall(1, handler);
// Wrong parameter here. A string instead of a number
myAsyncCall("aaa", handler);
