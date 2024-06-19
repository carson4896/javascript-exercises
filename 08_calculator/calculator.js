const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let ans = 1;
  if (number === 0) return 1;
  for (let i = 2; i <=number; i++)
    ans = ans * i
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
