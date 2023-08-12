const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let result;

function evaluateExpression(expression) {
  // Replace "pi" with the actual value of pi before evaluation
  expression = expression.replace("&pi;", Math.PI);

  return Function('return ' + expression)();
}

function calculate(button) {
  const value = button.textContent;

  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.textContent = '.';
  } else if (value === '=') {
    screenDisplay.textContent = evaluateExpression(result);
  }else if (value === '\u03C0') {
    calculation.push(Math.PI);
    result = calculation.join('');
    screenDisplay.textContent = result;
  } else {
    calculation.push(value);
    result = calculation.join('');
    screenDisplay.textContent = result;
  }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
