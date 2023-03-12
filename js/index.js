const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max)
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Nº de tentativas: ' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('Digite um valor !')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if (numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns!! Você acertou :)';
        attempt.style.position = 'absolute';
        result.style.transition = '0.4s';
        result.style.border = '#0c0c0b';
        attempt.style.color = '#FF0013';
        result.style.color = '#FF0013';
        status.style.color = '#09C978';
        clear();
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior';
        status.style.color = '#347E66'
        clear();

    } else if (numberDrawn < kick) {
        status.innerHTML = 'O número é menor';
        status.style.color = '#53B48B'
        clear()
    }
};

function playAgain() {
    document.getElementById('btnRestar').style.display = 'flex';
    document.getElementById('div-result').style.display = 'block';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};