const repeatString = function(stringText, times) {
    let result = '';
    if (times < 0) return 'ERROR';
    for (let i = 0; i < times; i++) {
        result = result + stringText;   // could also do result += stringText, is same thing but less clear code
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
