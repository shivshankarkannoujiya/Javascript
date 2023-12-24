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

// or : Arrow Function
// let course = courses.find((crs) => crs.Name === "python");


// Removing Element
// end , Beginning, Middle 

// End : pop ()
// Beginning : shift()
// Middle : splice(index,no_of_element_wants to delete)

let numbers = [1,2,3,4,5,6,7]

// End
// number.pop()
// console.log(numbers);

// Beginning
// number.shift()
// console.log(numbers);

// Middle
numbers.splice(4,1)
console.log(numbers);