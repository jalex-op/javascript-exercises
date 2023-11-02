// Write a function that determines whether or not a given string is a palindrome.
// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:


const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") === processedString;
};

// Do not edit below this line
module.exports = palindromes;
