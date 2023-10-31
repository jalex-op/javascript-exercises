// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```
// ----------------
//
// takes in 2 integers -> function (int1, int2)
//      - need to force inputs to be integers
// finds the range of integers between int1 and int2 -> int1:int
// sums all the numbers in the range from int1 to int2, including int1 and int2
//





const sumAll = function(int1, int2) {
    
    if (typeof int1 !== "number" || typeof int2 !== "number" || int1 < 0 || int2 < 0) {         // forces only number types allowed to input, and no neg numbers
        return "ERROR";
    }

    if (int1 > int2) {
        [int1, int2] = [int2, int1];        // swaps int1 and int2. necessary for the Arithmetic Series formula to work 
    }

    let n = int2 - int1 + 1;                // # of numbers in the series
    let sum = n * (int1 + int2) / 2;        // Arithmetic Series formula - https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
