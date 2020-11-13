//Restart button
const restart = document.querySelector("button");

//Array with all of the cells
const cells = Array.from(document.querySelectorAll("div"));

//Array with all of the sections
const sections = Array.from(document.querySelectorAll("section"));

//Array with all of the top cells
let topSide = [];
for (let cell of sections[0].children) {
    topSide.push(cell);
}

//Array with all of the left cells
let leftSide = [];
for (let section of sections) {
    leftSide.push(section.querySelector("div"));
}

//storing paragraph in a variable
let winnerTie = document.querySelector(".winnerTie");
//currentPlayer variable
const currentPlayer = document.querySelector(".current-player");
//variable for if the game has been won
let gameOver = false;

const resetClicked = function() {
    //Hide the restart button
    restart.style.display = "none";

    for (cell of cells) {
        cell.textContent = "";
        cell.style.backgroundColor = "inherit";
        cell.style.color = "inherit";
        gameOver = false;
    }
    winnerTie.textContent = "";
    restart.removeEventListener("click", resetClicked);
    play();
}

//make function to remove events after win or draw
const gameEnd = function(isDraw, firstCell, direction) {
    cells[0].removeEventListener("click", cell1Clicked);
    cells[1].removeEventListener("click", cell2Clicked);
    cells[2].removeEventListener("click", cell3Clicked);
    cells[3].removeEventListener("click", cell4Clicked);
    cells[4].removeEventListener("click", cell5Clicked);
    cells[5].removeEventListener("click", cell6Clicked);
    cells[6].removeEventListener("click", cell7Clicked);
    cells[7].removeEventListener("click", cell8Clicked);
    cells[8].removeEventListener("click", cell9Clicked);

    //If the game is a draw, make the characters red
    if (isDraw === true) {
        for (cell of cells) {
            cell.style.color = "red";
            winnerTie.textContent = "Draw";
        }
    //Otherwise, show which player won
    } else if (firstChar === "X") {
      winnerTie.textContent = "Player 1 won! (X)";
      winnerTie.style.color = "green";
    } else {
      winnerTie.textContent = "Player 2 won! (O)";
      winnerTie.style.color = "green";
    }

    restart.style.display = "block";
  }

//This checks if the game is over
const checkEnd = function() {

    //Check for any vertical wins
    for (let cell of topSide) {
        if (cell.textContent !== "") {
            if (cell.textContent === cells[cells.indexOf(cell) + topSide.length].textContent &&
            cell.textContent === cells[cells.indexOf(cell) + (topSide.length * 2)].textContent) {
                console.log("vertical");
                cell.style.backgroundColor = "#3bbbf5";
                cells[cells.indexOf(cell) + 3].style.backgroundColor = "#3bbbf5";
                cells[cells.indexOf(cell) + 6].style.backgroundColor = "#3bbbf5";
                gameOver = true;
                gameEnd(false, cell, "vertical",);
            }
        }
    }

    //Check for any horizontal wins
    for (let cell of leftSide) {
        if (cell.textContent !== "") {
            if (cell.textContent === cells[cells.indexOf(cell) + 1].textContent &&
            cell.textContent === cells[cells.indexOf(cell) + 2].textContent) {
                console.log("horizontal");
                cell.style.backgroundColor = "#3bbbf5";
                cells[cells.indexOf(cell) + 1].style.backgroundColor = "#3bbbf5";
                cells[cells.indexOf(cell) + 2].style.backgroundColor = "#3bbbf5";
                gameOver = true;
                gameEnd(false, cell, "horizontal");
            }
        }
    }

    //Check for diagonal win
    const topCell = topSide[topSide.length - 1];
    if (topCell.textContent !== "") {
        if (topCell.textContent === cells[cells.indexOf(topCell) + (topSide.length - 1)].textContent &&
        topCell.textContent === cells[cells.indexOf(topCell) + ((topSide.length - 1) * 2)].textContent) {
            console.log("diagonal left");
            topCell.style.backgroundColor = "#3bbbf5";
            cells[cells.indexOf(topCell) + 2].style.backgroundColor = "#3bbbf5";
            cells[cells.indexOf(topCell) + 4].style.backgroundColor = "#3bbbf5";
            gameOver = true;
            gameEnd(false, topCell, ("diagonal left"));
        }
    }

    //Check for other diagonal win
    const leftCell = leftSide[0];
    if (leftCell.textContent !== "") {
        if (leftCell.textContent === cells[cells.indexOf(leftCell) + (leftSide.length + 1)].textContent &&
        leftCell.textContent === cells[cells.indexOf(leftCell) + ((leftSide.length + 1) * 2)].textContent) {
            console.log("diagonal right");
            leftCell.style.backgroundColor = "#3bbbf5";
            cells[cells.indexOf(leftCell) + 4].style.backgroundColor = "#3bbbf5";
            cells[cells.indexOf(leftCell) + 8].style.backgroundColor = "#3bbbf5";
            gameOver = true;
            gameEnd(false, leftCell, "diagonal right");
        }
    }

    if (turns === 9 && gameOver === false) {
      gameOver = true;

      gameEnd(true);
    }

    //If the game is not over, switch players
    if (gameOver === false) {
        if ((turns + player) % 2 === 0) {
            currentPlayer.textContent = "Player 1's turn";
        } else {
            currentPlayer.textContent = "Player 2's turn";
        }
    }
}

//This should run when an empty cell is clicked
const cellClick = function(cell) {
    console.log(turns);
    //If player is even, write the first character
    if (turns % 2 === 0) {
        cell.textContent = firstChar;
    //If it is odd, write the second character
    } else {
        cell.textContent = secondChar;
    }
    //Add one to turn
    turns++;

    checkEnd();
}

//This starts a new game
const play = function() {
    //Create a random number, either 0 or 1
    //If it is 0, "x" goes first

    if (Math.floor(Math.random() * Math.floor(2)) === 0) {
        firstChar = "X";
        secondChar = "O"
        //Variable to track which player's turn it is
        player = 0;
        currentPlayer.textContent = "Player 1 goes first (X)"
    //If it is 1, "o" goes first
    } else {
        firstChar = "O";
        secondChar = "X";
        //Variable to track which player's turn it is
        player = 1;
        currentPlayer.textContent = "Player 2 goes first (O)"
    }

    //Create a turns variable that tracks the amount of turns
    turns = 0;

    //Create an event listener for each column
    //Removes listeners once called
    //Call cellClick and pass the cell argument
    cells[0].addEventListener("click", cell1Clicked = () => {
        cells[0].removeEventListener("click", cell1Clicked);
        cellClick(cells[0]);
    });

    cells[1].addEventListener("click", cell2Clicked =() => {
        cells[1].removeEventListener("click", cell2Clicked);
        cellClick(cells[1]);
    });

    cells[2].addEventListener("click", cell3Clicked =() => {
        cells[2].removeEventListener("click", cell3Clicked);
        cellClick(cells[2]);
    });

    cells[3].addEventListener("click", cell4Clicked =() => {
        cells[3].removeEventListener("click", cell4Clicked);
        cellClick(cells[3]);
    });

    cells[4].addEventListener("click", cell5Clicked =() => {
        cells[4].removeEventListener("click", cell5Clicked);
        cellClick(cells[4]);
    });

    cells[5].addEventListener("click", cell6Clicked =() => {
        cells[5].removeEventListener("click", cell6Clicked);
        cellClick(cells[5]);
    });

    cells[6].addEventListener("click", cell7Clicked =() => {
        cells[6].removeEventListener("click", cell7Clicked);
        cellClick(cells[6]);
    });

    cells[7].addEventListener("click", cell8Clicked =() => {
        cells[7].removeEventListener("click", cell8Clicked);
        cellClick(cells[7]);
    });

    cells[8].addEventListener("click", cell9Clicked =() => {
        cells[8].removeEventListener("click", cell9Clicked);
        cellClick(cells[8]);
    });

    //Add event listener to restart button
    restart.addEventListener("click", resetClicked)
}

play();
