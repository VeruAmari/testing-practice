import calculator from "../src/calculator";

//add
test("basic add", () => {
  expect(calculator().add(1, 2)).toBe(3);
});

test("add negatives", () => {
  expect(calculator().add(-1, -2)).toBe(-3);
});

test("add one negative", () => {
  expect(calculator().add(-1, 2)).toBe(1);
});

test("treat sum string input as 0", () => {
  expect(calculator().add("a", 1)).toBe(1);
});

//subtract
test("basic sub", () => {
  expect(calculator().subtract(2, 1)).toBe(1);
});

test("subtract negatives", () => {
  expect(calculator().subtract(-2, -1)).toBe(-1);
});

test("subtract one negative", () => {
  expect(calculator().subtract(-1, 2)).toBe(-3);
});

test("treat subtraction string input as 0", () => {
  expect(calculator().subtract("a", 1)).toBe(-1);
});

//divide
test("basic division", () => {
  expect(calculator().divide(4, 2)).toBe(2);
});

test("divide negatives", () => {
  expect(calculator().divide(-4, -2)).toBe(2);
});

test("divide one negative", () => {
  expect(calculator().divide(-2, 2)).toBe(-1);
});

test("to treat division string input as 0", () => {
  expect(calculator().divide("a", 1)).toBe(0);
});

test("handle division by zero", () => {
  expect(() => calculator().divide(2, 0)).toThrow("Can't divide by zero");
});

test("handle dividing decimals", () => {
  expect(calculator().divide(3.3, 3)).toBeCloseTo(1.1);
});

//multiply
test("basic multip", () => {
  expect(calculator().multiply(4, 2)).toBe(8);
});

test("to multiply two negatives", () => {
  expect(calculator().multiply(-4, -2)).toBe(8);
});

test("to multiply one negative", () => {
  expect(calculator().multiply(-2, 2)).toBe(-4);
});

test("treat multiply string input as 0", () => {
  expect(calculator().multiply("a", 1)).toBe(0);
});

test("handle multiplication by zero", () => {
  expect(calculator().multiply(2, 0)).toBe(0);
});

test("handle multiplying decimals", () => {
  expect(calculator().multiply(1.5, 1.5)).toBeCloseTo(2.25);
});
