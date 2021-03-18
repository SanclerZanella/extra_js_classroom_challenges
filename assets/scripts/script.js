//Challenge 1 multiplication table function
//receive a number passed as parameter and return the multiplication table in one column

function multiplication_table(num) {
    let multiplier = num;
    let printedResult = document.getElementById('challengeOneResult');

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplicand * multiplier;

        console.log(result);

        printedResult.innerHTML += `${result}<br>`;
    }
}

multiplication_table(2);
