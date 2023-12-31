// Primitive : These are call by value
// 7 types : string,Number,boolean,null,undefined,symbol,bigint

// Non-Primitive : Refrence type
// Array,object,function

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 12333333333n;

const heros = ["Shaktiman", "nagraj", "daga"];

let myObj = {
  name: "Abhi",
  age: 20,
};

const myFunction = function () {
  // console.log("Hello World");
};

// +++++++++++++++++++++++++++++++---MEMORY---+++++++++++++++++++++++++++++++++++++++++

/*
Stack(Primitve), Heap(Non-primitive)
*/

let myYoutubeName = "YouTube";

let anotherName = myYoutubeName;
anotherName = "codinngChannel";
// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "user@google.com";

console.log(userOne.email);
console.log(userTwo.email);
