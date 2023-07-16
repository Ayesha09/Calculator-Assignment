let num1 = 100;
let num2 = 32;
let num3 = 150;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;


//------------Arithametic Operators------------//
console.log(`Addition of ${num1} and ${num2} is = ${add}`);
console.log(`Subtraction of ${num1} and ${num2} is = ${sub}`);
console.log(`Multiplication of ${num1} and ${num2} is = ${mul}`);
console.log(`Division of ${num1} and ${num2} is = ${div}`);
console.log(`Modolus of ${num1} and ${num2} is = ${mod}`);

//------------Comparision Operators------------//
console.log(`${num1} is equal to ${num2} = `+ (num1===num2)); // is it correct?
console.log(`${num1} is equal to ${num2} = `+ (!(num1===num2))); // is it correct?
console.log(num1 + " is greater than " + num2  + " = " + (num1>num2));
console.log(num1 + " is smaller than " + num2  + " = " + (num1<num2));

//------------Logical Operators------------//
console.log(num1 + " is greater than " + num2 + " and " + "smaller than " + num3 + " = " + (num1>num2 && num1<num3));
console.log(num3 + " is greater than " + num2 + " and " + "smaller than " + num1 + " = " + (num3>num2 && num3<num1));
console.log(num3 + " is greater than " + num2 + " or " + num1 + " smaller than " + num2 + " = " + (num3>num2 || num1<num2));
console.log(num2 + " is smaller than " + num3 + " = " + (!(num3>num2)));