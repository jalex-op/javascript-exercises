// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa, to 1 decimal place:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// ```



// equation: 5/9 * (Tf - 32)
const convertToCelsius = function(inputTempF) {

let convertedTempC = (5 / 9 * (inputTempF - 32));
let roundedTempC = convertedTempC.toFixed(1)
let result = parseFloat(roundedTempC);
return result;
};

// equation: (9/5 * Tc) + 32
const convertToFahrenheit = function(inputTempC) {

let convertedTempF = ((9 / 5 * inputTempC) + 32);
let roundedTempF = convertedTempF.toFixed(1)
let result = parseFloat(roundedTempF);
return result; 


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
