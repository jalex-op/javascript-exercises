
// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// >

// for a single input integer, 
//  - check if it is divisible by 4 (% 4) --> leap year
//  - check if it is divisible by 100 --> not leap year
//  - check if it is divisible by 100 AND 400 --> leap year



const leapYears = function(inputYear) {
    let leapCheck = false;
    if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) 
        || (inputYear % 100 === 0) && (inputYear % 400 === 0)) {
        
        leapCheck = true;

    } 

    return leapCheck;
};






// Do not edit below this line
module.exports = leapYears;
