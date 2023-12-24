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

// let array = [1, 2, 3, 4, 5, 6];
// let slicedArray = array.slice(2, 3);
// let sliceArray = array.slice(2);
// console.log(slicedArray);
// console.log(sliceArray);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let combinedArray = [...arr1, ...arr2];
// let combinedArray = [...arr1, "a", ...arr2, "b"];
// console.log(combinedArray);

// Creating copy
// let copyArray = [...combinedArray];

// let arr = [1, 2, 3, 4, 5, 6];

// forof
// for (let value of arr) {
//   console.log(value);
// }

// foreach
// arr.forEach((numbers) => {
//   console.log(numbers);
// });

// Filtering Arrays
let numbers = [1, 2, -1, 3, -4];
let filteredNumber = numbers.filter((value) => {
  return value >= 0;
});
console.log(filteredNumber);