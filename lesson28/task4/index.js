"use strict";

const add2 = (value) => value + 2;
const square = (value) => value * value;
const half = (value) => value / 2;

export const compose =
  (...func) =>
  (value) => {
    return func.reduce((acc, func) => func(acc), value);
  };

const doEverything = compose(add2, square, half);

console.log(doEverything(2));
