export default calculator = () => {
  const add = (i, j) => {
    if (typeof i === "string") {
      i = 0;
    }
    if (typeof j === "string") {
      j = 0;
    }
    return i + j;
  };
  const subtract = (i, j) => {
    if (typeof i === "string") {
      i = 0;
    }
    if (typeof j === "string") {
      j = 0;
    }
    return i - j;
  };
  const multiply = (i, j) => {
    if (typeof i === "string") {
      i = 0;
    }
    if (typeof j === "string") {
      j = 0;
    }
    return i * j;
  };
  const divide = (i, j) => {
    if (typeof i === "string") {
      i = 0;
    }
    if (typeof j === "string") {
      j = 0;
    }
    if (j === 0) {
      throw new Error("Can't divide by zero");
    }
    return Math.round((i * 100) / j) / 100;
  };
  return { add, subtract, multiply, divide };
};
