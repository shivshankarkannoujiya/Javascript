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
