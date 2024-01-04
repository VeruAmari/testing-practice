export default capitalize = (str) => {
  const first = str.slice(0, 1);
  const rest = str.slice(1, str.length);
  const result1 = first.toUpperCase();
  const result2 = rest.toLowerCase();
  const result = result1 + result2;
  return result;
};
