// for of

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  //   console.log(value);
}

const greetings = "Hello world";
for (const greet of greetings) {
  //   console.log(`Eachichar is ${greet}`);
}

//Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}


const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObj) {
//   console.log(key, ":-", value);
// }

