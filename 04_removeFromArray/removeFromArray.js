const removeFromArray = function(numbers,...args) {
    var i = numbers.length;
    while (i--) {
        for (let j = 0; j < args.length; j++) {
            if (numbers[i] === args[j]) {
                numbers.splice(numbers.indexOf(args[j]), 1);
            }
        }    
    }
    return numbers   
};


// Do not edit below this line
module.exports = removeFromArray;
