const leapYears = function(year) {
    let non_century = year % 4;
    let century = year % 100;
    let fourhundred = year % 400;

    if (fourhundred === 0) return true;

    if (century === 0) return false;

    if (non_century === 0) return true;
        else return false
};

// Do not edit below this line
module.exports = leapYears;
