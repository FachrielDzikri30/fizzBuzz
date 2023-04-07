let border = document.getElementById("borderLine");
border.style.borderBottom = "3px solid black";
border.style.paddingBottom = "15px";

const check = () => {
    const fizzBuzz = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (isNaN(fizzBuzz)) {
        result.innerHTML = "Not a Number";
        alert("Input is not a number");
    } else if (fizzBuzz % 15 === 0) {
        result.innerHTML = "FizzBuzz!";
    } else if (fizzBuzz % 3 === 0) {
        result.innerHTML = "Fizz!";
    } else if (fizzBuzz % 5 === 0) {
        result.innerHTML = "Buzz!";
    } else {
        result.innerHTML = fizzBuzz;
    }
    return fizzBuzz;
}
