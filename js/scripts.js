// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var division = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

var number1 = parseInt(prompt("Enter a number to add:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);


var number1 = parseInt(prompt("Enter a number to subtract:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);


var number1 = parseInt(prompt("Enter a number to multiply:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);


var number1 = parseInt(prompt("Enter a number to divide:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = division(number1, number2);
alert(result);
