//singleton : declare using ctor

// const tinderUser = new Object() // singleton
// Non-singleton
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "sum@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Abhishek",
      lastname: "Kannoujiya",
    },
  },
};
// console.log(regularUser.fullname.userFullname.firstname);

// Merging Objects

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj5 = {
  5: "e",
  6: "f",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2, obj5);
// const obj4 = Object.assign({}, obj1, obj2, obj5);
// console.log(obj3);
// console.log(obj4);

const obj3 = { ...obj1, ...obj2[3], ...obj5 };
// console.log(obj3);

/*
Database se  value jab ayega then :
Database se value : array of object ayega 
*/

const user = [
  {
    id: 1,
    email: "ac@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

// Accessing value
user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // return array
// console.log(Object.values(tinderUser)); // return array
// console.log(Object.entries(tinderUser)); // each key:value ka array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// +++++++++++++++++++++++++++++++++++++++++++++++

// Destructuring
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Teacher",
};

// course.courseInstructor

// const { courseInstructor } = course;
// console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);

// API -> JSON

// {
//   "name":"abhi",
//   "coursename":"js in hindi",
//   "price":"free"
// }

// API -> Array -> obj

[{}, {}, {}];
