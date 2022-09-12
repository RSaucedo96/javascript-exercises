const add = function(firstNumber,secondNumber) {
	return firstNumber+secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber-secondNumber;
};

const sum = function(numbers) {
  var total=0;
	if(numbers.isEmpty){
    return 0;
  }
  else if(numbers.length == 1){
    return numbers[0];
  }
  else{
    numbers.forEach(element => {
      total+=element;
    });
    return total;
  }
};

const multiply = function(numbers) {
  var total=1;
  numbers.forEach(element => {
    total*=element;
  });
  return total;
};

const power = function(number, power) {
  var total=1;
  for (let index = 0; index < power; index++) {
    total*=number;
  }
  return total;
};

const factorial = function(number) {
  var total=1;
	if (number==0 || number==1){
    return 1;
  }
  else{
    for (let index = 1; index <= number; index++) {
      total*=index;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
