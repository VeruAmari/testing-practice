export default analyzeArray = (arr) => {
  arr.sort((a, b) => {
    return a < b ? -1 : 1;
  });
  const obj = {};
  obj.length = arr.length || Number(0);
  obj.average = arr[Math.floor(arr.length / 2)];
  obj.min = arr[0];
  obj.max = arr[arr.length - 1];
  return obj;
};
