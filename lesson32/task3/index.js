/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (value) => {
  // put you code here
  const result = new Promise((resolve) => {
    resolve(value);
  });

  return result;
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
