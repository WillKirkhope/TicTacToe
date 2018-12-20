var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];


function createGame() {
  var game = document.getElementById('gameboard')
  for (var i = 0; i < 9; i++) {
    var div = document.createElement('div')
    div.setAttribute('id', i)
    div.classList.add('square')
    if (i < 6) {
      div.classList.add('b-border')
    }
    if (i === 0 || 1 || 3 || 4 || 6 || 7) {
      div.classList.add('r-border')
    }
    game.appendChild(div)
    addClickListener(div)
  }
}
createGame();


function displayMessage(optionalMessage) {
  var target = document.getElementsByClassName('message')[0]
  if (!optionalMessage) {
    target.innerText = "Current Player : " + currentPlayer
  } else {
    target.innerText = optionalMessage
  }
}

function changeMessage() {
  var target = document.getElementsByClassName('message')[0]
  target.classList.add('end-message')
}

function makeMove(square, index) {
  square.innerText = currentPlayer
  board[index] = currentPlayer
}
