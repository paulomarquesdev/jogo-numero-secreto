const minValue = 1;
const maxValue = 1000;

document.querySelector("#menor-valor").textContent = minValue;
document.querySelector('#maior-valor').textContent = maxValue;

const secretNumber = generateRandomNumber();

function generateRandomNumber(){
    return parseInt(Math.random() * maxValue+1)
}