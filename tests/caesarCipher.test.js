import caesarCipher from "../src/caesarCipher";

test("basic cipher test", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("ciphers with negative value", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
});

test("ciphers keys bigger than 26", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("returns plaintext when key is 0", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("handles non numeric keys", () => {
  () => expect(caesarCipher("abc", "a")).toThrow(Error);
});

test("applies a random cipher when no key", () => {
  expect(caesarCipher("abc")).not.toBe("abc");
});

test("handles uppercase characters", () => {
  expect(caesarCipher("aBc", 1)).toBe("bCd");
});

test("ignores punctuation", () => {
  expect(caesarCipher("a.c", 1)).toBe("b.d");
});

test("ignores numbers", () => {
  expect(caesarCipher("a1c", 1)).toBe("b1d");
});

test("max size key", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
});
