const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
  return a - b
	
};

const sum = function(Array) {
  let num = 0
  for(let i = 0;i < Array.length;i++){
    num += Array[i]
  }
  return num
	
};

const multiply = function(Array) {
  let num = 1
  for(let i = 0;i < Array.length;i++){
    num *= Array[i]
  }
  return num

};

const power = function(num,power) {
  let sum = 1
  for(i = 1; i <= power;i++){
    sum = sum * num
  }
  return sum
	
};

const factorial = function(n) {
  let sumNum = 1
  for(let i = 1;i <= n;i++){
    sumNum *= i
  }
  return sumNum
	
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
