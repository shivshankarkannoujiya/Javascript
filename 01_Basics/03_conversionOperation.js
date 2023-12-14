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
console.log(stringNumber);
console.log(typeof stringNumber);
