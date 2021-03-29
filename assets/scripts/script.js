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
//receive three numbers passed as parameter and return the largest number

let firstNum = document.getElementById("numOne");
let secondNum = document.getElementById("numTwo");
let thirdNum = document.getElementById("numThree");
let buttonThree = document.getElementById("maxAnswer");

buttonThree.addEventListener('click', function () {
    let valueOne = Number(firstNum.value);
    let valueTwo = Number(secondNum.value);
    let valueThree = Number(thirdNum.value);

    new_max(valueOne, valueTwo, valueThree);
});

function new_max(valueOne, valueTwo, valueThree) {
    let cThreeAnswer = document.getElementById("challengeThreeResult");

    if ((valueOne > valueTwo) && (valueOne > valueThree)) {
        console.log(`The largest number is ${valueOne}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueOne}`;
    } else if ((valueTwo > valueOne) && (valueTwo > valueThree)) {
        console.log(`The largest number is ${valueTwo}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueTwo}`;
    } else if ((valueThree > valueOne) && (valueThree > valueTwo)) {
        console.log(`The largest number is ${valueThree}`);
        cThreeAnswer.innerHTML = `The largest number is ${valueThree}`;
    } else if ((valueOne === valueTwo) && (valueTwo === valueThree)) {
        console.log("These numbers are equal");
        cThreeAnswer.innerHTML = "These numbers are equal";
    }
}

///Challenge 4 is_vowel(letter) function
//receive a letter passed as parameter and return the if is a vowel or not.

let vowelInput = document.getElementById('vowelInput');
let vowelAnswer = document.getElementById('vowelAnswer');

vowelAnswer.addEventListener('click', function () {
    let vInputValue = vowelInput.value;

    is_vowel(vInputValue);
})

function is_vowel(letter) {
    let vowelPrint = document.getElementById('challengeFourResult');
    let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

    if (vowels.includes(letter)) {
        console.log(`${letter} is a vowel.`);
        vowelPrint.innerHTML = `${letter} is a vowel.`;
    } else {
        console.log(`${letter} is not a vowel.`);
        vowelPrint.innerHTML = `${letter} is not a vowel.`;
    }
}

///Challenge 5 checkArray array
//Split an array of strings 
//verify if the words in a specific index is inside another array, 
//if not than push the word to the end.

let checkArrayAnswerButton = document.getElementById("checkArrayAnswer");

checkArrayAnswerButton.addEventListener("click", function () {
    let challengeFiveResult = document.getElementById("challengeFiveResult");

    let myString = "Oh what a beautiful morning";
    let myArray = myString.split(" ");
    let checkArray = [];

    for (let i = 0; i <= checkArray.length; i++) {
        let item = checkArray.indexOf(myArray[i]);

        if (item === -1) {
            checkArray.push(myArray[i]);
        }
    }
    checkArray.splice(5, 1);

    console.log(checkArray);
    challengeFiveResult.innerHTML = `myString = "Oh what a beautiful morning";<br><br>
                                     checkArray = [${checkArray}];`;
})

///Challenge 6 studentsBackwards array
//Iterate over the students array backwards,  
//and push each name onto the studentsBackwards array.

let studentsAnswer = document.getElementById("studentsAnswer");

studentsAnswer.addEventListener("click", function () {
    let challengeSixResult = document.getElementById("challengeSixResult");

    let students = ["Alex", "Babu", "Brian", "Cormac", "Caoimhe", "Donal", "Femy", "Jean", "Katie", "Kira", "Neal", "Zanbo", "Zoran"];

    let studentsBackwards = [];

    for (let x = students.length - 1; x >= 0; x--) {
        studentsBackwards.push(students[x]);
    }

    for (let i of studentsBackwards) {
        let studentsNames = console.log(i);

        challengeSixResult.innerHTML += `${i}<br>`;
    }
    console.log(studentsBackwards);
})

///Challenge 7 wordsArray array
//Iterate over the wordsArray,  
//and use .indexOf to find a word in your array, and print that word to screen.

let arrayWordAnswerButton = document.getElementById("arrayWordAnswer");

arrayWordAnswerButton.addEventListener("click", function () {
    let challengeSevenResult = document.getElementById("challengeSevenResult");
    let secondChallengeSevenResult = document.getElementById("secondChallengeSevenResult");

    let wordsArray = ["Eriador", "Mordor", "Gondor", "Rohan", "Rhovanion"];

    for (let i in wordsArray) {
        let middleEarthPlaces = wordsArray[i];

        console.log(`index ${i} is ${middleEarthPlaces}`);
        challengeSevenResult.innerHTML += `Index ${i} is ${middleEarthPlaces}<br>`
    }

    secondChallengeSevenResult.innerHTML = `<br>The chosen place is ${wordsArray[wordsArray.indexOf("Gondor")]}`;
})

///Challenge 8 wordsArray array
//Create a function called largestNumber that takes one argument called numberArray.
//When an array is passed in, the function should return the largest number in the array.  

//Challenge 8 first solution:

// let numArray = [1,7,8,3,12,2];

// function largestNumber(numberArray) {
//     let largestNum = Math.max(...numberArray)
//     console.log(largestNum);
// }

// largestNumber(numArray);

//Challenge 8 second solution:

let largestNumberAnswerButton = document.getElementById("largestNumberAnswer");
let numArray = [1,7,8,3,12,2];

largestNumberAnswerButton.addEventListener("click", function() {
    let challengeEightResult = document.getElementById("challengeEightResult");
    let largestNum = 0;
    
    for(let i of numArray) {
        if(i > largestNum) {
            largestNum = i;
        }
    }

    console.log(largestNum);
    challengeEightResult.innerHTML = largestNum;
});

///Challenge 9 wordsArray array
//Write a JavaScript function called sumArray that returns the sum of numbers in an array.

let sumArrayAnswerButton = document.getElementById("sumArrayAnswer");
let valuesArray = [1,3,5,7];

sumArrayAnswerButton.addEventListener("click", sumArrayResult)

function sumArray(total, num) {
    return total + num;
}

function sumArrayResult() {
    let challengeNineResult = document.getElementById("challengeNineResult");
    let sumResult = valuesArray.reduce(sumArray);
    
    console.log(sumResult);
    challengeNineResult.innerHTML = `The result is ${sumResult}`;
}













