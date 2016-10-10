// Page 29

// The bad one!
function myAsyncCall1 (data, callback) {
  setTimeout(function(){
    callback(null, JSON.parse(data));
  }, 1);
}

// The good one!
function myAsyncCall2 (data, callback) {
  setTimeout(function(){
    try {
      var data = JSON.parse(data);
    } catch (error) {
      callback(error);
    }
    callback(null, data);
  }, 1)
}


function handler(error, result){
  if(error){
    throw error;
  }
  console.log(result, " --- JSON");
}

// This error is not gonna be caught because try-catch blocks are not being included. Uncomment to test
// myAsyncCall1("bad_json", handler);
// This error is gonna be properly caught because the JSON.parse function is wrapped around try-catch blocks
myAsyncCall2("bad_json", handler);
