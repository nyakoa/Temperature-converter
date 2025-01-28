function calculate() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  if (isNaN(temperature)) {
    result.textContent = "Please enter a valid temperature!";
  }
  let convertedTemp;
  if (from === "celsius" && to === "Farenheit") {
    convertedTemp = (temperature * 9) / 5 + 32;
  } else if (from === "celsius" && to === "Kelvin") {
    convertedTemp = temperature + 273.15;
  } else if (from == "Farenheit" && to === "celsius") {
    convertedTemp = 5 / 9(temperature - 32);
  } else if (from == "Farenheit" && to === "Kelvin") {
    convertedTemp = ((temperature - 32) * 5) / 9 + 273.15;
  } else if (from == "Kelvin" && to === "celsius") {
    convertedTemp = temperature - 273.15;
  } else if (from == "Kelvin" && to === "Farenheit") {
    convertedTemp = ((temperature - 273.15) * 9) / 5 + 32;
  } else {
    convertedTemp = temperature;
  }
  result.textContent = `Converted Temperature: ${convertedTemp}`;
}
calculate();
