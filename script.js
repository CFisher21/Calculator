// Grabbing values from the document
const buttons = document.getElementsByClassName("button");
const display = document.getElementById("display");
const clear = document.getElementById("clear");

// Create an array from the HTML Collection
const buttonsArray = Array.from(buttons);

//Clear the display 
clear.addEventListener("click", function() {
    display.textContent = 0;
})

// Add an event listener to each individual button
buttonsArray.forEach(function(button) {
    button.addEventListener("click", function(event) {

        if(display.textContent == 0) {
            display.textContent = "";
            display.textContent += event.target.textContent;
        } else {
            display.textContent += event.target.textContent;
           
        }
        
    })
})

function evaluate() {
    var mathString = display.textContent;
    const numbers = mathString.split(/\D+/).filter(Boolean).map(Number);
    const mathSymbols = mathString.match(/[+\-÷x]/g);
    
    for(let i = 0; i < mathSymbols.length; i++) {
        newString = numbers[i] + mathSymbols[i] + numbers[i+1] 
        console.log(typeof(numbers[i]));
        console.log(numbers[i])
        console.log(typeof(mathSymbols[i]))
        console.log(mathSymbols[i])
        console.log(typeof(newString));
        console.log(newString);
    }

    console.log(numbers, mathSymbols)
}


