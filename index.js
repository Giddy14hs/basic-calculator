const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (!isNaN(value)) {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.textContent = '0';
        } else if (value === '=') {
            if (operator && previousInput !== '') {
                currentInput = operate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = null;
            }
        } else {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                }
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        }
    });
});

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        default:
            return '0';
    }
}
