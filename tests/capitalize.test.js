import cap from "../src/capitalize";

test("it works on short strings", () => {
  expect(cap("abc")).toBe("Abc");
});

test("it works on single character strings", () => {
  expect(cap("a")).toBe("A");
});

test("it doesn't break on empty imput", () => {
  expect(cap("")).toBe("");
});

test("it works on already capitalized characters", () => {
  expect(cap("ABCD")).toBe("Abcd");
});

test("it ignores numbers", () => {
  expect(cap("123")).toBe("123");
});
