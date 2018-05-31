/*Addition Functions*/

var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number to add:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

/*Subtraction functions*/

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number to subtract:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

/*Multiplication Functions*/

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number to multiply:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

/*Division Functions*/

var division = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number to divide:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = division(number1, number2);
alert(result);
