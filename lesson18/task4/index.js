"use strict";

export const saveCalls = (func) => {
  //input: callback
  //output: function

  let calls = [];

  function withMemory(...args) {
    //input: arguments
    //output: result of the function

    calls.push(args);
    return func.apply(this, args);
  }
  withMemory.calls = calls;
  return withMemory;
};

// ----------------------------------------

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls);

// ----------------------------------------

const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: "Tom" });

console.log(methodWithMemory.calls);
