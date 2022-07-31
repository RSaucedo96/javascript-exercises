const removeFromArray = function(numbers,...args) {
    var i = numbers.length;
    while (i--) {
        for (let j = 0; i < args.length; j++) {
            if (numbers[i] === args[j]) {
                numbers.splice(numbers.indexOf(args[j]), 1);
            }
        }    
    }   
};

// Do not edit below this line
module.exports = removeFromArray;
