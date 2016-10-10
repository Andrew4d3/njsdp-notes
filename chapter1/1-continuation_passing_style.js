// Page 19

function add(a, b, callback) {
  callback(a + b);
}

console.log("This is a synchronous call!")
console.log("Before");
add(1,2,function(result){
  console.log("The result is " + result);
});
console.log("After");

// Page 20

function addAsync(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1);
}

console.log("This is an asynchronous call!")
console.log("Before");
addAsync(1,2,function(result){
  console.log("(Async) The result is " + result);
});
console.log("After");

// Page 22

console.log("Not all functions using callbacks are asynchronous")
var fooArray = [1,2,3,4,5];
console.log("Before");
var newArray = fooArray.map(function (item) {
  console.log("Proccessing " + item);
  return item + 1;
})
console.log("After");
console.log(newArray, " <--- This result was returned synchronously")
