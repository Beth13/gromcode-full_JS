export const createArrayOfFunctions = (num) => {
  let arr = [];

  if (!num) {
    return arr;
  }

  if (typeof num !== "number") {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
};

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions("ddd"));
console.log(createArrayOfFunctions());
