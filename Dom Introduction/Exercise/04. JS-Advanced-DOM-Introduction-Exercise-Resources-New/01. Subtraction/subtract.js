function subtract() {

    let numOne = Number(document.getElementById('firstNumber').value);
    let numTwo = Number(document.getElementById('secondNumber').value);

    let sum = numOne - numTwo;

    document.getElementById('result').innerText = sum;

}
subtract();