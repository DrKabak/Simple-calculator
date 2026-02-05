let currentOperation = null;
let currentValue = '';

function appendNumber(number) {
  currentValue += number;
  document.getElementById('display').value = currentValue;
}

function setOperation(operation) {
  if (currentValue === '') return;
  currentOperation = operation;
  currentValue += ' ' + operation + ' ';
  document.getElementById('display').value = currentValue;
}

function calculate() {
  if (currentValue === '') return;
  try {
    currentValue = eval(currentValue);
    document.getElementById('display').value = currentValue;
  } catch (e) {
    document.getElementById('display').value = 'Hata';
    currentValue = '';
  }
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('display').value = '';
}