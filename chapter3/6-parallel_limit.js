function searchNumber(toFind, callback) {
  var steps = 0;
  console.log("Initializing search of number: " + toFind);
  var interval = setInterval(function () {
    steps ++;
    var generated = parseInt(Math.random()*10);
    console.log("Number generated: " + generated)
    if (generated == toFind) {
      clearInterval(interval);
      callback(generated, steps);
    }
  }, 1000);
}

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    while ((this.running < this.concurrency) && this.queue.length) {
      var task = this.queue.shift();
      this.running++;
      task(() => {
        this.running--;
        this.next();
      });
    }
  }
}


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var tasker = new TaskQueue(2);

function taskBuilder(callback) {
  searchNumber(this.number, function (found, steps) {
    console.log("Number " + found + " was found in " + steps + " steps");
    callback();
  });
}

numbers.forEach(function (number) {
  console.log("Queueing number: " + number);
  tasker.pushTask(taskBuilder.bind({ number: number }));
});
