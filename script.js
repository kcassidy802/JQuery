let contestant = 'X'; // starting off with x as the first move
let game = ['', '', '', '', '', '', '', '', '']; // our array 
let myGame = true;

function makeMove(index) { //makeMove function 
  if (game[index] === '' && myGame) {
    game[index] = contestant;
    document.getElementsByClassName('cell')[index].innerText = contestant;
    whosWinner();
    tieGame();
    myPlayer();
  }
}

function myPlayer() { // myplayer function to see whos turn it is
  contestant = (contestant === 'X') ? 'O' : 'X';
  document.getElementById('turn').innerText = `${contestant}'s Turn`;
}

function whosWinner() {
  let winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // this will showecase winning by row
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // this will showcase winning by a column
    [0, 4, 8], [2, 4, 6]             // this will showcase winning by diagnols 
  ];

  for (let pattern of winPatterns) { // we see who the winner will be by the selected pattern
   let [a, b, c] = pattern;
    if (game[a] && game[a] === game[b] && game[a] === game[c]) {
      viewResult(`${contestant}: Is the Winner Winner Chicken Dinner`);
      return;
    }
  }
}

function tieGame() { // if no winner then this provides us with a tie 
  if (!game.includes('')) {
    viewResult('Its a Tie!');
  }
}

function viewResult(message) { // see the results 
  document.getElementById('result').innerText = message;
  document.getElementById('result').style.display = 'block';
  gameActive = false;
}

function newGame() { //new game/ restart function
  contestant = 'X';
  game = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  //we can clear the cell
  let cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
  document.getElementById('result').style.display = 'none';

  // we will reset after each turn 
  document.getElementById('turn').innerText = `${contestant}'s Turn`;
}
