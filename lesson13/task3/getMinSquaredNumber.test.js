import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should not be an empty array!", () => {
  const res = getMinSquaredNumber([]);
  expect(res).toEqual([]);
});

it("should be an array!", () => {
  const res = getMinSquaredNumber("[-2, 3, 4, -5]");
  expect(res).toEqual(null);
});

it("should be abs of min number!", () => {
  const res = getMinSquaredNumber([-2, 3, 4, -5]);
  expect(res).toEqual(4);
});
