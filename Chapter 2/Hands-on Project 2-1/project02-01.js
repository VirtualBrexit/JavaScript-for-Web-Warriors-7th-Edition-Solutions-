/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */

//Declaring variables and setting values to each element ID.
let cValue = document.getElementById("cValue");
let fValue = document.getElementById("fValue");

//Onchange handler that calls an anonymous function to calculate and set the value of fValue.
cValue.onchange = function() {
    let cDegree = cValue.value;
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
};

//Onchange handler that calls an anonymous function to calculate and set the value for cValue.
fValue.onchange = function() {
    let fDegree = fValue.value;
    document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
};

//Converts Farenheit to Celsius when called.
function FarenheitToCelsius(degree) {
return (degree - 32) / 1.8; //Conversion equation for Celsius.
};

//Converts Celsius to Farenheit when called.
function CelsiusToFahrenheit(degree) {
return degree * 1.8 + 32; //Conversion equation for Farenheit.
};
