//   (F - 32) * 5/9     ////fahrenheit to celsius
//   (F-32) * 5/9 + 273 ////fahrenheit to kelvin
//   C + 273            ////celsius to kelvin
//   C * 9/5 + 32       ////celsius to fahrenheit
//   k - 273            ////kelvin to celsius
//   (k-273) * 1,8 + 32 ////kelvin to fahrenheit

const btn = document.querySelector('#calculate');

const results = document.querySelector(".results")


btn.addEventListener('click', function (e) {
  e.preventDefault();
  
  const temperatures = document.querySelector("#temperatures");

  const temperatureScale = temperatures.value;
  const number = document.querySelector("#number");
  const numberValue = number.value;

  const kelvin = document.querySelector("#kelvin");
  const celsius = document.querySelector("#celsius");
  const fahrenheit = document.querySelector("#fahrenheit");
  
  

  if (temperatureScale == "Kelvin") {

    const celsiusValue = numberValue - 273;
    const fahrenheitValue = (numberValue -273) * 1.8 + 32;
    fahrenheit.style.color = "#009FFD";
    celsius.style.color = "#009FFD";
    celsius.innerHTML = "<span>celsius</span>" +  celsiusValue.toFixed(2);
    fahrenheit.innerHTML = "<span>fahrenheit</span>" +  fahrenheitValue.toFixed(2);
    fahrenheit.classList.toggle("hidden");
    celsius.classList.toggle("hidden");
    kelvin.classList.add("hidden")

    if (celsius.classList == "" && fahrenheit.classList == "hidden") {
      fahrenheit.classList.remove("hidden")
    } else if (fahrenheit.classList == "" && celsius.classList == "hidden") {
      celsius.classList.remove("hidden")
    }
  } else if (temperatureScale == "Fahrenheit") {
    const celsiusValue = (numberValue - 32) * 5/9 ;
    const kelvinValue =  (numberValue-32) * 5/9 + 273;
    kelvin.style.color = "#009FFD";
    celsius.style.color = "#009FFD";
    kelvin.innerHTML = "<span>kelvin</span>" +  kelvinValue.toFixed(2);
    celsius.innerHTML = "<span>celsius</span>" +  celsiusValue.toFixed(2);
    celsius.classList.toggle("hidden");
    kelvin.classList.toggle("hidden");
    fahrenheit.classList.add("hidden")

   if (celsius.classList == "hidden" && kelvin.classList == "") {
      celsius.classList.remove("hidden")
    } else if (celsius.classList == "" && kelvin.classList == "hidden") {
      kelvin.classList.remove("hidden")
    }
  } else if (temperatureScale == "Grau Celsius") {
    const fahrenheitValue =  numberValue * 9/5 + 32 ;
    const kelvinValue = Number(numberValue) + 273;
    fahrenheit.style.color = "#009FFD";
    kelvin.style.color = "#009FFD";
    fahrenheit.innerHTML =  "<span>fahrenheit</span>" +  fahrenheitValue.toFixed(2);
    kelvin.innerHTML = "<span>kelvin</span>" +  kelvinValue.toFixed(2);
    fahrenheit.classList.toggle("hidden")
    kelvin.classList.toggle("hidden")
    celsius.classList.add("hidden")

    if (fahrenheit.classList == "" && kelvin.classList == "hidden") {
      kelvin.classList.remove("hidden")
    } else if (kelvin.classList == "" && fahrenheit.classList == "hidden") {
      fahrenheit.classList.remove("hidden")
    }
  }
})
