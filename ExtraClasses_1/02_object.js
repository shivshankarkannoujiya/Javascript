// Dynamic Nature of Object

function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;
  this.draw = function () {
    console.log("Drawing.....");
  };
}

// Creating Object
let rectObj = new Rectangle(4, 5);

// Adding Property in the object
rectObj.color = "yellow";
console.log(rectObj);

// delete property of object
delete rectObj.color;
console.log(rectObj);
