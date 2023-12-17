function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 4000, 500, 700));

const user = {
  username: "Abhishek",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)
handleObject({
  username: "rock",
  price: 199,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));
