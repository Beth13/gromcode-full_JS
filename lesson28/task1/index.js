"use strict";

export const calc = (initialValue) => {
  let result = initialValue;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    substract(number) {
      result -= number;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).substract(5).result();

console.log(result);
