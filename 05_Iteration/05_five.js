// foreach-loop
const coding = ["js", "ruby", "java", "python", "cpp"];

// Basics:1
// coding.forEach(function (value) {
//   console.log(value);
// });

// 2
// // using Arrow function
// coding.forEach((value) => {
//   console.log(value);
// });

// 3
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// 4
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// 5. Object ->> inside -->> Array
const myCoding = [
  {
    languageName: "Javascrpt",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
