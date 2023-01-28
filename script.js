const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const game_message = document.querySelector('#game_message');
const record = document.querySelector('#record');
let record_num = 0;
let isAlive = false;

function jump() {
    if (dino.classList !== 'jump') {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300);
}

function newGame() {
    isAlive = true;
    cactus.classList.add('active');
    game_message.classList.remove('active');
}




document.addEventListener('click', function (event) {
    if (event.target.id === 'new_game_but') {
        newGame()
    }

    if (event.target.id !== 'new_game_but') {
        jump()
    }

})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        newGame()
        return
    }
    jump();
})

let game = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 40 && cactusLeft > 0 & dinoTop >= 120) {
        cactus.classList.remove('active');
        game_message.classList.add('active');
        isAlive = false;
        record_num = 0;
    }
}, 10);

setInterval(() => {
    if (isAlive) {
        record_num++;
        record.textContent = record_num;
    }
}, 500);

