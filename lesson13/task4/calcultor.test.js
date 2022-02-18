import { calc } from "./calculator";

it("here we have +", () => {
  const res = calc("1 + 3");
  expect(res).toEqual("1 + 3 = 4");
});

it("here we have -", () => {
  const res = calc("1 - 3");
  expect(res).toEqual("1 - 3 = -2");
});

it("here we have *", () => {
  const res = calc("1 * 3");
  expect(res).toEqual("1 * 3 = 3");
});

it("here we have /", () => {
  const res = calc("3 / 1");
  expect(res).toEqual("3 / 1 = 3");
});

it("here we have a string!", () => {
  const res = calc(1 + 3);
  expect(res).toEqual(null);
});
