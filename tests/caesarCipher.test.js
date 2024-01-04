import caesarCipher from "../src/caesarCipher";

test("basic cipher test", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("ciphers with negative value", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
});

test("ciphers keys bigger than 24", () => {
  expect(caesarCipher("abc", 30)).toBe("bcd");
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
