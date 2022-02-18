//input: arr
//output: number

//algo:
//1. Проверка на передачу массива
//2. Привожу все элементы массива к модулю
//3. В переменной сохраняю минимальный элемент массива
//4. Привожу элемент массива с переменной к квадрату и визвращаю его

export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return [];
  }
  const newArr = arr.map((num) => Math.abs(num));
  const result = Math.min(...newArr);
  return Math.pow(result, 2);
};

//test data
console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
