# Object

## Creating object

```javascript
const rectangle = {
  // property
  length: 1,
  breadth: 2,

  // Behaviour:method
  draw: function () {
    console.log("Draw");
  },
};
console.log(rectangle);
console.log(rectangle.draw());
console.log(rectangle.length);
```

# Creating object using function

    1. Factory function
    2. Constructor function

## 1. Factory function

_Function that create object and return that object_

Syntax :

```javascript
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

// _OR : return directly object_

function createRectangle() {
  return (rectangle = {
    length: 1,
    breadth: 2,

    drar: function () {
      console.log("Drawing....");
    },
  });
}

// Creating object : calling function
let rectangle1 = createRectangle();
```

> Passing parameter to the factory function

```javascript
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
```

## 2. Constructor function

_Follow Pascal Notation_
_Init the value to property and define method/function_
