//Challenge 1 multiplication table function
//receive a number passed as parameter and return the multiplication table in one column

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('calc');
    let mult = document.getElementById('multiplicand');

    button.addEventListener('click', function () {
        let numInput = Number(mult.value);
        multiplication_table(numInput);
    });

    mult.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let numInput = Number(mult.value);
            multiplication_table(numInput);
        }
    });

})

function multiplication_table(multiplier) {
    let printedResult = document.getElementById('challengeOneResult');
    printedResult.innerHTML = "";

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplicand * multiplier;

        console.log(`${multiplier} x ${multiplicand} = ${result}`);

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

///Challenge 3 new_max function
//receive three numbers passed as parameter and return the the largest number

let firstNum = document.getElementById("numOne");
let secondNum = document.getElementById("numTwo");
let thirdNum = document.getElementById("numThree");
let buttonThree = document.getElementById("maxAnswer");

buttonThree.addEventListener('click', function() {
    let valueOne = Number(firstNum.value);
    let valueTwo = Number(secondNum.value);
    let valueThree = Number(thirdNum.value);

    new_max(valueOne, valueTwo, valueThree);
});

function new_max(valueOne, valueTwo, valueThree) {
    let cThreeAnswer = document.getElementById("challengeThreeResult");

    if((valueOne > valueTwo) && (valueOne > valueThree)) {
        console.log(`The largest number is ${valueOne}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueOne}`;
    } else if((valueTwo > valueOne) && (valueTwo > valueThree)) {
        console.log(`The largest number is ${valueTwo}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueTwo}`;
    } else if((valueThree > valueOne) && (valueThree > valueTwo)) {
        console.log(`The largest number is ${valueThree}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueThree}`;
    } else if((valueOne === valueTwo) && (valueTwo === valueThree)) {
        console.log("These numbers are equal");
        cThreeAnswer.innerHTML = "These numbers are equal";
    }
}
