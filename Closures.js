function makeFunctionArray() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function (i) {
      return function () {
        console.log(i);
      };
    })(i);
    return arr;
  }
  const makeFunctionArray = makeFunctionArray();
  arr[0]();
}

// closures example

function makeHelloFunction() {
  const message = "help";

  function sayHello() {
    console.log(message);
  }
  return sayHello;
}
const sayHello = makeHelloFunction();
console.log(message);
sayHello();

// immediately invoked function expression

const sayHello = (function () {
  var message = "Hello";

  function sayHello() {
    console.log(message);
  }
  return sayHello;
})();

// counter
const counter = (function () {
  let count = 0;

  return {
    inc: function () {
      count = count + 1;
    },
    get: function () {
      console.log(count);
    },
  };
})();

counter.get();
counter.inc();
counter.get();
