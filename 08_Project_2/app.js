const form = document.querySelector("form");
// This usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get the value height and weight
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height => ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height => ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
