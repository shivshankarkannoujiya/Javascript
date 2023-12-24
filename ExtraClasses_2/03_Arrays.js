// Emptying an Array

// let numbers = [1, 2, 3, 4, 5];
// let numbersTwo = numbers;

// 1
// numbers = []
// console.log(numbers);
// console.log(numbersTwo);

// 2 *****
// numbers.length = 0;
// console.log(numbers);
// console.log(numbersTwo);

// 3
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(numbersTwo);

// Combining and Slicing Array

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let combinedArr = arr1.concat(arr2)
// console.log(combinedArr);

let array = [1, 2, 3, 4, 5, 6];
let slicedArray = array.slice(2, 3);
console.log(slicedArray);
