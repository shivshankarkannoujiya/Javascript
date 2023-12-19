// reduce
const myNus = [1, 2, 3];

// const myTotal = myNus.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and currval : ${currval}`);
//   return acc + currval;
// }, 0);
// console.log(`myTotal : ${myTotal}`);

// using =>
const myTotal = myNus.reduce((acc, currval) => acc + currval, 0);
// console.log(`myTotal : ${myTotal}`);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "Data science course",
    price: 12999,
  },
];

// Add all prices in shoppingCart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`priceToPay : ${priceToPay}`);
