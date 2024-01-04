import reverseString from "../src/reverseString";

test("it works on a regular string", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
});

test("it works on numbers", () => {
  expect(reverseString(123456)).toBe("654321");
});

test("it works on mixed strings", () => {
  expect(reverseString("abCD3f6")).toBe("6f3DCba");
});

test("it doesn't break on single characters", () => {
  expect(reverseString("a")).toBe("a");
});

test("it doesn't break on empty strings", () => {
  expect(reverseString("")).toBe("");
});
