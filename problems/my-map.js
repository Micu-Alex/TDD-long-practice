function myMap(inputArray, callback) {
  // Your code here
  if (!Array.isArray(inputArray)) {
    throw new Error("Input must be an array");
  }
  if (typeof callback !== 'function') {
    throw new Error("Callback must be a function");
  }

  const resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    resultArray.push(callback(inputArray[i]));
  }
  return resultArray;

}

module.exports = myMap;