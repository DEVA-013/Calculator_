const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Error' || display.value === 'Infinity' || display.value === 'NaN') {
        clearDisplay();
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(display.value);
        document.getElementById('display').value
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}