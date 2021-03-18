//Challenge 1 multiplication table function
//receive a number passed as parameter and return the multiplication table in one column

let button = document.getElementById('calc');
button.addEventListener('click', function () {
    let numInput = document.getElementById('multiplicand').value;
    multiplication_table(numInput);
});

function multiplication_table(multiplier) {
    let printedResult = document.getElementById('challengeOneResult');
    printedResult.innerHTML = "";

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplicand * multiplier;

        console.log(result);

        printedResult.innerHTML += `${result}<br>`;
    }
}
