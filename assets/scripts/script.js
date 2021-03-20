//Challenge 1 multiplication table function
//receive a number passed as parameter and return the multiplication table in one column

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('calc');
    let mult = document.getElementById('multiplicand');
    let numInput = Number(mult.value);

    button.addEventListener('click', function () {
        multiplication_table(numInput);
    })

    mult.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            multiplication_table(numInput);
        }
    })

})

function multiplication_table(multiplier) {
    let printedResult = document.getElementById('challengeOneResult');
    printedResult.innerHTML = "";

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplicand * multiplier;

        console.log(`${multiplier} x ${multiplicand} = ${result}<br>`);

        printedResult.innerHTML += `${multiplier} x ${multiplicand} = ${result}<br>`;
    }
}

//Challenge 2 max function
//receive two numbers passed as parameter and return the the largest number

let firstInput = document.getElementById('num1');
let secondInput = document.getElementById('num2');
let buttonTwo = document.getElementById('maxMin');

buttonTwo.addEventListener('click', function () {
    let firstValue = Number(firstInput.value);
    let secondValue = Number(secondInput.value);

    max(firstValue, secondValue);
})


function max(num1, num2) {
    let printedResultTwo = document.getElementById('challengeTwoResult');

    if (num1 > num2) {
        console.log(`the largest number is ${num1}`);
        printedResultTwo.innerHTML = ` the largest number is ${num1}`;
    } else if (num2 > num1) {
        console.log(`the largest number is ${num2}`);
        printedResultTwo.innerHTML = `the largest number is ${num2}`;
    } else if (num1 === num2) {
        console.log(`These numbers are equal`);
        printedResultTwo.innerHTML = `These numbers are equal`;
    }
}