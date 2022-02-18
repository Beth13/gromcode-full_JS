export const getSquaredNumbres = (arr) => {
  return arr.map((num) => num * num);
};

export const getOddNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 1);
};

export default (a, b) => a + b;

console.log(getSquaredNumbres([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
