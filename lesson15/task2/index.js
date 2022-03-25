export const createCalculator = () => {
  let memory = 0;
  const add = (num) => {
    return (memory += num);
  };

  const decrease = (num) => {
    return (memory -= num);
  };

  const reset = () => {
    return (memory = 0);
  };

  const getMemo = () => {
    return memory;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const number1 = createCalculator();
const number2 = createCalculator();

console.log(number1.add(5));
console.log(number1.add(6));
console.log(number2.add(3));
console.log(number1.reset());
console.log(number2.getMemo());
