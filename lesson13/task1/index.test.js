import { getEvenNumbers } from "./index";

it("should get only even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([2, 4, 6]);
});

it("17 везде 17", () => {
  expect(17).toEqual(17);
});

it("17 везде 17", () => {
  expect(18).not.toEqual(17);
});
