## Arrays

# Insertion

- End : array.push()
- Beginning : array.unshift()
- Middle : array.splice()

_End_

```javascript
let array = [1, 2, 3, 4, 5, 6];
console.log(array);

// Insertiong : End
array.push(9);
console.log(array);
```

_Beginning_

```javascript
let array = [1, 2, 3, 4, 5, 6];
console.log(array);

// Insertiong : Beginning
array.unshift(12);
console.log(array);
```

_Middle_

```javascript
let array = [1, 2, 3, 4, 5, 6];
console.log(array);

// Insertiong : Middle
array.splice(2, 0, "a", "b", "c");
console.log(array);
```
