import analyzeArray from "../src/analyzeArray";

test("basic test", () => {
  expect(analyzeArray([1, 3, 2])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("handles empty array input", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("handles arrays with a single item", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("handles arrays with mixed characters", () => {
  expect(analyzeArray(["a", ".", 3, 50, "@"])).toEqual({
    average: 3,
    min: ".",
    max: "@",
    length: 5,
  });
});

test("handles arrays with only letters", () => {
  expect(analyzeArray(["a", "d", "c"])).toEqual({
    average: "c",
    min: "a",
    max: "d",
    length: 3,
  });
});
