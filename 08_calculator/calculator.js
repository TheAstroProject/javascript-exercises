const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const sum = sum => {
	return sum.reduce((total, current) => total + current, 0);
};

const multiply = mult => {
  return mult.reduce((product, current) => product * current)
};

const power = (a, b) => {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
