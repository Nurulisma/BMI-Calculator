let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let formInput = document.getElementById("calculate");

// console.log(weightInput);
// console.log(heightInput);

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let weight = weightInput.value
  let height = heightInput.value

  let result = weight / ((height / 100) ** 2);

  console.log(result);

  // menentukan kategori
  let category = " "
  if (result < 18.5){
    category = "Underweight";
  } else if (result >= 18.5 && result <= 24.9){
    category = "Normal Weight";
  } else if (result >= 25 && result <= 29.9){
    category = "Overweight";
  } else if (result >= 30){
    category = "Obesity";
  } else {
    category = "Unknown";
  }

});

