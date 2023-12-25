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
 