// function

// calling function
// run();

// function-Declaration
function run() {
  console.log("Running....");
}

// calling function
// run();

// 2
//Named function-Assignment
let stand = function walk() {
  console.log("Walking...");
};

// calling-function
// stand();

let jump = stand;
// jump();

// 3 Anonymous function-assignment
let fun = function () {
  console.log("Enjoying...");
};
// fun();

function sum(a, b) {
  return a + b;
}

// calling function
// console.log(sum(1, 2));
// console.log(sum(1)); //NaN
// console.log(sum()); //NaN
// console.log(sum(1, 2, 3, 4, 5));

// Rest operator : ...

// function print(...args) {
//   console.log(args);
// }
// print(1, 2, 3, 4, 5, 6);

function print(num, val, ...args) {
  console.log(args);
}
// print(1, 2, 3, 4, 5, 6);

// Default parameter
function interest(p, r = 5, y) {
  return (p * r * y) / 100;
}
console.log(interest(1000, 10, 5));
// console.log(interest(1000, 10));
// console.log(interest(1000, 5));
// console.log(interest(10, 5));
