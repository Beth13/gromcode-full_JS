"use strict";

const getValue = (value) =>
  new Promise((resolve) => {
    resolve(value);
  });

const asyncNumber1 = getValue(1);
const asyncNumber2 = getValue(1000);
const asyncNumber3 = getValue(10);

const getSum = (numbers) =>
  numbers.filter((value) => !isNaN(value)).reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3).then((result) =>
  console.log(result)
);
