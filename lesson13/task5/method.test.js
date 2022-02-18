import { reverseArray, withdraw, getAdults } from "./method";

//TASK1

it("it has to be an array!", () => {
  const res = reverseArray(1);
  expect(res).toEqual(null);
});

it("it has to be an reversed array!", () => {
  const res = reverseArray([1, 2, 3, 4, 5]);
  expect(res).toEqual([5, 4, 3, 2, 1]);
});

it("it has not to be an empty array!", () => {
  const res = reverseArray([]);
  expect(res).toEqual([]);
});

//TASK2

it("it has to - amount!", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(res).toEqual(37);
});

it("it has to return -1", () => {
  const res = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 50);
  expect(res).toEqual(-1);
});

it('"clients" has to be an array!', () => {
  const res = withdraw("Ann", [1400, 87, -6], "Ann", 50);
  expect(res).toEqual(null);
});

//TASK3

it("It has to return people who has an age > 18", () => {
  const res = getAdults({ Bob: 19, Tom: 17, Anne: 20 });
  expect(res).toEqual({ Bob: 19, Anne: 20 });
});

it("It has to return empty object!", () => {
  const res = getAdults({});
  expect(res).toEqual({});
});

it("It has to be an object!", () => {
  const res = getAdults(1);
  expect(res).toEqual({});
});
