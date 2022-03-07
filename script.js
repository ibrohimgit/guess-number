const again = document.querySelector('.again');
const hiddenNum = document.querySelector('.number');
const guessInp = document.querySelector('.guess');
const check = document.querySelector('.check');
let message = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

let randomNum = Math.floor(Math.random() * 21);

let score = 20;

let highscore = 0;

// Play
check.addEventListener('click', () => {
  if (guessInp.value == randomNum) {
    console.log('You win');
    hiddenNum.textContent = randomNum;
    document.body.style.background = '#025fc2';
    message.textContent = 'You win!!!';
    if (score > highscore) {
      highscore = score
      highscoreEl.textContent = highscore
    }
  } else if (guessInp.value < randomNum) {
    message.textContent = 'Num is Low ⬇️';
    score--;
    scoreEl.textContent = score
  } else if (guessInp.value > randomNum) {
    message.textContent = 'Num is Higher ⬆️';
    score--;
    scoreEl.textContent = score
  }
});

again.addEventListener('click', gameAgain)

// Again
function gameAgain() {
  randomNum = Math.floor(Math.random() * 21);
  console.log(randomNum);
  message.textContent = 'Start guessing...';
  hiddenNum.textContent = '?';
  score = 20;
  guessInp.value = ''
  scoreEl.textContent = 20
  document.body.style.background = '#222';
}

console.log(randomNum);