// try and catch : Error handling

let person = {
  fName: "Abhi",
  lName: "Kannoujiya",

  // getter
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  // setter
  set fullName(value) {
    if (typeof value != String) {
      throw new Error("You have not send a String");
    }
    let parts = value.split(" ");
    this.fName = parts(0);
    this.lName = parts(1);
  },
};

// console.log(person.fullName);
// try {
//   person.fullName = true;
// } catch (e) {
//   alert(e);
// }

