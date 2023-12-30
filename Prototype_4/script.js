let myHeros = ["Thor", "spiderman"];
let dcHeros = ["Batman", "blackadma", "superman"];

let heropower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};


Object.prototype.abhishek = function () {
  console.log(`Abhishek is present in all Objects`);
};

myHeros.abhishek();
