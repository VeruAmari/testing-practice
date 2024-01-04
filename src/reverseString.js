export default reverseString = (str) => {
  if (!str) {
    return str;
  }
  const safe = String(str);
  let result = "";
  for (let i = safe.length - 1; i >= 0; i--) {
    result += safe[i];
  }
  return result;
};
