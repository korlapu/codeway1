let display = document.getElementById('display');
let input = '';

function appendInput(value) {
    input += value;
    updateDisplay();
}

function clearDisplay() {
    input = '';
    updateDisplay();
}

function calculateResult() {
    try {
        input = eval(input).toString();
    } catch (error) {
        input = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = input;
}