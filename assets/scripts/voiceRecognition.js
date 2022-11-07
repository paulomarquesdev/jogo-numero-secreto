const elementChute = document.querySelector('#chute')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(result){
    const chosenNumber = result.results[0][0].transcript;
    displayNumber(chosenNumber);
    validatorChosen(chosenNumber);
};

function displayNumber(number){
    elementChute.innerHTML= `
    <div>Você disse:</div>
    <span class="box">${number}</span>
    `;
};

recognition.addEventListener('end', ()=>{ recognition.start() });