// The goal for this exercise is to create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.


// should be able to input as many numbers as you want, including with decimals

const add = function(a, b) {
  return (a + b);

};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);          // basically says the same as a for loop. ", 0" means start the sum with 0
};                                                                      // in case an empty array is input

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};



const factorial = function() {
	
};


// npm test calculator.spec.js

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

