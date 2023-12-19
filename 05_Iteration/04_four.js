const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// for in
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
  // console.log(`${key} : ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  // console.log(programming[key]);
}

// Not iterable using forin
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United states of America");
// map.set("Fr", "France");
// // console.log(map);

// for (const key in map) {
//   console.log(key);
// }
