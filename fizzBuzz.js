let border = document.getElementById("borderLine");
border.style.borderBottom = "3px solid black";
border.style.paddingBottom = "15px";

const check = () => {
    const fizzBuzz = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");
    let output = 0

    if (isNaN(fizzBuzz)) {
        output = "Not a Number";
        alert("Input is not a number");
    } else if (fizzBuzz % 15 === 0) {
        output  = "FizzBuzz!";
    } else if (fizzBuzz % 3 === 0) {
        output  = "Fizz!";
    } else if (fizzBuzz % 5 === 0) {
        output  = "Buzz!";
    } else {
        output  = fizzBuzz;
    }
    const prevResult = document.createElement("p");
    const prevResultText = document.createTextNode(output);
    prevResult.appendChild(prevResultText);
    result.appendChild(prevResult)
}

