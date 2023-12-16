const name = "Abhishek";
const repoCount = 50;

// console.log(name + repoCount + " Value"); outdated syntax

// Using Backtick
//string interpolation
// we use to make placeholders

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("game-ab");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(1));

// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 2);
// console.log(newString);

const anotherString = gameName.slice(-7, 4);

const newStr1 = "      abhishek        ";
// console.log(newStr1);
// console.log(newStr1.trim());

const url = "https://amazon.com/product%20purchase";
console.log(url.replace("%20", "-"));

console.log(url.includes("amazon"));
console.log(url.includes("rock"));

const splitString = "abhi-kumar-kannoujiya";
console.log(splitString.split("-"));
