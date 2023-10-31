// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
//
// -----
// need to input an array and an integer into the function
// array reads the integer


const removeFromArray = function() {
    let inputParams = Array.from(arguments);
    let inputArray = inputParams[0];
    let removingParams = inputParams.slice(1);  // keeps all the params after the first function param (which we know we want to keep for sure)

    let filteredArray = inputArray.filter(item => !removingParams.includes(item)); // says for each item in the array, do !removeParams.includes(item)
                                                                                    // then check the array of extra params -> filter out any item in it

    return filteredArray;                                                           
};



// Below is working code using Rest parameters syntax (more modern)
//
// const removeFromArray = function(inputArray, ...paramsToRemove) {
//     let filteredArray = inputArray.filter(item => !paramsToRemove.includes(item));
//     return filteredArray;
// };

// Do not edit below this line
module.exports = removeFromArray;

