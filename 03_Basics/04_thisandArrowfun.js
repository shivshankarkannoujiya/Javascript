const user = {
  username: "Abhishek",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to our website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function Chai() {
//   let username="Abhi"
//   console.log(this.username); undefined
// }
// Chai();

// const chai = function(){
//   let username="Abhi"
//   console.log(this.username); // undefined
// }
// chai()

// ===================== Arrow function =================

// Arrow function
const chai = () => {
  let username = "Abhi";
  // console.log(this.username); undefined
  console.log(this); //{}
};
// chai();

// const addTow = (num1,num2)=>{
//   return num1+num2;
// }

//Implicit return*****
// const addTow = (num1, num2) => (num1 + num2);

// const addTow = (num1, num2) => num1 + num2;
// console.log(addTow(2, 5));

//To return object : need parenthesis
const addTow = (num1, num2) => ({ username: "Abhishek" });
console.log(addTow(2, 5));
