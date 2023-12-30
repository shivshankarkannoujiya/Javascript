// let person = {
//   fName: "Abhi",
//   lName: "Kannoujiya",
// };
// console.log(person);

// function to print full name
// function fullName() {
//   return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

let person = {
  fName: "Abhi",
  lName: "Kannoujiya",

  // getter
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  // setter
  set fullName(value) {
    let parts = value.split(" ");
    this.fName = parts(0);
    this.lName = parts(1);
  },
};

// accessing
console.log(person.fullName);
