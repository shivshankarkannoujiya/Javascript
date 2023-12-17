function sayMyName() {
  console.log("A");
  console.log("b");
  console.log("h");
  console.log("i");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}

// addTwoNumber(3, 4);
// addTwoNumber(3, "4");
// addTwoNumber(3, "a");

const result = addTwoNumber(3, 5);
// console.log("Resukt : ", result);

// *****

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please Enter a username");
    return;
  }
  return `${username} just logged in !`;
}

// console.log(loginUserMessage("Abhishek"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());
