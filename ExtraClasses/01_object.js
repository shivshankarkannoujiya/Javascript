// object creation
const rectangle = {
  length: 1,
  breadth: 2,

  draw: function () {
    console.log("Drawing rectangle...");
  },
};
// console.log(rectangle);
// console.log(rectangle.draw());
// console.log(rectangle.length);

// Factory function
function createRectangle() {
  const rectangle = {
    length: 1,
    breadth: 2,

    drar: function () {
      console.log("Drawing....");
    },
  };
  return rectangle;
}

// or return directly Object
function createRectangle() {
  return (rectangle = {
    length: 1,
    breadth: 2,

    drar: function () {
      console.log("Drawing....");
    },
  });
}

// passing parameter in the factory function

function createRectangle(length, breadth) {
  return (rectangle = {
    // length,
    // breadth,
    length: length,
    breadth: breadth,

    draw() {
      console.log("Drawing....");
    },
  });
}
let rectangle2 = createRectangle(12, 13);

// constructor function
function Rectangle() {
  (this.length = 1),
    (this.breadth = 2),
    (this.draw = function () {
      console.log("Drawing.....");
    });
}
let rectangleObj = new Rectangle();