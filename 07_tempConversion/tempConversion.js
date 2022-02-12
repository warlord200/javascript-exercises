const ftoc = function(F) {
  let C;
  let number;
  number = (F - 32) * 5/9
  C = Math.round(number * 10) / 10
  return C;

};

const ctof = function(C) {
  let F;
  let number;
  number = (C * 9/5) + 32
  F = Math.round(number * 10) / 10
  return F;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
