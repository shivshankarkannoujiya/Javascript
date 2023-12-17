// Immediately Invoked Function Expression (IFFI)

// function chai() {
//   console.log("DB connected...");
// }
// chai()

// IFFI
(function chai() {
  // Named IFFI
  console.log("DB connected...");
})();

((name) => {
  // console.log("DB connected-2...");
  console.log(`DB connected-2 ${name}`);
})(`Abhisek`);
