const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  const sumWithInitial = arr.reduce((a, b) => a + b, 0);
  return sumWithInitial;
};

const multiply = function(arr) {
  const multAll = arr.reduce( (a, b) => a * b);
  return multAll;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let ans = 1;
  
  for (let i = x; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
