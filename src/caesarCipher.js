export default caesarCipher = (plaintext, key) => {
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

  let ciphered = "";
  for (let letter of plaintext) {
    if (letters.includes(letter.toLowerCase())) {
      let safeKey = letters.indexOf(letter.toLowerCase()) + key;
      if (safeKey > 26) {
        safeKey = safeKey % 26;
      }
      console.log(safeKey);
      const theLetter = letters[safeKey];
      ciphered +=
        letter.toLowerCase() === letter ? theLetter : theLetter.toUpperCase();
    } else {
      ciphered += letter;
    }
  }
  return ciphered;
};
