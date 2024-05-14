const reverseString = function(input) {
    const revString = input.split("").reduce((acc, char) => char + acc, "");
    return revString
};

// Do not edit below this line
module.exports = reverseString;
