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

# Searching

_includes_

```javascript
console.log(array.includes(element));
console.log(array.indexOf(element, start_index));
```

## Object/Refrence

> Callback Function  
> _find_

```javascript
let courses = [
  {
    No: 1,
    Name: "python",
  },
  {
    No: 2,
    Name: "cpp",
  },
];

let course = courses.find(function (crs) {
  return crs.Name === "python";
});
console.log(course);

// or : Using Arraow function
let course = courses.find((crs) => crs.Name === "python");
```

# Removing Elements

- End : pop ()
- Beginning : shift()
- Middle : splice(index , no_of_element_wants to delete)              
