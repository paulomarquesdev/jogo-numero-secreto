function validatorChosen(chosenNumber){
    const number = +chosenNumber;

    if(numberIsValid(number)){
        elementChute.innerHTML += `
            <div>Número inválido</div>
        `;
        return
    } ;
    
    if (isInInterval(number)){
        elementChute.innerHTML += `
            <div>Número inválido: Fale um número entre ${minValue} e ${maxValue}.</div>
        `;
        return
    };

    game(chosenNumber);
    
};

function numberIsValid(number){
    return Number.isNaN(number);
};

function isInInterval(number){
    return !(number >= minValue && number <= maxValue);
};

function game (choiseNumber){
    const number = Number(choiseNumber);
    if (number === secretNumber){
        return document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número era ${secretNumber}</h3>
            <button id="btn__play_again" class="btn__play_again">Jogar novamente</button>
        `;
    } else if (number < secretNumber) {
        return elementChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    } else if (number > secretNumber) {
        return elementChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    };
};

document.body.addEventListener('click', event => {
    if (event.target.id == 'btn__play_again') {
        window.location.reload();
    };
});