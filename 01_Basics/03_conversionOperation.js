let score = "32abc";

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN

let marks = null;
// console.log(typeof marks); //object
// console.log(marks); // null

let marksInNumber = Number(marks);
// console.log(typeof marksInNumber); //number
// console.log(marksInNumber); //0

let age = undefined;
// console.log(typeof age); // undefined
// console.log(age); // undefined

let ageInNumber = Number(age);
// console.log(typeof ageInNumber); // number
// console.log(ageInNumber); // NaN

let isLoggedIn = true;
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);

let isLoggedIninNumber = Number(isLoggedIn);
// console.log(typeof isLoggedIninNumber);
// console.log(isLoggedIninNumber);

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
*/

// let isLogin = 1
// let isLogin = ""
let isLogin = "Abhi";

let booleanIsLogin = Boolean(isLogin);
// console.log(booleanIsLogin);

/*
1 => true ; 0 => false
"" => false
"Abhi" => true
*/

let number = 33;
let stringNumber = String(number);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************* Operations *******************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

str1 = "Hello";
str2 = " Abhi";
str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
// ++gameCounter;
// console.log(gameCounter);
