let elementButton = document.getElementById("submit");

let converterValue = function (event, value) {
  let elementNumber = document.getElementById("metros").value;
  let resultConversion = document.getElementById("resultado");
  let element = document.getElementById("medidas");
  let optionSelected = element.options[element.selectedIndex];
  let result = "";
  if (value == 1) {
    result = elementNumber * event;
  } else if (value == 2) {
    result = elementNumber / event;
  }

  resultConversion.style = "display: block;";
  resultConversion.textContent = `O valor de ${elementNumber} convertido em ${optionSelected.value} é igual a ${result} ${optionSelected.text}.`;
};

elementButton.addEventListener("click", function () {
  let element = document.getElementById("medidas");
  let optionSelected = element.options[element.selectedIndex].value;
  switch (optionSelected) {
    case "mm":
      elementButton.addEventListener("click", converterValue(1000, 1));
      break;
    case "cm":
      elementButton.addEventListener("click", converterValue(100, 1));
      break;
    case "dm":
      elementButton.addEventListener("click", converterValue(10, 1));
      break;
    case "km":
      elementButton.addEventListener("click", converterValue(1000, 2));
      break;
  }
});
