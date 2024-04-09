function returnsThree() {
  // Your code here
  return 3; 
}

function reciprocal(n) {
  // Your code here
  if (n === 0) {
    return Infinity; 
  } else {
    return 1 / n; 
  }
}

module.exports = {
  returnsThree,
  reciprocal
};