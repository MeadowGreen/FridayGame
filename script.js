/*
We store our game status element here to allow us to more easily 
use it later on 
*/
const statusDisplay = document.querySelector('.game--status');
/*
Here we declare some variables that we will use to track the 
game state throught the game. 
*/
/*
We will use gameActive to pause the game in case of an end scenario
*/
let gameActive = true;
/*
We will store our current player here, so we know whos turn 
*/
let currentPlayer = "X";
/*
We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played cells and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`;
/*
We set the initial message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed() {
/*
We update our internal game state to reflect the played move, 
as well as update the user interface to reflect the played move
*/
gameState[clickedCellIndex] = currentPlayer;
clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {
/*
We will save the clicked html element in a variable for easier further use
*/    
    const clickedCell = clickedCellEvent.target;
/*
Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
integer(number)
*/
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );
/* 
Next up we need to check whether the call has already been played, 
or if the game is paused. If either of those is true we will simply ignore the click.
*/
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
/* 
If everything if in order we will proceed with the game flow
*/    
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation()
}
function handleRestartGame() {

}
/*
And finally we add our event listeners to the actual game cells, as well as our 
restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);