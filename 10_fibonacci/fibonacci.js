// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```


// create an array to store: the first 2 fib numbers (0, 1), and the generated fib numbers (n + (n-1))
// returns the fib number that is in whatever input place of the sequence (e.g., find 4th fib number --> function(4) = 3)



const fibonacci = function(fibInput) {
    if (fibInput < 1) {
        return "Input an integer greater than 0";
    }  
    let [a, b] = [1, 1];
    if (fibInput === 1 || fibInput === 2) {
        return 1;
    }
    else {
        for (let i = 2; i <= fibInput; i++){            // start at function(2) which equals 1, and go up one
            [a, b] = [b, a + b];
        }
    }
    return a;

};

//  npm test fibonacci.spec.js

// Do not edit below this line
module.exports = fibonacci;



// 1 2 3 5 8 13 
