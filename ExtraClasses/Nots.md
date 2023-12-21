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
_Function that create object  and return that object_

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
```