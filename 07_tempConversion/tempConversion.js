const ftoc = function(fare) {
  celcius=((fare - 32)*(5/9));
  return (Math.round(celcius * 10) / 10);
};

const ctof = function(cel) {
  fare=((cel*(9/5))+32);
  return (Math.round(fare * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
