const playTo = document.querySelector('#playto');
const reset = document.querySelector('#reset');

const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#p1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#p2')
}

let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.display.innerHTML = player.score
        if (player.score == playTo.value) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
    }
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
})

reset.addEventListener('click', resetBoard)

for (let i = 3; i < 12; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = i;
    playTo.append(option);
}

playTo.addEventListener('change', resetBoard)

function resetBoard() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
