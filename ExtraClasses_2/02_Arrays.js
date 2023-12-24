let courses = [
  {
    No: 1,
    Name: "python",
  },
  {
    No: 2,
    Name: "cpp",
  },
];

// console.log(courses);

// let indexIs = courses.indexOf({ No: 1, Name: "Abhi" });
// console.log(indexIs); // -1
// console.log(courses.includes({ No: 1, Name: "Abhi" })); // false

// Searching : Non-Primitive
// object/Refrences
// Call back function

// let course = courses.find(function (crs) {
//   return crs.Name === "python";
// });
// console.log(course);

// or
let course = courses.find((crs) => crs.Name === "python");
