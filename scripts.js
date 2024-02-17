
const input = document.querySelector('input');
const btnc = document.querySelector('.but-c');
// const numberInput = document.getElementById('numberInput');
const result = document.querySelector('.result');
const equal = document.querySelector('.equal')

function buttonValues(value) {
    input.value += value;
}

btnc.addEventListener(('click'), () => { input.value = '' });


equal.addEventListener(('click'), function () {
    let numbers = input.value.split(',').map(Number).filter(num=>!isNaN(num) && num !=="");//split
    let sum = numbers.reduce((total, num) => total + num, 0);//calculate sum
    result.textContent = sum;
});