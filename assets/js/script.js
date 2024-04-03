let result = document.querySelector('.result-number');
let numbers = [];
let operator;
let resultEqual = 0;
let operatorsAndZero = ['0', '/', 'X', '-', '+'];
let operators = ['/', 'X', '-', '+'];
let operatorsName = ['division', 'x', 'subtraction', 'add'];

document.addEventListener('click', function(event) {
    let buttonText = event.target.innerText;
    let button = event.target;
    console.log(buttonText);
    console.log(numbers);

    function clearResult () {
       for (let i = 0; i < operatorsAndZero.length; i++) {
            if(result.innerText === operatorsAndZero[i]) {
                result.innerText = '';
            }
        }

        if(button.classList.contains('ac')) {
            result.innerText = '0';
            number = [];
            operator = 0;
        }
    }

    function addNumberResult() {
        for(let i = 0; i <= 9; i++) {
            if (button.classList.contains(`${i}`)) result.innerText += buttonText;
        }
    }

    function getNumber() {
        for (let i = 0; i < operators.length; i++) {
            if(button.classList.contains(operatorsName[i])) {
                numbers.push(result.innerText);
                result.innerText = `${operators[i]}`;
                operator = `${operators[i]}`;
            } 
        }
    }

    function calc() {
        if (button.classList.contains('equal')) {
            numbers.push(result.innerText);
            if (operator === '/') resultEqual = Number(numbers[0]) / Number(numbers[1]);
            if (operator === 'X') resultEqual = Number(numbers[0]) * Number(numbers[1]);
            if (operator === '-') resultEqual = Number(numbers[0]) - Number(numbers[1]);
            if (operator === '+') resultEqual = Number(numbers[0]) + Number(numbers[1]);
            showResult();
        }  
    }

    function showResult () {
        result.innerHTML = resultEqual;
        numbers = [];
    }

    clearResult();
    addNumberResult();
    getNumber()
    calc(); 
})