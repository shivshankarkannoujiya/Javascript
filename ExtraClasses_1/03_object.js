// Function are object
// Iterating throughh Object

// For of : which are iterable
// for in

const rectangle = {
  length: 12,
  breadht: 10,
};

// for in loop
for (let key in rectangle) {
  // console.log(key);
  // console.log(key, rectangle[key]);
}

for (let key of Object.entries(rectangle)) {
  // console.log(key);
}

// or
for (let key of Object.keys(rectangle)) {
  // console.log(key);
}

// Find property exist or not in Object ?

// if ("length" in rectangle) {
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

// Object Cloning

// let src = {
//   value: 10,
// };
// console.log(src);

// // Create empty object
// let dest = {};

// copy all the key and value in dest object
// for (let key in src) {
//   dest[key] = src[key];
// }
// console.log(dest);

// Assign

// let srcObj = {
//   score: 10,
// };

// let destObj = Object.assign({}, srcObj);
// console.log(destObj);

// spread
let srcObj = {
  score: 10,
};

let destObj = { ...srcObj };
console.log(destObj);
