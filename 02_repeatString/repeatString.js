const repeatString = function(word,num) {
    if (num <0){
        return "ERROR";
    }
    else if (num==0){
        return '';
    }
    else{
        var Words="";
        for (let i = 0; i < num; i++) {
            Words = Words + word;
        }
    }
    return Words;
};

// Do not edit below this line
module.exports = repeatString;
