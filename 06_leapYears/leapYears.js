const leapYears = function(year) {
    //years divisible by 100 are not leap years
    //unless they are divisible by 400
    if (Number.isInteger(year/100)){
        if (Number.isInteger(year/400)){
            return true;
        }
        else { 
            return false;
        }
    }
    //Leap years are years divisible by four
    else if (Number.isInteger(year/4)){
        return true;
    }
    else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
