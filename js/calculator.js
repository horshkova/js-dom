document.querySelectorAll('.number')
    .forEach( el => el.addEventListener('click', clickNumber) );
document.querySelector('.operation').addEventListener('click', operation);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}

function operation() {
    display.value += '+';
}

function calc() {
    display.value = eval(display.value);
}
