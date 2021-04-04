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

///Challenge 8 numArray array
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
let numArray = [1, 7, 8, 3, 12, 2];

largestNumberAnswerButton.addEventListener("click", function () {
    let challengeEightResult = document.getElementById("challengeEightResult");
    let largestNum = 0;

    for (let i of numArray) {
        if (i > largestNum) {
            largestNum = i;
        }
    }

    console.log(largestNum);
    challengeEightResult.innerHTML = largestNum;
});

///Challenge 9 sumArray function
//Write a JavaScript function called sumArray that returns the sum of numbers in an array.

let sumArrayAnswerButton = document.getElementById("sumArrayAnswer");
let valuesArray = [1, 3, 5, 7];

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

///Challenge 10 pushZeroes function
//The aim is to return a string with the zeroes pushed to the end, so calling pushZeroes("30041203") will return "34123000".

let numString = "30041203";
let pushZeroesAnswerButton = document.getElementById("pushZeroesAnswer");

pushZeroesAnswerButton.addEventListener("click", function () {
    pushZeroes(numString);
});

function pushZeroes(input) {
    let challengeTenResult = document.getElementById("challengeTenResult");
    let zeroes = "";
    let nonZeroes = "";

    for (let i of numString) {
        i === "0" ? zeroes += i : nonZeroes += i;
    };

    let lastZeroesResult = nonZeroes.concat(zeroes);

    console.log(lastZeroesResult);
    challengeTenResult.innerHTML = lastZeroesResult;
}

///Challenge 11 makeBricks function
//Return true if it is possible to make the goal by choosing from the given bricks, and false if it is not possible.

let goal_brick = document.getElementById("goal_brick");
let small_bricks = document.getElementById("small_bricks");
let big_bricks = document.getElementById("big_bricks");
let makeBricksAnswerButton = document.getElementById("makeBricksAnswer");

makeBricksAnswerButton.addEventListener("click", function () {
    let goalValue = Number(goal_brick.value);
    let smallValue = Number(small_bricks.value);
    let bigValue = Number(big_bricks.value);

    makeBricks(smallValue, bigValue, goalValue);
});


function makeBricks(small, big, goal) {
    let challengeElevenResultDiv = document.getElementById("challengeElevenResult");

    let smallBricks = small * 1;
    let bigBricks = big * 5;
    let goalBricks = smallBricks + bigBricks;

    if (goalBricks === goal) {
        console.log(true);
        challengeElevenResultDiv.innerHTML = true;
    } else {
        console.log(false);
        challengeElevenResultDiv.innerHTML = false;
    }
};

///Challenge 12 convertTemp function
//Convert Celsius in Fahrenheit and vice-versa.

let convertTempAnswerButton = document.getElementById("convertTempAnswer");
let tempValue = document.getElementById("tempValue");
let tempUnit = document.getElementById("tempUnit");

convertTempAnswerButton.addEventListener("click", function () {
    let tempValueNum = Number(tempValue.value);
    let tempUnitOp = tempUnit.value;

    convertTemp(tempValueNum, tempUnitOp);
})

function convertTemp(num, unit) {
    let challengeTwelveResult = document.getElementById("challengeTwelveResult");

    if (unit === "c") {
        let resultCToF = (num * 1.8) + 32;

        console.log(`${num} Celsius in Fahrenheit is ${resultCToF}`);
        challengeTwelveResult.innerHTML = `${num} Celsius in Fahrenheit is ${resultCToF}`
    } else if (unit === "f") {
        let resultFToC = (num - 32) / 1.8;

        console.log(`${num} Fahrenheit in Celsius is ${resultFToC}`);
        challengeTwelveResult.innerHTML = `${num} Fahrenheit in Celsius is ${resultFToC}`
    }
}

///Challenge 13 convertTemp function
//Write some code that prompts the user for a number. And prints out a multiplication table for that number.
let multiTabAnswerButton = document.getElementById("multiTabAnswer");

multiTabAnswerButton.addEventListener("click", function() {
    let multValuePrompt = Number(prompt("enter a number"));

    mul_table(multValuePrompt);
})

function mul_table(n) {
    let challengeThirteenResult = document.getElementById("challengeThirteenResult");

    for (let i = 0; i <= 10; i++) {
        let table = n * i;

        console.log(`${n} x ${i} = ${table}`);
        challengeThirteenResult.innerHTML += `${n} x ${i} = ${table}<br>`;
    }
}

















