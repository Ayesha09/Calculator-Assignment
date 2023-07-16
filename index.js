var num1 = 100;
var num2 = 32;
var num3 = 150;
var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
//------------Arithametic Operators------------//
console.log("Addition of ".concat(num1, " and ").concat(num2, " is = ").concat(add));
console.log("Subtraction of ".concat(num1, " and ").concat(num2, " is = ").concat(sub));
console.log("Multiplication of ".concat(num1, " and ").concat(num2, " is = ").concat(mul));
console.log("Division of ".concat(num1, " and ").concat(num2, " is = ").concat(div));
console.log("Modolus of ".concat(num1, " and ").concat(num2, " is = ").concat(mod));
//------------Comparision Operators------------//
console.log("".concat(num1, " is equal to ").concat(num2, " = ") + (num1 === num2)); // is it correct?
console.log("".concat(num1, " is equal to ").concat(num2, " = ") + (!(num1 === num2))); // is it correct?
console.log(num1 + " is greater than " + num2 + " = " + (num1 > num2));
console.log(num1 + " is smaller than " + num2 + " = " + (num1 < num2));
//------------Logical Operators------------//
console.log(num1 + " is greater than " + num2 + " and " + "smaller than " + num3 + " = " + (num1 > num2 && num1 < num3));
console.log(num3 + " is greater than " + num2 + " and " + "smaller than " + num1 + " = " + (num3 > num2 && num3 < num1));
console.log(num3 + " is greater than " + num2 + " or " + num1 + " smaller than " + num2 + " = " + (num3 > num2 || num1 < num2));
console.log(num2 + " is smaller than " + num3 + " = " + (!(num3 > num2)));
