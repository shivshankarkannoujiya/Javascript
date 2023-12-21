const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "iceCold") {
      body.style.backgroundColor = "#a0d2eb";
    }
    if (event.target.id === "grandpaOrange") {
      body.style.backgroundColor = "#ffb766";
    }
    if (event.target.id === "nightBlue") {
      body.style.backgroundColor = "#2d545e";
    }
    if (event.target.id === "grassyGreen") {
      body.style.backgroundColor = "#9bc400";
    }
  });
});
