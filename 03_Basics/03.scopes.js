// var c = 300;

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("Inner a : ", a);
  // console.log("Outer a : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log("Outer a : ", a);
// console.log("Inner a : ", a); // can not access

function one() {
  const username = "Abhi";

  function two() {
    const website = "YouTube";
    // console.log(username);
  }
  // console.log(website); // error
  two();
}

one();

if (true) {
  const username = "Abhishek";
  if (username === "Abhishek") {
    const website = " YouTube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//+++++++++++++++ Interesting +++++++++++++++
console.log(addOne(5)); // No-Error
function addOne(num) {
  return num + 1;
}

addTwo(5); // error
const addTwo = function (num) {
  return num + 2;
};
