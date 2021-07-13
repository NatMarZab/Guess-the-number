function getRandomNumber(max) {
    
    return Math.ceil(Math.random() * max);
   }
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function resultMessage() {
    const input = document.querySelector('#tryNumber');
    const message = document.querySelector(".message");
    const inputValue = parseInt(input.value);
    console.log(inputValue, randomNumber);
    if(inputValue < randomNumber) {
        message.innerHTML = "Demasiado bajo";
    }
    else if(inputValue > randomNumber) {
        message.innerHTML = "Demasiado alto";
    }
    else if(inputValue = randomNumber) {
        message.innerHTML = "Has ganado campeona!!"
    }
    else if(inputValue === NaN || inputValue > 100 || inputValue < 1) {
        message.innerHTML = "El número debe estar entre 1 y 100"
    }
}

let attemptsNumberOp = 0;
function attemptsCount() {
    attemptsNumberOp += 1;
    const attemptsNumber = document.querySelector(".attempts_number");
    attemptsNumber.innerHTML = attemptsNumberOp; //aquí estaba fallando que tenía puesto +=
}

function handleResult (){
   
    resultMessage();
    attemptsCount();
}

const clickbutton = document.querySelector(".button");
clickbutton.addEventListener("click", handleResult);
