export default caesarCipher = (plaintext, key) => {
  if (!key && key !== 0) {
    key = 0;
    while (key === 0) {
      key = Math.round(Math.random() * 100);
    }
  }
  if (key < 0) {
    key = 26 + key;
  }
  if (key > 26) {
    key = Math.round(key % 26);
  }
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const LETTERS = [
    "A",
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let ciphered = "";

  function cipher(arr, char) {
    let safeKey = arr.indexOf(char) + key;
    if (safeKey >= 26) {
      safeKey = safeKey % 26;
    }
    console.log(safeKey);
    const newChar = arr[safeKey];
    ciphered += newChar;
  }

  for (let char of plaintext) {
    if (letters.includes(char)) {
      cipher(letters, char);
    } else if (LETTERS.includes(char)) {
      cipher(LETTERS, char);
    } else {
      ciphered += char;
    }
  }
  return ciphered;
};
