"use strict";

// const values = [
//     "years",
//     "months",
//     "days",
//     "hours",
//     "minutes",
//     "seconds",
//     "miliseconds",
// ];

export const shmoment = (initialValue) => {
  const result = new Date(initialValue);

  const func = {
    add(value, num) {
      if (value === "days") {
        result.setDate(result.getDate() + num);
      } else if (value === "years") {
        result.setFullYear(result.getFullYear() + num);
      } else if (value === "months") {
        result.setMonth(result.getMonth() + num);
      } else if (value === "hours") {
        result.setHours(result.getHours() + num);
      } else if (value === "minutes") {
        result.setMinutes(result.getMinutes() + num);
      } else if (value === "seconds") {
        result.setSeconds(result.getSeconds() + num);
      } else if (value === "milliseconds") {
        result.setMilliseconds(result.getMilliseconds() + num);
      }
      return this;
    },
    subtract(value, num) {
      if (value === "days") {
        result.setDate(result.getDate() - num);
      } else if (value === "years") {
        result.setFullYear(result.getFullYear() - num);
      } else if (value === "months") {
        result.setMonth(result.getMonth() - num);
      } else if (value === "hours") {
        result.setHours(result.getHours() - num);
      } else if (value === "minutes") {
        result.setMinutes(result.getMinutes() - num);
      } else if (value === "seconds") {
        result.setSeconds(result.getSeconds() - num);
      } else if (value === "milliseconds") {
        result.setMilliseconds(result.getMilliseconds() - num);
      }
      return this;
    },
    result() {
      return result;
    },
  };

  return func;
};

const res = shmoment(new Date(2020, 5, 1))
  // .add("days", 2)
  .subtract("seconds", 6)
  .add("hours", 1)
  .subtract("minutes", 1)
  .add("years", 3)
  .subtract("months", 1)
  .add("milliseconds", 100)
  .result();
console.log(res);
