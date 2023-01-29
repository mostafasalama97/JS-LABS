const board = document.getElementById("chess-board");
const startButton = document.getElementById("start-button");
const score = document.getElementById("score");
const time = document.getElementById("time");
let intervalId;
let timeLeft = 30;
let currentScore = 0;

const result= document.getElementById('result');
const result2= document.getElementById('result2');


const chessBoard = document.getElementById("chess-board");
const squares = chessBoard.querySelectorAll(".square");
let score1 = 0;
let correctSquare = null;

var iDiv = document.createElement('div');

iDiv.className = 'block';
result2.appendChild(iDiv);

function updateScore(isCorrect) {
  if (isCorrect) {
    score1 += 1;
    currentScore++;
    score.innerHTML = "Score: " + currentScore;
    iDiv.className = 'greenDiv';
    result2.appendChild(iDiv);
    result2.innerHTML += '';
  } else {
    iDiv.className = 'redDiv';
    result2.appendChild(iDiv);
    result2.innerHTML += '';


  }
  console.log(`Score: ${score1}`);
}

let startgame=document.getElementById('startgame')

function pickRandomSquare() {
  const randomIndex = Math.floor(Math.random() * squares.length);
  correctSquare = squares[randomIndex];
  startgame.innerHTML =`square: ${correctSquare.id}`
  console.log(`Correct square: ${correctSquare.id}`);
}

squares.forEach(square => {

  square.addEventListener("click", event => {

    if (event.target === correctSquare) {
      updateScore(true);
    } else {
      updateScore(false);
    }
    pickRandomSquare();

  });

});





startButton.addEventListener("click", startGame);




function startGame() {
  intervalId = setInterval(updateTimer, 1000);
  pickRandomSquare();

  startButton.disabled = true;
}

function updateTimer() {
  timeLeft--;
  time.innerHTML = "Time: " + timeLeft;
  
  if (timeLeft === 0) {
    endGame();
  }
}





function endGame() {
  // Stop the timer
  localStorage.setItem('score',currentScore);
  clearInterval(intervalId);
  return window.location.assign("./finle.html");
  //board.removeEventListener("click", checkAnswer);
  
 
}