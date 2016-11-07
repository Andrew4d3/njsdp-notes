// Page 83

// If we require to iterate asynchronously over an array, It's necessary to call recursively our async function

const items = [21, 2, 10, 5];

function iterate(index) {
  // If this is true, we still have items left to iterate. Otherwise we don't do anything
  if (index < items.length) {
    setTimeout(function () {
      console.log("Iterating on: " + items[index]);
      // And we proceed to iterate the next index by adding 1
      iterate(index + 1);
    }, 1000);
  }
}

iterate(0);
