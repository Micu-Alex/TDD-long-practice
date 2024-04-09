module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string' || string.length === 0) {
    throw new Error('Please provide a valid non-empty string');
  }
  return string.split("").reverse().join("")
};

