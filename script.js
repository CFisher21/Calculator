// Grabbing values from the document
const buttons = document.getElementsByClassName("button");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
var sum = false;

// Create an array from the HTML Collection
const buttonsArray = Array.from(buttons);

//Clear the display
clear.addEventListener("click", function () {
  display.textContent = "";
});

// Add an event listener to each individual button
buttonsArray.forEach(function (button) {
  button.addEventListener("click", function (event) {
      display.textContent += event.target.textContent;
  });
});

const equals = document.getElementById("equals");

equals.addEventListener("click", function () {
  result = evaluate();
  display.textContent = result;
  console.log(typeof(display.textContent))
  console.log(display.textContent)
});

function evaluate() {
  var mathString = display.textContent;
  mathString = mathString.replace(/x/g, "*").replace(/÷/g, "/");
  tokens = mathString.match(/\d+(\.\d+)?|\+|\-|\*|\//g);

    let result = parseFloat(tokens[0]); // Initialize result with the first number
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseFloat(tokens[i + 1]);

      switch (operator) {
        case "+":
          result += nextNumber;
          break;
        case "-":
          result -= nextNumber;
          break;
        case "*":
          result *= nextNumber;
          break;
        case "/":
          if (nextNumber !== 0) {
            result /= nextNumber;
          } else {
            return "Cannot divide by zero";
          }
          break;
        default:
          return "Invalid operator 1";
      }
      return result;
    }
  };
