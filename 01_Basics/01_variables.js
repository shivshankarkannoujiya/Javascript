const accountId = 12345;
let accountEmail = "abhi@gmail.com";
var accountPassword = "xyz123";
accountCity = "Jaipur";

// accountId =2  // not allowed
accountEmail = "ab@gmail.com";
accountPassword = "4321";
accountCity = "Delhi";

let accoutState; // Declare but not define : Undefined

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accoutState,
]);

/*
Prefer not to use : var 
Because : Issue in Block scope and Functional scope 
*/
