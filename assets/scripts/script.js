//Challenge 1 multiplication table function
//receive a number passed as parameter and return the multiplication table in one column

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('calc');
    let mult = document.getElementById('multiplicand');
    let numInput = mult.value;

    button.addEventListener('click', function () {
        multiplication_table(numInput);
    });

    mult.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            multiplication_table(numInput);
        }
    });

})

function multiplication_table(multiplier) {
    let printedResult = document.getElementById('challengeOneResult');
    printedResult.innerHTML = "";

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplicand * multiplier;

        console.log(`${multiplier} 'x' ${multiplicand} '=' ${result}<br>`);

        printedResult.innerHTML += `${multiplier} 'x' ${multiplicand} '=' ${result}<br>`;
    }
}
